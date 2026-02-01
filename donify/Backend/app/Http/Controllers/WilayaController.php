<?php

namespace App\Http\Controllers;

use App\Models\Wilaya;
use Illuminate\Http\Request;

class WilayaController extends Controller
{
    public function index(){
        $wilayas= Wilaya::all() ;
        return response()->json($wilayas);
    }
    public function search(Request $request)
    {
        $term = $request->query('term');
        $wilayas = Wilaya::search($term)->get(); 
        return response()->json($wilayas);
    }
}