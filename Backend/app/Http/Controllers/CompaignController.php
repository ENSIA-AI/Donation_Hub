<?php

namespace App\Http\Controllers;

use App\Models\Compaign;
use Illuminate\Http\Request;

class CompaignController extends Controller
{
    public function index()
    {
        $campaigns = Compaign::with('organization')->get()->map(function ($c) {
            return [
                'id' => $c->id,
                'title' => $c->compaign_title,
                'content' => $c->compaign_content,
                'image_url' => $c->compaign_img ? asset('storage/' . $c->compaign_img) : null,
                'organization' => $c->organization->name,
                'status' => $c->status,
                'date' => $c->compaign_date,
            ];
        });

        return response()->json($campaigns);
    }
    public function show($id)
    {
        return Compaign::findOrFail($id);
    }
    public function update(Request $request, $id)
    {

        $request->validate([
            'compaign_title' => 'sometimes|string|max:255',
            'compaign_content' => 'sometimes|string',
            'compaign_img' => 'nullable|image|mimes:jpg,jpeg,png|max:4096',
            'status' => 'sometimes|in:waiting,accepted,rejected',
        ]);

        $compaign = Compaign::findOrFail($id);

        if ($request->has('compaign_title')) {
            $compaign->compaign_title = $request->compaign_title;
        }
        if ($request->has('compaign_content')) {
            $compaign->compaign_content = $request->compaign_content;
        }
        if ($request->hasFile('compaign_img')) {
            $imagePath = $request->file('compaign_img')->store('compaigns', 'public');
            $compaign->compaign_img = $imagePath;
        }
        if ($request->has('status')) {
            $compaign->status = $request->status;
        }

        $compaign->save();

        return response()->json($compaign);
    }


    public function store(Request $request)
    {
        $request->validate([
            'compaign_title' => 'required|string|max:255',
            'compaign_content' => 'required|string',
            'compaign_img' => 'nullable|image|mimes:jpg,jpeg,png|max:4096',
            'organization_id' => 'required|exists:organizations,id',
        ]);

        $imagePath = null;
        if ($request->hasFile('compaign_img')) {
            $imagePath = $request->file('compaign_img')->store('compaigns', 'public');
        }

        $compaign = Compaign::create([
            'compaign_title' => $request->compaign_title,
            'compaign_content' => $request->compaign_content,
            'compaign_img' => $imagePath,
            'status' => 'waiting',
            'compaign_date' => now(),
            'organization_id' => $request->organization_id,
        ]);

        return response()->json([
            'id' => $compaign->id,
            'title' => $compaign->compaign_title,
            'content' => $compaign->compaign_content,
            'image_url' => $imagePath ? asset('storage/' . $imagePath) : null, // <-- full URL
            'organization' => $compaign->organization->name,
            'status' => $compaign->status,
            'date' => $compaign->compaign_date,
        ], 201);
    }


    public function destroy($id)
    {
        $compaign = Compaign::findOrFail($id);
        $compaign->delete();
        return response()->json(['message' => 'Compaign deleted successfully']);
    }
    // function to fetch pending compaigns 
    public function pending()
    {
        return Compaign::with('organization')
            ->where('status', 'waiting')
            ->latest()
            ->get();
    }
    public function approve($id)
    {
        $campaign = Compaign::findOrFail($id);
        $campaign->status = 'accepted';
        $campaign->save();

        return response()->json(['message' => 'Campaign approved']);
    }
    public function reject($id)
    {
        $campaign = Compaign::findOrFail($id);
        $campaign->status = 'rejected';
        $campaign->save();

        return response()->json(['message' => 'Campaign rejected']);
    }

    public function accepted()
{
    return Compaign::with('organization')
        ->where('status', 'accepted')
        ->get();
}
    // In CompaignController

    public function byOrganization($orgId)
    {
        return Compaign::where('organization_id', $orgId)
            ->where('status', 'accepted')
            ->with('organization')
            ->latest()
            ->get();
    }
    // ================================search functions ===================================
    public function autocomplete(Request $request)
    {
        $q = $request->query('q'); // the search text
        if (!$q || strlen($q) < 2) {
            return response()->json([]);
        }

        // Order by relevance: exact match first, then startsWith, then contains
        $results = Compaign::where('compaign_title', 'LIKE', "%{$q}%")
            ->orderByRaw("
            CASE
                WHEN compaign_title LIKE ? THEN 0
                WHEN compaign_title LIKE ? THEN 1
                ELSE 2
            END
        ", ["{$q}", "{$q}%"])
            ->limit(8)
            ->pluck('compaign_title');

        return response()->json($results);
    }

    public function search(Request $request)
    {
        $q = $request->query('q');                 // 🔹 campaign name
        $wilayaId = $request->query('wilaya_id');
        $categoryId = $request->query('category_id');

        $query = Compaign::where('status', 'accepted')
            ->with('organization');

        // 🔹 SEARCH BY CAMPAIGN TITLE
        if ($q) {
            $query->where('compaign_title', 'LIKE', "%{$q}%");
        }

        // 🔹 FILTER BY WILAYA
        if ($wilayaId) {
            $query->whereHas('organization', function ($org) use ($wilayaId) {
                $org->where('wilaya_id', $wilayaId);
            });
        }

        // 🔹 FILTER BY CATEGORY
        if ($categoryId) {
            $query->whereHas('organization', function ($org) use ($categoryId) {
                $org->where('category_id', $categoryId);
            });
        }

        $query->orderBy('compaign_date', 'desc');

        return response()->json($query->get());
    }
}
