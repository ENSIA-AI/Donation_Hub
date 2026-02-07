<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Organization;
use Illuminate\Support\Facades\Hash;
use App\Models\Admin;

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
                'success' => true,
                'message' => 'Login successful',
                'token' => $token,
                'user' => [
                    'id' => $admin->id,
                    'name' => $admin->name,
                    'email' => $admin->email,
                    'profile_image' => $admin->profile_image
                ],
                'role' => 'admin'
            ]);
        }


        $org = Organization::where('org_email', $request->email)->first();
        if (!$org || !Hash::check($request->password, $org->org_password)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid email or password'
            ], 401);
        }

        $token = $org->createToken('auth_token')->plainTextToken;

        return response()->json([
            'success' => true,
            'message' => 'Login successful',
            'token' => $token,
            'user' => $org,
            'role' => 'organization'
        ], 200);
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
        $authUser = $request->user();

        if ($authUser) {
            $authUser->tokens()->delete();
        }

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
    // public function updateAdminProfile(Request $request)
    // {
    //     $admin = $request->user(); // authenticated admin via sanctum

    //     if (!$admin) {
    //         return response()->json([
    //             'success' => false,
    //             'message' => 'Unauthorized'
    //         ], 401);
    //     }

    //     $validated = $request->validate([
    //         'name' => 'sometimes|string|max:255',
    //         'email' => 'sometimes|email|unique:admins,email,' . $admin->id,
    //         'password' => 'nullable|string|min:6|confirmed', // if you want password update
    //     ]);

    //     if (!empty($validated['password'])) {
    //         $validated['password'] = bcrypt($validated['password']);
    //     } else {
    //         unset($validated['password']);
    //     }

    //     if (!empty($validated['name'])) {
    //         $admin->name = $validated['name'];
    //     }

    //     if (!empty($validated['email'])) {
    //         $admin->email = $validated['email'];
    //     }

    //     $admin->update($validated);

    //     return response()->json([
    //         'success' => true,
    //         'message' => 'Admin profile updated successfully',
    //         'data' => $admin
    //     ]);
    // }
    // public function adminProfile(Request $request)
    // {
    //     $admin = $request->user(); // gets the authenticated admin via Sanctum

    //     if (!$admin) {
    //         return response()->json([
    //             'success' => false,
    //             'message' => 'Unauthorized'
    //         ], 401);
    //     }

    //     return response()->json([
    //         'success' => true,
    //         'data' => $admin
    //     ]);
    // }
    public function pending()
    {
        $organizations = Organization::with(['category', 'wilaya'])
            ->where('status', 'pending')
            ->get();

        return response()->json($organizations);
    }
}