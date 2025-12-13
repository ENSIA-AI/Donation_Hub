<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use Illuminate\Http\Request;

class OrganizationController  extends Controller
{
     public function store(Request $request)
    {
        $validated = $request->validate([
            'program1_title' => 'required|max:255',
            'program1_desc' => 'required',
            'program2_title'=> 'required',
            'program2_desc' =>'required'

        ]);

        $organization = Organization::create($validated);

        return response()->json($organization, 201);
    }
    public function show($id){
        $organization = Organization::with('category')->findOrFail($id);
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
            'posts' => $organization->posts,          // All campaigns
            
            // Images with full URLs
            'heroImage' => $organization->org_hero_img ? asset('storage/' . $organization->org_hero_img) : null,
            'logoImage' => $organization->org_logo ? asset('storage/' . $organization->org_logo) : null,
            'mission_img' => $organization->mission_img ? asset('storage/' . $organization->mission_img) : null,
        ]);
    }
    public function index(){//to redefine latter
        $organizations = Organization::with('category')->get();
        return response()->json($organizations);
    }
    
    public function update(Request $request ,$id){
        $organization =Organization::findOrfail($id);
        $validated = $request->validate ([
           'org_name'=>'sometimes|max:255',
           'org_description'=>'sometimes',
           'org_slogan'=>'sometimes',
            'org_mission'=>'sometimes',
            'org_vision'=>'sometimes',
            'program1_title' =>'sometimes',
            'program1_desc '=>'sometimes',
            'program2_title'=>'sometimes',
            'program2_desc'=>'sometimes',
            'value1'=>'sometimes',
            'value2'=>'sometimes',
            'value3'=>'sometimes',
            'value4'=>'sometimes'

        ]);
        $organization->update($validated);
        return response()->json($organization);
    }
    public function destroy($id){
        $organization =Organization::findOrFail($id);
        $organization->delete();
        return response()->json(['message'=>'deleted']);

    }

}
