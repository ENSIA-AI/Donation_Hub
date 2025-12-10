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
        'compaign_date' => 'required|date',
        'compaign_approval' => 'boolean',
        'compaign_img' => 'nullable|string',
        ]);
        $compaign= Compaign::findOrFail($id);
        $compaign->update($request->all()); 
        return response()->json($compaign);
        
    }
    
    public function store(Request $request){
        $request->validate([
        'compaign_title' => 'required|string|max:255',
        'compaign_content' => 'required|string',
        'compaign_img' => 'nullable|image|mimes:jpg,jpeg,png|max:4096',
        ]);
        $data=$request->only('compaign_title','compaign_content') ; 
        if($request->hasFile('compaign_img')){
            $imagePath= $request->file('compaign_img')->store('compaigns', 'public');
            $data['compaign_img'] = $imagePath;
        }

        $compaign = Compaign::create([
    'compaign_title' => $request->compaign_title,
    'compaign_content' => $request->compaign_content,
    'compaign_img' => $request->file('compaign_img') ? $request->file('compaign_img')->store('images') : null,
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