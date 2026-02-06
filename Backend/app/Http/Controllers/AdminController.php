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
        $admin = $request->user(); // uses sanctum token
        return response()->json($admin);
    }

    public function updateProfile(Request $request)
    {
        $admin = $request->user();

        $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|email|unique:admins,email,' . $admin->id,
            'password' => 'nullable|string|min:6',
            'image' => 'nullable|image|max:2048',
        ]);

        $admin->username = $request->username;
        $admin->email = $request->email;

        if ($request->filled('password')) {
            $admin->password = Hash::make($request->password);
        }

        if ($request->hasFile('image')) {
            // delete old image if exists
            if ($admin->profile_image) {
                Storage::delete($admin->profile_image);
            }

            $path = $request->file('image')->store('admin_images', 'public');
            $admin->profile_image = $path;
        }

        $admin->save();

        return response()->json(['admin' => $admin, 'message' => 'Profile updated']);
    }
}