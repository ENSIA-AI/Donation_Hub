<?php



use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\RequestsController;
use Illuminate\Http\Request;
use App\Http\Controllers\CompaignController;
use App\Http\Controllers\organizationController;


use App\Http\Controllers\CategoryController;
use App\Http\Controllers\RegionController;


Route::post('/donations', [DonationController::class, 'store']);
Route::get('/donations', [DonationController::class, 'index']);
Route::get('/donations/statistics', [DonationController::class, 'statistics']);
Route::put('/donations/{id}', [DonationController::class, 'update']);
Route::delete('/donations/{id}', [DonationController::class, 'destroy']);
Route::patch('/donations/{id}/status', [DonationController::class, 'updateStatus']);
Route::get('/dashboard/donations', [DonationController::class, 'index']);
Route::post('/requests', [RequestsController::class, 'store']);
Route::get('/dashboard/requests', [RequestsController::class, 'getAllRequests']);
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/organization',[OrganizationController::class ,'index']);
Route::get('/organization/{id}',[OrganizationController::class,'show']);
Route::put('/organization/{id}',[OrganizationController::class , 'update']);
Route::delete('/organization/{id}',[OrganizationController::class,'destroy']);
Route::post('/organization', [OrganizationController::class, 'store']);
Route::apiResource('compaigns', CompaignController::class);






Route::apiResource('organizations', OrganizationController::class);
Route::patch('organizations/{organization}/reject', [OrganizationController::class, 'reject']);
Route::patch('/organizations/{id}/approve', [OrganizationController::class, 'approve']);
Route::apiResource('categories', CategoryController::class);


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');