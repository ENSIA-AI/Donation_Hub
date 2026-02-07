<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\RequestsController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CompaignController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\WilayaController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\AuthController;
use App\Models\Compaign;
use App\Models\Organization;
use Illuminate\Support\Facades\DB;

// =============== AUTH ROUTES =================
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
    Route::get('/admin/me', [AuthController::class, 'adminProfile']);

    Route::post('/admin/profile/update', [AuthController::class, 'updateAdminProfile']);



    Route::get('/admin/profile', [AdminController::class, 'profile']);
});

// =============== ORGANIZATION ROUTES =================
// Put specific routes BEFORE parameterized routes
Route::get('/organizations/pending', [OrganizationController::class, 'pending']);
Route::get('/organizations/autocomplete', [OrganizationController::class, 'autocomplete']);
Route::get('/organizations/search', [OrganizationController::class, 'search']);
Route::post('/organizations/register', [OrganizationController::class, 'regester']);
Route::patch('/organizations/{id}/approve', [OrganizationController::class, 'approve']);
Route::patch('/organizations/{id}/reject', [OrganizationController::class, 'reject']);
Route::get('/organizations/{id}', [OrganizationController::class, 'show']);
Route::put('/organizations/{id}', [OrganizationController::class, 'update']);
Route::delete('/organizations/{id}', [OrganizationController::class, 'destroy']);
Route::get('/organization', [OrganizationController::class, 'index']); 

// =============== CAMPAIGN ROUTES =================
Route::get('/compaigns/pending', [CompaignController::class, 'pending']);
Route::get('/compaigns/accepted', [CompaignController::class, 'accepted']);
Route::get('/compaigns/autocomplete', [CompaignController::class, 'autocomplete']);
Route::get('/compaigns/search', [CompaignController::class, 'search']);
Route::patch('/compaigns/{id}/approve', [CompaignController::class, 'approve']);
Route::patch('/compaigns/{id}/reject', [CompaignController::class, 'reject']);
Route::get('/organizations/{organization}/compaigns', [CompaignController::class, 'byOrganization']);
Route::apiResource('compaigns', CompaignController::class);

// =============== DONATION ROUTES =================
Route::post('/donations', [DonationController::class, 'store']);
Route::get('/donations', [DonationController::class, 'index']);
Route::put('/donations/{id}', [DonationController::class, 'update']);
Route::delete('/donations/{id}', [DonationController::class, 'destroy']);
Route::patch('/donations/{id}/status', [DonationController::class, 'updateStatus']);
Route::get('/donations/by-type', [DonationController::class, 'donationsByType']);
Route::get('/donations-top-wilayas', [DonationController::class, 'topWilayasByDonation']);
Route::get('/total-money-donations', [DonationController::class, 'totalMoneyDonations']);

Route::get('/admin/donations', [DonationController::class, 'adminIndex']);
Route::get('/admin/statistics', [DonationController::class, 'statistics']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/dashboard/donations', [DonationController::class, 'index']);
    Route::get('/dashboard/statistics', [DonationController::class, 'statistics']);
    Route::get('/dashboard/donations/campaign/{campaignId}', [DonationController::class, 'getByCampaign']);
    Route::get('/dashboard/statistics/campaign/{campaignId}', [DonationController::class, 'statisticsByCampaign']);
});

// =============== REQUEST ROUTES =================
Route::post('/requests', [RequestsController::class, 'store']);
Route::get('/dashboard/requests/{orgId}', [RequestsController::class, 'getOrgRequests']);
Route::get('/dashboard/requests', [RequestsController::class, 'getAllRequests']);

// =============== CATEGORY & WILAYA ROUTES =================
Route::get('/categories', [CategoryController::class, 'index']);
Route::post('/categories', [CategoryController::class, 'store']);
Route::get('/wilayas', [WilayaController::class, 'index']);
Route::post('/wilayas', [WilayaController::class, 'store']);
Route::get('/wilayas/search', [WilayaController::class, 'search']);

// =============== DASHBOARD ROUTES =================
Route::get('/campaigns-by-category', [DashboardController::class, 'campaignsByCategory']);
Route::get('/dashboard/organizations-by-category-count', [DashboardController::class, 'organizationsByCategoryCount']);

// =============== MESSAGE ROUTES =================
Route::post('/messages', [MessageController::class, 'store']);
Route::get('/messages', [MessageController::class, 'index']);
Route::get('/messages/count', [MessageController::class, 'count']);
Route::patch('/messages/{id}/read', [MessageController::class, 'markRead']);
Route::delete('/messages/{id}', [MessageController::class, 'destroy']);

// =============== STATISTICS ROUTES =================
Route::get('/organization-count', function () {
    return response()->json(['TotalOrgs' => Organization::count()]);
});

Route::get('/dashboard/campaigns-by-category', function () {
    return Compaign::select('category', DB::raw('COUNT(*) as campaigns'))
        ->groupBy('category')
        ->get();
});

Route::get('/top-organizations', function () {
    $topOrgs = Organization::select(
        'organizations.id',
        'org_name',
        DB::raw('COUNT(compaigns.compaign_ID) as campaigns_count')
    )
        ->join('compaigns', 'compaigns.organization_id', '=', 'organizations.id')
        ->groupBy('organizations.id', 'org_name')
        ->orderByDesc('campaigns_count')
        ->limit(6)
        ->get();

    return response()->json($topOrgs);
});

Route::get('/donations-over-time', function () {
    return DB::table('donations')
        ->select(
            DB::raw('DATE(donation_date) as date'),
            DB::raw('COUNT(*) as count')
        )
        ->where('donation_received', true)
        ->groupBy(DB::raw('DATE(donation_date)'))
        ->orderBy('date')
        ->get();
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});




Route::middleware('auth:sanctum')->group(function () {
    Route::get('/admin/me', [AdminController::class, 'profile']); // fetch admin
    Route::patch('/admin/profile/update', [AdminController::class, 'updateProfile']); // update admin
});

