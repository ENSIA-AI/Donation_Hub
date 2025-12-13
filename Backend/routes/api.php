<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\OrganizationController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\RegionController;



Route::apiResource('organizations', OrganizationController::class);
Route::patch('organizations/{organization}/reject', [OrganizationController::class, 'reject']);
Route::patch('/organizations/{id}/approve', [OrganizationController::class, 'approve']);
Route::apiResource('categories', CategoryController::class);
Route::apiResource('regions', RegionController::class);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
