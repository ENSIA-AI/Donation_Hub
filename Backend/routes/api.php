<?php

use App\Http\Controllers\CompaignController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// ======================== compaign routes ===========================
// Route::get('/compaigns', [CompaignController::class , 'index'])->name('compaigns.index');
// Route::get('/compaigns/{id}', [CompaignController::class , 'show'])->name('compaigns.show');
// Route::post('/compaigns', [CompaignController::class , 'store'])->name('compaigns.store');
// Route::put('/compaigns/{id}', [CompaignController::class , 'update'])->name('compaigns.update');
// Route::delete('/compaigns/{id}', [CompaignController::class , 'destroy'])->name('compaigns.destroy');

Route::apiResource('compaigns', CompaignController::class);