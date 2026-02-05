<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class OrganizationController  extends Controller
{




    public function show($id)
    {
        $organization = Organization::with(['category', 'wilaya'])
            ->where('id', $id)
            ->where('status', 'approved') // only approved
            ->firstOrFail();
        return response()->json([
            'id' => $organization->id,
            'org_name' => $organization->org_name,
            'org_description' => $organization->org_description,
            'org_slogan' => $organization->org_slogan,
            'category_id' => $organization->category_id,
            'wilaya_id' => $organization->wilaya_id,
            'org_mission' => $organization->org_mission,
            'org_vision' => $organization->org_vision,

            'category' => $organization->category,
            // Individual values (for backward compatibility)
            'value1' => $organization->value1,
            'value2' => $organization->value2,
            'value3' => $organization->value3,
            'value4' => $organization->value4,

            // Array format (new way)
            'values' => $organization->values,

            // These arrays now ALWAYS have all slots
            'programs' => $organization->programs,    // Always 2 items
            'impact' => $organization->impact,        // Always 3 items
            'contact' => $organization->contact,      // Dynamic based on what exists
            'posts' => $organization->posts,        // All campaigns
            'program1_desc' => $organization->program1_desc,
            'program1_title' => $organization->program1_title,
            'program2_desc' => $organization->program2_desc,
            'program2_title' => $organization->program2_title,
            // Images with full URLs
            'heroImage' => $organization->org_hero_img ? asset('storage/' . $organization->org_hero_img) : null,
            'logoImage' => $organization->org_logo ? asset('storage/' . $organization->org_logo) : null,
            'mission_img' => $organization->mission_img ? asset('storage/' . $organization->mission_img) : null,
        ]);
    }
    public function index(Request $request)
    {
        $status = $request->query('status', 'approved');

        $organizations = Organization::with(['category', 'wilaya'])
            ->when($status, function ($q, $status) {
                $q->where('status', $status);
            })
            ->get();

        $organizations = $organizations->map(function ($organization) {
            return [
                'id' => $organization->id,
                'org_name' => $organization->org_name,
                'org_description' => $organization->org_description,
                'category' => $organization->category,
                'wilaya' => $organization->wilaya,
                'heroImage' => $organization->org_hero_img
                    ? asset('storage/' . $organization->org_hero_img)
                    : null,

                'logoImage' => $organization->org_logo
                    ? asset('storage/' . $organization->org_logo)
                    : null,

                'mission_img' => $organization->mission_img
                    ? asset('storage/' . $organization->mission_img)
                    : null,
            ];
        });

        return response()->json($organizations);
    }
    public function update(Request $request, $id)
    {
        $organization = Organization::findOrFail($id);

        if ($organization->status !== 'approved') {
            return response()->json([
                'message' => 'Organization not approved yet'
            ], 403);
        }

        $validated = $request->validate([
            'org_slogan' => 'sometimes|string',
            'org_mission' => 'sometimes|string',
            'org_vision' => 'sometimes|string',

            'program1_title' => 'sometimes|string',
            'program1_desc' => 'sometimes|string',
            'program2_title' => 'sometimes|string',
            'program2_desc' => 'sometimes|string',

            'value1' => 'sometimes|string',
            'value2' => 'sometimes|string',
            'value3' => 'sometimes|string',
            'value4' => 'sometimes|string',

            'org_hero_img' => 'nullable|image',
            'org_logo' => 'nullable|image',
            'mission_img' => 'nullable|image',
        ]);

        // images
        if ($request->hasFile('org_hero_img')) {
            $validated['org_hero_img'] =
                $request->file('org_hero_img')->store('organizations/hero', 'public');
        }

        if ($request->hasFile('org_logo')) {
            $validated['org_logo'] =
                $request->file('org_logo')->store('organizations/logo', 'public');
        }

        if ($request->hasFile('mission_img')) {
            $validated['mission_img'] =
                $request->file('mission_img')->store('organizations/mission', 'public');
        }

        $organization->update($validated);

        return response()->json($organization);
    }


    public function autocomplete(Request $request)
    {
        $q = $request->query('q');
        if (!$q || strlen($q) < 2) {
            return response()->json([]);
        }
        // Order by relevance: exact match first, then startsWith, then contains
        $results = Organization::where('org_name', 'LIKE', "%{$q}%")
            ->orderByRaw("
            CASE
                WHEN org_name LIKE ? THEN 0
                WHEN org_name LIKE ? THEN 1
                ELSE 2
            END
        ", ["{$q}", "{$q}%"])
            ->limit(8)
            ->pluck('org_name');


        return response()->json($results);
    }

    public function search(Request $request)
    {
        $q = $request->query('q');
        $wilayaId = $request->query('wilaya_id');
        $categoryId = $request->query('category_id');

        $query = Organization::query();

        if ($q) $query->where('org_name', 'LIKE', "%{$q}%");
        if ($categoryId) $query->where('category_id', $categoryId);

        // if($wilayaId) $query->orderByRaw('CASE WHEN wilaya_id = ? THEN 0 ELSE 1 END', [$wilayaId]);
        if ($wilayaId) $query->where('wilaya_id', $wilayaId);

        $query->orderBy('org_name');

        return response()->json($query->get());
    }




    public function regester(Request $request)
    {
        $data = $request->validate([
            'org_name' => 'required|string',
            'org_registrationDate' => 'required|date',
            'org_description' => 'required|string',
            'category_id' => 'required|exists:categories,id',
            'wilaya_id' => 'required|exists:wilayas,id',
            'org_email' => 'required|email',
            'password' => 'required|string|min:6',
            'org_proof' => 'nullable|file|mimes:pdf,jpg,jpeg,png',
        ]);

        //  HASH PASSWORD
        $data['password'] = Hash::make($data['password']);

        // Handle file upload
        if ($request->hasFile('org_proof')) {
            $path = $request->file('org_proof')->store('proofs', 'public');
            $data['org_proof'] = $path;
        }

        // Force status to pending
        $data['status'] = 'pending';

        $organization = Organization::create($data);

        return response()->json([
            'message' => 'Organization registered successfully.',
            'organization' => $organization
        ], 201);
    }

    /* Approve an organization
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

    /* Reject an organization
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

    public function pending()
    {
        return Organization::where('status', 'pending')->get();
    }
}
