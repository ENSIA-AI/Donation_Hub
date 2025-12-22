<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\WilayaController;
use App\Http\Controllers\OrganizationController;


Route::post('/categories', [CategoryController::class, 'store']);
Route::get('/categories', [CategoryController::class, 'index']);

Route::post('/wilayas', [WilayaController::class, 'store']);
Route::get('/wilayas', [WilayaController::class, 'index']);


Route::post('/organizations', [OrganizationController::class, 'store']);
Route::get('/organizations', [OrganizationController::class, 'index']);
Route::patch('/organizations/{id}/approve', [OrganizationController::class, 'approve']);
Route::patch('/organizations/{id}/reject', [OrganizationController::class, 'reject']);
Route::delete('/organizations/{id}', [OrganizationController::class, 'destroy']);








