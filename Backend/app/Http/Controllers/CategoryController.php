<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
   
    public function index()
    {
        return response()->json(Category::all());
    }

    // Create a new category
    public function store(Request $request)
    {
        $request->validate([
            'category' => 'required|string|max:255'
        ]);

        $category = Category::create([
            'category' => $request->category
        ]);

        return response()->json($category, 201);
    }

    // Show a single category
    public function show($id)
    {
        $category = Category::findOrFail($id);
        return response()->json($category);
    }

    // Update category
    public function update(Request $request, $id)
    {
        $request->validate([
            'category' => 'required|string|max:255'
        ]);

        $category = Category::findOrFail($id);
        $category->update([
            'category' => $request->name
        ]);

        return response()->json($category);
    }

    // Delete category
    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();

        return response()->json(['message' => 'Category deleted successfully']);
    }
}