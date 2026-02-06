<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| Controllers
|--------------------------------------------------------------------------
*/
use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\CompaignController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\RequestsController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\WilayaController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MessageController;

use App\Models\Organization;
use App\Models\Compaign;

/*
|--------------------------------------------------------------------------
| PUBLIC ROUTES (NO AUTH)
|--------------------------------------------------------------------------
| Browsing, searching, viewing public content
*/

// ---------- AUTH ----------
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

// ---------- ORGANIZATIONS (PUBLIC) ----------
Route::get('/organizations/search', [OrganizationController::class, 'search']);
Route::get('/organizations/autocomplete', [OrganizationController::class, 'autocomplete']);
Route::get('/organizations/{id}', [OrganizationController::class, 'show']);

Route::get('/organization', [OrganizationController::class, 'index']); // list all
Route::get('/organization/{id}', [OrganizationController::class, 'show']);

// ---------- CAMPAIGNS (PUBLIC) ----------
Route::get('/organizations/{organization}/compaigns', [CompaignController::class, 'byOrganization']);
Route::get('/compaigns/accepted', [CompaignController::class, 'accepted']);
Route::get('/compaigns/search', [CompaignController::class, 'search']);
Route::get('/compaigns/autocomplete', [CompaignController::class, 'autocomplete']);

// ---------- DONATIONS & REQUESTS (PUBLIC SUBMISSION) ----------
Route::post('/donations', [DonationController::class, 'store']);
Route::post('/requests', [RequestsController::class, 'store']);

// ---------- META ----------
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/wilayas', [WilayaController::class, 'index']);

// ---------- STATS (PUBLIC) ----------
Route::get('/organization-count', function () {
    return response()->json([
        'TotalOrgs' => Organization::count()
    ]);
});

Route::get('/top-organizations', function () {
    return Organization::select(
        'organizations.id',
        'org_name',
        DB::raw('COUNT(compaigns.compaign_ID) as campaigns_count')
    )
        ->join('compaigns', 'compaigns.organization_id', '=', 'organizations.id')
        ->groupBy('organizations.id', 'org_name')
        ->orderByDesc('campaigns_count')
        ->limit(6)
        ->get();
});

/*
|--------------------------------------------------------------------------
| AUTHENTICATED ROUTES (SANCTUM)
|--------------------------------------------------------------------------
*/
Route::middleware('auth:sanctum')->group(function () {

    // ---------- AUTH ----------
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);

    // ---------- ORGANIZATION DASHBOARD ----------
    // IMPORTANT: org is taken from token, NOT from URL
    Route::get('/dashboard/statistics', [DonationController::class, 'statistics']);
    Route::get('/dashboard/donations', [DonationController::class, 'index']);
    Route::get('/dashboard/requests', [RequestsController::class, 'getOrgRequests']);

    Route::patch('/donations/{id}/status', [DonationController::class, 'updateStatus']);
    Route::delete('/donations/{id}', [DonationController::class, 'destroy']);

    // ---------- CAMPAIGNS (ORG) ----------
    Route::apiResource('compaigns', CompaignController::class);

    // ---------- MESSAGES ----------
    Route::get('/messages', [MessageController::class, 'index']);
    Route::get('/messages/count', [MessageController::class, 'count']);
    Route::patch('/messages/{id}/read', [MessageController::class, 'markRead']);
    Route::delete('/messages/{id}', [MessageController::class, 'destroy']);

    // ---------- ADMIN ----------
    Route::get('/admin/profile', [AdminController::class, 'profile']);
    Route::patch('/organizations/{id}/approve', [OrganizationController::class, 'approve']);
    Route::patch('/organizations/{id}/reject', [OrganizationController::class, 'reject']);
    Route::get('/organizations/pending', [OrganizationController::class, 'pending']);
});

/*
|--------------------------------------------------------------------------
| FALLBACK (OPTIONAL BUT RECOMMENDED)
|--------------------------------------------------------------------------
*/
Route::fallback(function () {
    return response()->json([
        'message' => 'API route not found'
    ], 404);
});