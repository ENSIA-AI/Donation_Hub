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
use App\Models\Compaign;
use Illuminate\Support\Facades\DB;
use App\Models\Organization;
use App\Models\Donation;
use App\Http\Controllers\DashboardController;

Route::post('/donations', [DonationController::class, 'store']);
Route::get('/donations', [DonationController::class, 'index']);
Route::get('/donations/statistics', [DonationController::class, 'statistics']);
Route::put('/donations/{id}', [DonationController::class, 'update']);
Route::delete('/donations/{id}', [DonationController::class, 'destroy']);
Route::patch('/donations/{id}/status', [DonationController::class, 'updateStatus']);
Route::get('/dashboard/donations', [DonationController::class, 'index']);
Route::post('/requests', [RequestsController::class, 'store']);
Route::get('/dashboard/requests', [RequestsController::class, 'getAllRequests']);


// ===============compaigns============= : 
Route::get('/compaigns/pending', [CompaignController::class, 'pending']);
Route::patch('/compaigns/{id}/approve', [CompaignController::class, 'approve']);

Route::patch('/compaigns/{id}/reject', [CompaignController::class, 'reject']);
//Route::get('organizations/{id}/compaigns', [CompaignController::class, 'byOrganization']);

Route::get('organizations/{organization}/compaigns', [CompaignController::class, 'byOrganization']);
Route::get('/compaigns/autocomplete', [CompaignController::class, 'autocomplete']);
Route::get('/compaigns/search', [CompaignController::class, 'search']);

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


Route::get('/organization-count', function () {
    return response()->json([
        'TotalOrgs' => Organization::count()
    ]);
});




Route::get('/dashboard/campaigns-by-category', function () {
    return Compaign::select('category', DB::raw('COUNT(*) as campaigns'))
        ->groupBy('category')
        ->get();
});


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



// ============================ Dashboard controller ===========================================
Route::get(
    '/campaigns-by-category',
    [DashboardController::class, 'campaignsByCategory']
);
Route::get('/dashboard/organizations-by-category-count', [DashboardController::class, 'organizationsByCategoryCount']);
Route::get('/total-money-donations', [DonationController::class, 'totalMoneyDonations']);
Route::get('/donations-top-wilayas', [DonationController::class, 'topWilayasByDonation']);
Route::get('/donations/by-type', [DonationController::class, 'donationsByType']);
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