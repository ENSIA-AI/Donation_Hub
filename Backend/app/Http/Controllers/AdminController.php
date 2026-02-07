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
            'username' => 'string|max:255',
            'email' => 'email|unique:admins,email,' . $admin->id,
            'password' => 'nullable|string|min:6|confirmed', // Add confirmed
            'image' => 'nullable|image|max:2048',
        ]);

        $admin->username = $request->username;
        $admin->email = $request->email;

        if ($request->filled('password')) {
            $admin->password = Hash::make($request->password);
        }

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = time() . '_' . $file->getClientOriginalName();
            $file->storeAs('public/admins', $filename);
            $admin->profile_image = '/storage/admins/' . $filename;
        }

        $admin->save();

        return response()->json(['data' => $admin, 'message' => 'Profile updated']); // Change this line
    }
}