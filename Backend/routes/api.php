<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrganizationController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::get('/organization',[OrganizationController::class ,'index']);
Route::get('/organization/{id}',[OrganizationController::class,'show']);
Route::put('/organization/{id}',[OrganizationController::class , 'update']);
Route::delete('/organization/{id}',[OrganizationController::class,'destroy']);
