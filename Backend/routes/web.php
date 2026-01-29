<?php

use App\Http\Controllers\organizationController;
use App\Models\Organization;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompaignController;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

Route::get('/', function () {
    return view('welcome');
});


Route::post('/admin/logout', function (Request $request) {
    Auth::logout();                       // log out the admin
    $request->session()->invalidate();    // clear the session
    $request->session()->regenerateToken(); // prevent CSRF reuse
    return response()->json(['message' => 'Logged out']);
});
