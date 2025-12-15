<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\RequestsController;

Route::post('/donations', [DonationController::class, 'store']);
Route::get('/donations', [DonationController::class, 'index']);
Route::get('/donations/statistics', [DonationController::class, 'statistics']);
Route::put('/donations/{id}', [DonationController::class, 'update']);
Route::delete('/donations/{id}', [DonationController::class, 'destroy']);
Route::patch('/donations/{id}/status', [DonationController::class, 'updateStatus']);
Route::get('/dashboard/donations', [DonationController::class, 'index']);
Route::post('/requests', [RequestsController::class, 'store']);
Route::get('/dashboard/requests', [RequestsController::class, 'getAllRequests']);



