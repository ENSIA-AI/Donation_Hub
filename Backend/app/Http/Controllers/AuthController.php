<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Organization;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
{
    $request->validate([
        'email' => 'required|email',
        'password' => 'required'
    ]);

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
        'organization' => $org
        
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
        $request->session()->forget('organization_id');
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logged out']);
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

}
