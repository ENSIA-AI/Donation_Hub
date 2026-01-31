<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\RequestsController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CompaignController;
use App\Http\Controllers\organizationController;
use App\Http\Controllers\WilayaController;
use App\Http\Controllers\AdminController;


Route::post('/donations', [DonationController::class, 'store']);
Route::get('/donations', [DonationController::class, 'index']);
Route::get('/dashboard/statistics', [DonationController::class, 'statistics']);
Route::put('/donations/{id}', [DonationController::class, 'update']);
Route::delete('/donations/{id}', [DonationController::class, 'destroy']);
Route::patch('/donations/{id}/status', [DonationController::class, 'updateStatus']);
Route::get('/dashboard/donations', [DonationController::class, 'index']);
Route::post('/requests', [RequestsController::class, 'store']);
Route::get('/dashboard/requests', [RequestsController::class, 'getAllRequests']);

Route::apiResource('compaigns', CompaignController::class);


Route::patch('organizations/{organization}/reject', [OrganizationController::class, 'reject']);
Route::patch('/organizations/{id}/approve', [OrganizationController::class, 'approve']);
Route::get('/organization', [OrganizationController::class, 'index']);
Route::get('/organization/{id}', [OrganizationController::class, 'show']);
Route::put('/organization/{id}', [OrganizationController::class, 'update']);
Route::delete('/organization/{id}', [OrganizationController::class, 'destroy']);
Route::post('/organization', [OrganizationController::class, 'store']);


Route::get('/wilayas', [WilayaController::class, 'index']);
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/wilayas/search', [WilayaController::class, 'search']);
Route::get('/api/organizations/autocomplete', [OrganizationController::class, 'autocomplete']);
Route::get('/organizations/search', [OrganizationController::class, 'search']); // this is for searching org based on naem , wilaya and category

Route::get('/admin/profile', [AdminController::class, 'profile'])->middleware('auth:sanctum');





Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
