<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrganizationController;

Route::post('/organizations', [OrganizationController::class, 'store']); 
Route::get('/organizations/pending', [OrganizationController::class, 'pending']); 
Route::patch('/organizations/{id}/approve', [OrganizationController::class, 'approve']); 
Route::patch('/organizations/{id}/reject', [OrganizationController::class, 'reject']); 
Route::get('/test', function () {
    return response()->json(['message' => 'Backend is working!']);
});