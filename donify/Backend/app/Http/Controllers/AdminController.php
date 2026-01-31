<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function profile(Request $request)
    {
        // Get the currently authenticated admin
        $admin = $request->user();
        if (!$admin) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return response()->json([
            'id' => $admin->id,
            'username' => $admin->username,
            'email' => $admin->email,
            'profile_image' => $admin->profile_image ? asset('storage/' . $admin->profile_image) : null,
        ]);
    }
}
