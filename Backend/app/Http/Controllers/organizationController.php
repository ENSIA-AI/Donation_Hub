<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use Illuminate\Http\Request;

class organizationController extends Controller
{
    public function show($id){
        $organization = Organization::findOrFail($id);
        return response()->json($organization);
    }
    public function index(){//to redefine latter
        $organizations = Organization::all();
        return response()->json($organizations);
    }
    
    public function update(Request $request ,$id){
        $organization =Organization::findOrfail($id);
        $validated = $request->validate ([
           'org_name'=>'sometimes|max:255',
           'org_description'=>'sometimes',
           'org_slogan'=>'somtimes',

        ]);
        $organization->update($validated);
        return response()->json($organization);
    }

}
