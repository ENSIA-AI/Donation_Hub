<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Region;
use Illuminate\Http\Request;

class RegionController extends Controller
{
    // Get all regions
    public function index()
    {
        return response()->json(Region::all());
    }

    // Create new region
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255'
        ]);

        $region = Region::create([
            'name' => $request->name,
        ]);

        return response()->json($region, 201);
    }

    // Show a single region
    public function show($id)
    {
        $region = Region::findOrFail($id);
        return response()->json($region);
    }

    // Update region
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255'
        ]);

        $region = Region::findOrFail($id);
        $region->update([
            'name' => $request->name
        ]);

        return response()->json($region);
    }

    // Delete region
    public function destroy($id)
    {
        $region = Region::findOrFail($id);
        $region->delete();

        return response()->json(['message' => 'Region deleted successfully']);
    }
}
