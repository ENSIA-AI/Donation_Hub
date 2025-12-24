<?php

namespace App\Http\Controllers;

use App\Models\Wilaya;
use Illuminate\Http\Request;

class WilayaController extends Controller
{
    
    public function store(Request $request)
    {
        $data = $request->validate([
            'wilaya_name' => 'required|string'
        ]);

        $wilaya = Wilaya::create($data);

        return response()->json($wilaya, 201);
    }

    
    public function index()
    {
        return response()->json(Wilaya::all(), 200);
    }
}

