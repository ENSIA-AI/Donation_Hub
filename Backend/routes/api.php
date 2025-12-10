<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DonationController;

Route::post('/donations', [DonationController::class, 'store']);
Route::get('/dashboard/statistics', [DonationController::class, 'statistics']);
Route::get('/dashboard/donations', [DonationController::class, 'getAllDonations']);
Route::patch('/dashboard/donations/{id}/status', [DonationController::class, 'updateStatus']);
