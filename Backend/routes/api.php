<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\WilayaController;
use App\Http\Controllers\CategoryController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::get('/organization',[OrganizationController::class ,'index']);
Route::get('/organization/{id}',[OrganizationController::class,'show']);
Route::put('/organization/{id}',[OrganizationController::class , 'update']);
Route::delete('/organization/{id}',[OrganizationController::class,'destroy']);
Route::post('/organization', [OrganizationController::class, 'store']);
Route::get('/wilayas', [WilayaController::class, 'index']); 
Route::get('/categories', [CategoryController::class, 'index']); 
Route::get('/wilayas/search', [WilayaController::class, 'search']);