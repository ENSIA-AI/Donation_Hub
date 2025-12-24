<?php

namespace App\Http\Controllers;

use App\Models\Compaign;
use Illuminate\Http\Request;

class CompaignController extends Controller
{
    public function index(){
        return Compaign::all() ; 
    }
    public function show($id){
        return Compaign::findOrFail($id) ; 
    }
    public function update(Request $request, $id){
    $request->validate([
        'compaign_title' => 'required|string|max:255',
        'compaign_content' => 'required|string',
        'compaign_img' => 'nullable|image|mimes:jpg,jpeg,png|max:4096',
    ]);

    $compaign = Compaign::findOrFail($id);

    $compaign->compaign_title = $request->compaign_title;
    $compaign->compaign_content = $request->compaign_content;

    // Handle image if uploaded
    if ($request->hasFile('compaign_img')) {
        $imagePath = $request->file('compaign_img')->store('compaigns', 'public');
        $compaign->compaign_img = $imagePath;
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
    ]);
    $imagePath = null;
    if ($request->hasFile('compaign_img')) {
        $imagePath = $request->file('compaign_img')->store('compaigns', 'public');
    }

    $compaign = Compaign::create([
        'compaign_title' => $request->compaign_title,
        'compaign_content' => $request->compaign_content,
        'compaign_img' => $imagePath,
        'compaign_date' => now(),
    ]);

    return response()->json($compaign, 201);
}

    public function destroy($id){
        $compaign = Compaign::findOrFail($id) ;
        $compaign->delete(); 
        return response()->json(['messsage'=>'Compaign deleted successfully']);
    }


    
}