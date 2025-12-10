<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use Illuminate\Http\Request;

class OrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
   public function store(Request $request)
{
    $request->validate([
        'org_Name' => 'required|string|max:255',
        'org_registrationDate' => 'required|date',
        'org_description' => 'nullable|string',
        'org_type' => 'nullable|string',
        'org_slogan' => 'nullable|string',
    ]);

    $organization = new \App\Models\Organization();
    $organization->org_Name = $request->org_Name;
    $organization->org_registrationDate = $request->org_registrationDate;
    $organization->org_description = $request->org_description;
    $organization->org_type = $request->org_type;
    $organization->org_slogan = $request->org_slogan;
    $organization->status = 'pending'; // default pending

    $organization->save();

    return response()->json(['message' => 'Organization registered successfully', 'data' => $organization]);
}

public function pending()
    {
        $pendingOrgs = Organization::where('status', 'pending')->get();

        return response()->json([
            'data' => $pendingOrgs
        ]);
    }

    public function approve($id)
    {
        $organization = Organization::find($id);

        if (!$organization) {
            return response()->json(['message' => 'Organization not found'], 404);
        }

        $organization->status = 'approved';
        $organization->save();

        return response()->json([
            'message' => 'Organization approved successfully',
            'data' => $organization
        ]);
    }


    public function reject($id)
    {
        $organization = Organization::find($id);

        if (!$organization) {
            return response()->json(['message' => 'Organization not found'], 404);
        }

        $organization->status = 'rejected';
        $organization->save();

        return response()->json([
            'message' => 'Organization rejected successfully',
            'data' => $organization
        ]);
    }



    /**
     * Display the specified resource.
     */
    public function show(Organization $organization)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Organization $organization)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Organization $organization)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Organization $organization)
    {
        //
    }
}
