<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Compaign;
use App\Models\Category;

class DashboardController extends Controller
{


    public function campaignsByCategory()
    {
        // Get all categories
        $categories = Category::all();

        // Map to include campaign counts
        $data = $categories->map(function ($category) {
            return [
                'category' => $category->category,
                'campaigns' => $category->compaigns()->count(), // count campaigns in this category
            ];
        });

        return response()->json($data);
    }



    // In DashboardController
    public function organizationsByCategoryCount()
    {
        // Get categories with count of organizations
        $categories = \App\Models\Category::withCount('organizations')->get();

        $result = $categories->map(function ($cat) {
            return [
                'category' => $cat->category,
                'organizations' => $cat->organizations_count, // number of orgs
            ];
        });

        return response()->json($result);
    }
}
