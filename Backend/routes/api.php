<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\OrganizationController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\RegionController;



Route::apiResource('organizations', OrganizationController::class);
Route::apiResource('categories', CategoryController::class);
Route::apiResource('regions', RegionController::class);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
