<?php

namespace App\Http\Controllers;

use App\Models\Compaign;
use Illuminate\Http\Request;

class CompaignController extends Controller
{
    public function index()
    {
        return Compaign::all();
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
            'organization_id' => 'required|exists:organizations,id', // <-- add this
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
            'organization_id' => $request->organization_id, // <-- add this
        ]);

        return response()->json($compaign, 201);
    }


    public function destroy($id)
    {
        $compaign = Compaign::findOrFail($id);
        $compaign->delete();
        return response()->json(['messsage' => 'Compaign deleted successfully']);
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
        $wilayaId = $request->query('wilaya_id');      // region filter
        $categoryId = $request->query('category_id');  // category filter

        $query = Compaign::with('organization'); // eager load org info

        if ($wilayaId) {
            // only include campaigns whose org is in this wilaya
            $query->whereHas('organization', function ($q) use ($wilayaId) {
                $q->where('wilaya_id', $wilayaId);
            });
        }

        if ($categoryId) {
            // only include campaigns whose org is in this category
            $query->whereHas('organization', function ($q) use ($categoryId) {
                $q->where('category_id', $categoryId);
            });
        }

        $query->orderBy('compaign_date', 'desc');

        return response()->json($query->get());
    }
}
