<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class OrganizationController  extends Controller
{
 public function store(Request $request)
{
    $validated = $request->validate([
        'org_name' => 'required|max:255',
        'org_description' => 'required',
        'org_slogan' => 'required',
        'org_mission' => 'required',
        'org_vision' => 'required',

        'program1_title' => 'required',
        'program1_desc' => 'required',
        'program2_title' => 'required',
        'program2_desc' => 'required',

        'value1' => 'required',
        'value2' => 'required',
        'value3' => 'required',
        'value4' => 'required',

        'status' => 'nullable',
        'org_email' => 'nullable|email',
        'wilaya_id' => 'nullable',
        'category_id' => 'nullable',
        'org_registrationDate' => 'nullable|date',
        // Images validation
        'org_hero_img' => 'nullable|image|mimes:jpg,jpeg,png|max:4096',
        'org_logo' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        'mission_img' => 'nullable|image|mimes:jpg,jpeg,png|max:4096',
    ]);
    // Handle hero image
if ($request->hasFile('org_hero_img')) {
    $validated['org_hero_img'] = $request->file('org_hero_img')->store('organizations/hero', 'public');
}

// Handle logo
if ($request->hasFile('org_logo')) {
    $validated['org_logo'] = $request->file('org_logo')->store('organizations/logo', 'public');
}

// Handle mission image
if ($request->hasFile('mission_img')) {
    $validated['mission_img'] = $request->file('mission_img')->store('organizations/mission', 'public');
}
$validated['status'] = 'pending';
if(isset($validated['password'])){
    $validated['password'] = Hash::make($validated['password']);
}
 $organization = Organization::create($validated);
   return response()->json([
    'message' => 'Organization created successfully',
    'organization' => [
        'id' => $organization->id,
        'org_name' => $organization->org_name,
        'org_hero_img' => $organization->org_hero_img ? asset('storage/' . $organization->org_hero_img) : null,
        'org_logo' => $organization->org_logo ? asset('storage/' . $organization->org_logo) : null,
        'mission_img' => $organization->mission_img ? asset('storage/' . $organization->mission_img) : null,
    ]
], 201);
}

    public function show($id){
        $organization = Organization::with(['category','wilaya'])
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
            'program1_desc' =>$organization->program1_desc,
            'program1_title' =>$organization->program1_title,
            'program2_desc' =>$organization->program2_desc,
            'program2_title' =>$organization->program2_title,
            // Images with full URLs
            'heroImage' => $organization->org_hero_img ? asset('storage/' . $organization->org_hero_img) : null,
            'logoImage' => $organization->org_logo ? asset('storage/' . $organization->org_logo) : null,
            'mission_img' => $organization->mission_img ? asset('storage/' . $organization->mission_img) : null,
        ]);
    }
    public function index(Request $request)
{
    $status = $request->query('status', 'approved');

    $organizations = Organization::with(['category','wilaya'])
        ->when($status, function($q, $status) {
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

   

    
    public function update(Request $request ,$id){
        $organization =Organization::findOrfail($id);
        $validated = $request->validate ([
           'org_name'=>'sometimes|max:255',
           'org_description'=>'sometimes',
           'org_slogan'=>'sometimes',
            'org_mission'=>'sometimes',
            'org_vision'=>'sometimes',
            'program1_title' =>'sometimes',
            'program1_desc'=>'sometimes',
            'program2_title'=>'sometimes',
            'program2_desc'=>'sometimes',
            'value1'=>'sometimes',
            'value2'=>'sometimes',
            'value3'=>'sometimes',
            'value4'=>'sometimes',
            // Images validation
        'org_hero_img' => 'nullable|image|mimes:jpg,jpeg,png|max:4096',
        'org_logo' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
      'mission_img' => 'nullable|image|mimes:jpg,jpeg,png|max:4096',
        ]);
        // Handle images
        if ($request->hasFile('org_hero_img')) {
            $validated['org_hero_img'] = $request->file('org_hero_img')->store('organizations/hero', 'public');
        }
        if ($request->hasFile('org_logo')) {
            $validated['org_logo'] = $request->file('org_logo')->store('organizations/logo', 'public');
        }
        if ($request->hasFile('mission_img')) {
            $validated['mission_img'] = $request->file('mission_img')->store('organizations/mission', 'public');
        }

        $organization->update($validated);
        return response()->json($organization);
    }
    public function destroy($id){
        $organization =Organization::findOrFail($id);
        $organization->delete();
        return response()->json(['message'=>'deleted']);

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

public function search(Request $request){
    $q = $request->query('q'); 
    $wilayaId = $request->query('wilaya_id');
    $categoryId = $request->query('category_id');

    $query = Organization::query();

    if($q) $query->where('org_name', 'LIKE', "%{$q}%");
    if($categoryId) $query->where('category_id', $categoryId);

    // if($wilayaId) $query->orderByRaw('CASE WHEN wilaya_id = ? THEN 0 ELSE 1 END', [$wilayaId]);
if($wilayaId) $query->where('wilaya_id', $wilayaId);

    $query->orderBy('org_name');

    return response()->json($query->get());
}


}