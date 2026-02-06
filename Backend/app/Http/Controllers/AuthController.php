<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Organization;
use Illuminate\Support\Facades\Hash;
use App\Models\Admin;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $admin = Admin::where('email', $request->email)->first();

        if ($admin && Hash::check($request->password, $admin->password)) {
            $token = $admin->createToken('auth_token')->plainTextToken;

            return response()->json([
                'token' => $token,
                'user' => $admin,
                'role' => 'admin'
            ]);
        }

        $org = Organization::where('org_email', $request->email)->first();

        if (!$org || !Hash::check($request->password, $org->org_password)) {
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }

        $token = $org->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Login successful',
            'token' => $token,
            'organization' => $org,
            'role' => 'organization'
        ]);
    }

    public function me(Request $request)
    {
        $orgId = $request->session()->get('organization_id');

        if (!$orgId) {
            return response()->json(null, 401);
        }

        $org = Organization::find($orgId);
        return response()->json($org);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out successfully'
        ]);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:organizations,org_email',
            'password' => 'required|min:6'
        ]);

        $org = Organization::create([
            'org_name' => $request->name,
            'org_email' => $request->email,
            'org_password' => bcrypt($request->password)
        ]);

        return response()->json([
            'message' => 'Registered successfully'
        ]);
    }

    public function adminProfile(Request $request)
    {
        $admin = $request->user();

        $profileImage = $admin->profile_image
            ? asset('storage/' . $admin->profile_image)
            : asset('https://via.placeholder.com/150');

        return response()->json([
            'id' => $admin->id,
            'username' => $admin->username,
            'email' => $admin->email,
            'profile_image' => $profileImage,
        ]);
    }

    public function updateAdminProfile(Request $request)
    {
        $admin = $request->user();

        $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|email|unique:admins,email,' . $admin->id,
            'password' => 'nullable|min:6',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $admin->username = $request->username;
        $admin->email = $request->email;

        if ($request->password) {
            $admin->password = Hash::make($request->password);
        }

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('admin_profiles', 'public');
            $admin->profile_image = $path;
        }

        $admin->save();

        $admin->profile_image = $admin->profile_image
            ? asset('storage/' . $admin->profile_image)
            : 'https://via.placeholder.com/150';

        return response()->json([
            'message' => 'Profile updated successfully',
            'admin' => $admin
        ]);
    }
}
