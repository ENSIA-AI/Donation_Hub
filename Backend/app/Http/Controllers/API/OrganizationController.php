<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use Illuminate\Http\Request;

class OrganizationController extends Controller
{
    // Get all organizations
    public function index()
    {
        return response()->json(Organization::with(['category', 'region'])->get());
    }

    // Reject organization (soft reject / status update)
public function reject($id)
{
    $organization = Organization::findOrFail($id);
    $organization->status = 'rejected';
    $organization->save();

    return response()->json([
        'message' => 'Organization rejected successfully',
        'organization' => $organization
    ]);
}


    public function approve($id)
{
    $organization = Organization::findOrFail($id);

    $organization->status = 'approved';
    $organization->save();

    return response()->json([
        'message' => 'Organization approved successfully'
    ]);
}

    // Create new organization
    public function store(Request $request)
    {
        $request->validate([
            'org_name' => 'required|string|max:255',
            'org_registrationDate' => 'required|date',
            'org_description' => 'required|string',
            'org_email' => 'required|email',
            'category_id' => 'required|exists:categories,id',
            'region_id' => 'required|exists:regions,id',
            'org_slogan' => 'nullable|string',
            'status' => 'nullable|in:pending,approved,rejected',
            'org_hero_img' => 'nullable|string',
            'org_logo' => 'nullable|string',
        ]);

        $organization = Organization::create($request->all());

        return response()->json($organization, 201);
    }

    // Show one organization
    public function show($id)
    {
        $organization = Organization::with(['category', 'region'])->findOrFail($id);
        return response()->json($organization);
    }

    // Update organization
    public function update(Request $request, $id)
    {
        $request->validate([
            'org_name' => 'sometimes|required|string|max:255',
            'org_registrationDate' => 'sometimes|required|date',
            'org_description' => 'sometimes|required|string',
            'org_email' => 'sometimes|required|email',
            'category_id' => 'sometimes|required|exists:categories,id',
            'region_id' => 'sometimes|required|exists:regions,id',
            'org_slogan' => 'nullable|string',
            'status' => 'nullable|in:pending,approved,rejected',
            'org_hero_img' => 'nullable|string',
            'org_logo' => 'nullable|string',
        ]);

        $organization = Organization::findOrFail($id);
        $organization->update($request->all());

        return response()->json($organization);
    }

    // Delete organization
    public function destroy($id)
    {
        $organization = Organization::findOrFail($id);
        $organization->delete();

        return response()->json(['message' => 'Organization deleted successfully']);
    }
}
