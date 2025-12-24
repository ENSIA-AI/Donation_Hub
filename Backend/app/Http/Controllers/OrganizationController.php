<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class OrganizationController extends Controller
{
    /**
     * List all organizations
     */
    public function index()
    {
        $organizations = Organization::with(['category','wilaya'])->get();

        return response()->json([
            'organizations' => $organizations
        ], 200);
    }

    /**
     * Create a new organization (with proof upload)
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'org_name' => 'required|string',
            'org_registrationDate' => 'required|date',
            'org_description' => 'required|string',
            'category_id' => 'required|exists:categories,id',
            'wilaya_id' => 'required|exists:wilayas,id',
            'org_email' => 'required|email',
            'org_proof' => 'nullable|file|mimes:pdf,jpg,jpeg,png',
        ]);

        // Handle file upload
        if ($request->hasFile('org_proof')) {
            $path = $request->file('org_proof')->store('proofs', 'public');
            $data['org_proof'] = $path;
        }

        $data['status'] = 'pending';

        $organization = Organization::create($data);

        return response()->json([
            'message' => 'Organization registered successfully.',
            'organization' => $organization
        ], 201);
    }

    /**
     * Approve an organization
     */
    public function approve($id)
    {
        $org = Organization::findOrFail($id);
        $org->status = 'approved';
        $org->save();

        return response()->json([
            'message' => 'Organization approved.',
            'organization' => $org
        ], 200);
    }

    /**
     * Reject an organization
     */
    public function reject($id)
    {
        $org = Organization::findOrFail($id);
        $org->status = 'rejected';
        $org->save();

        return response()->json([
            'message' => 'Organization rejected.',
            'organization' => $org
        ], 200);
    }

    /**
     * Delete an organization (and its uploaded proof)
     */
    public function destroy($id)
    {
        $org = Organization::findOrFail($id);

        // Delete the uploaded proof file
        if ($org->org_proof && Storage::disk('public')->exists($org->org_proof)) {
            Storage::disk('public')->delete($org->org_proof);
        }

        $org->delete();

        return response()->json([
            'message' => 'Organization deleted successfully.'
        ], 200);
    }
}
