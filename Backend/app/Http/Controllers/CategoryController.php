<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    // List all categories
    public function index()
    {
        return response()->json(Category::all(), 200);
    }

    // Create a new category
    public function store(Request $request)
    {
        $data = $request->validate([
            'category' => 'required|string'
        ]);

        $category = Category::create($data);

        return response()->json($category, 201);
    }
}
