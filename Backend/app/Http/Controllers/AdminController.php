<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class AdminController extends Controller
{
    //================ after implementing login with session ==============
    public function profile(Request $request)
    {
        $admin = $request->user(); // get logged-in admin from session
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
    public function updateProfile(Request $request)
    {
        $admin = $request->user();
        if (!$admin) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $data = $request->validate([
            'username' => 'required|string|max:255|unique:admins,username,' . $admin->id,
            'email' => 'required|email|max:255|unique:admins,email,' . $admin->id,
            'password' => 'nullable|string|min:6',
            'image' => 'nullable|image|max:2048',
        ]);

        $admin->username = $data['username'];
        $admin->email = $data['email'];

        if (!empty($data['password'])) {
            $admin->password = Hash::make($data['password']);
        }

        // Handle image upload
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('profile_images', 'public');
            $admin->profile_image = $path;
        }

        $admin->save();

        return response()->json([
            'message' => 'Profile updated successfully',
            'admin' => $admin,
        ]);
    }
}