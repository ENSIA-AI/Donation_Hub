<?php

use App\Http\Controllers\organizationController;
use App\Models\Organization;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompaignController;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\AdminAuthController;

Route::get('/', function () {
    return view('welcome');
});



Route::prefix('admin')->group(function () {
    Route::post('/logout', [AdminAuthController::class, 'logout']);
    Route::get('/check', [AdminAuthController::class, 'check']);
});


Route::post('/admin/login', function (Request $request) {
    $credentials = $request->only('email', 'password');

    if (Auth::attempt($credentials)) {
        $request->session()->regenerate();

        return response()->json(['message' => 'Admin logged in']);
    }

    return response()->json(['message' => 'Invalid credentials'], 401);
});


Route::get('/csrf-token', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});

Route::middleware(['cors'])->group(function () {
    Route::get('/csrf-token', function () {
        return response()->json(['csrf_token' => csrf_token()]);
    });

    Route::post('/admin/logout', function (Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json(['message' => 'Logged out']);
    });
});