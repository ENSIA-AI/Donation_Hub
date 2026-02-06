<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Donation;
use App\Models\Organization;
use App\Models\Compaign;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;


class DonationController extends Controller
{
    public function index(Request $request)
    {
        $orgId = $request->query('org_id') ?? Auth::user()->organization_id;
        if (!$orgId) {
            return response()->json([
                'success' => false,
                'message' => 'User is not associated with any organization'
            ], 403);
        }

        $donations = Donation::with(['organization', 'post'])
            ->where('organization_id', $orgId)
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($donation) {
                return [
                    'id' => $donation->id,
                    'donor_firstName' => $donation->donor_firstName,
                    'donor_lastName' => $donation->donor_lastName,
                    'donor_email' => $donation->donor_email,
                    'donor_phoneNumber' => $donation->donor_phoneNumber,
                    'donation_type' => $donation->donation_type,
                    'donation_amount' => $donation->donation_amount,
                    'donation_received' => $donation->donation_received,
                    'donation_date' => $donation->donation_date->format('Y-m-d'),
                    'organization' => $donation->organization,
                    'post' => $donation->post,
                    'organization_id' => $donation->organization_id,
                    'campaign_ID' => $donation->compaign_ID,
                ];
            });



        return response()->json([
            'success' => true,
            'data' => $donations
        ]);
    }
    public function adminIndex()
    {
        $donations = Donation::with(['organization', 'post'])
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($donation) {
                return [
                    'id' => $donation->id,
                    'donor_firstName' => $donation->donor_firstName,
                    'donor_lastName' => $donation->donor_lastName,
                    'donor_email' => $donation->donor_email,
                    'donation_type' => $donation->donation_type,
                    'donation_amount' => $donation->donation_amount,
                    'donation_received' => $donation->donation_received,
                    'donation_date' => $donation->donation_date->format('Y-m-d'),
                    'organization' => $donation->organization,
                    'post' => $donation->post,
                    'organization_id' => $donation->organization_id,
                    'campaign_ID' => $donation->campaign_ID,
                ];
            });

        return response()->json([
            'success' => true,
            'data' => $donations
        ]);
    }


    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'donor_firstName'   => 'required|string|max:255',
                'donor_lastName'    => 'required|string|max:255',
                'donor_phoneNumber' => 'required|string|max:20',
                'donor_email'       => 'required|email|max:100',
                'donation_type'     => 'required|string',
                'donation_amount'   => 'nullable|numeric|min:0',
                'donation_date'     => 'required|date',
                'donation_received' => 'boolean',
                'compaign_ID'       => 'nullable|exists:compaigns,compaign_ID',
                'organization_id'   => 'required|exists:organizations,id',
            ]);

            $orgId = $validated['organization_id'];

            $validated['donation_received'] = $validated['donation_received'] ?? false;

            if ($validated['donation_type'] === 'money' && empty($validated['donation_amount'])) {
                return response()->json([
                    'success' => false,
                    'errors' => ['donation_amount' => ['Amount is required for money donations']]
                ], 422);
            }

            if (!empty($validated['compaign_ID'])) {
                $exists = Compaign::where('compaign_ID', $validated['compaign_ID'])
                    ->where('organization_id', $orgId)
                    ->exists();

                if (!$exists) {
                    return response()->json([
                        'success' => false,
                        'message' => 'This campaign does not belong to your organization'
                    ], 403);
                }
            }

            $donation = Donation::create($validated);

            return response()->json([
                'success' => true,
                'message' => 'Donation created successfully',
                'data' => $donation
            ], 201);
        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'errors' => $e->errors()
            ], 422);
        }
    }



    public function update(Request $request, $id)
    {
        $orgId = Auth::user()->organization_id;


        $donation = Donation::where('id', $id)
            ->where('organization_id', $orgId)
            ->firstOrFail();


        $validated = $request->validate([
            'donor_firstName' => 'required|string|max:255',
            'donor_lastName' => 'required|string|max:255',
            'donor_phoneNumber' => 'required|string|max:20',
            'donor_email' => 'required|email|max:100',
            'donation_type' => 'required|string|in:money,food,medicine',
            'donation_amount' => 'nullable|numeric|min:0',
            'donation_date' => 'required|date',
            'donation_received' => 'boolean',
            'compaign_ID'       => 'nullable|exists:campaigns,id',
        ]);

        $validated['organization_id'] = $orgId;
        $validated['donation_received'] = $validated['donation_received'] ?? $donation->donation_received;

        if (
            $validated['donation_type'] === 'money'
            && empty($validated['donation_amount'])
        ) {
            return response()->json([
                'success' => false,
                'message' => 'Amount is required for money donations',
            ], 422);
        }

        if (!empty($validated['compaign_ID'])) {
            $exists = Compaign::where('compaign_ID', $validated['compaign_ID'])
                ->where('organization_id', $orgId)
                ->exists();

            if (!$exists) {
                return response()->json([
                    'success' => false,
                    'message' => 'This campaign does not belong to your organization'
                ], 403);
            }
        }

        $donation->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Donation updated successfully',
            'data' => $donation
        ]);
    }

    /*Update donation status only*/
    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'donation_received' => 'required|boolean',
        ]);

        $orgId = $request->query('org_id') ?? Auth::user()?->organization_id;

        if (!$orgId) {
            return response()->json([
                'success' => false,
                'message' => 'Organization ID required'
            ], 403);
        }

        $donation = Donation::where('id', $id)
            ->where('organization_id', $orgId)
            ->firstOrFail();

        $donation->update([
            'donation_received' => $request->donation_received
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Donation status updated',
            'data' => $donation
        ]);
    }


    public function destroy(Request $request, $id)
    {
        $orgId = $request->query('org_id') ?? Auth::user()?->organization_id;

        if (!$orgId) {
            return response()->json([
                'success' => false,
                'message' => 'Organization ID required'
            ], 403);
        }

        $donation = Donation::where('id', $id)
            ->where('organization_id', $orgId)
            ->first();

        if (!$donation) {
            return response()->json([
                'success' => false,
                'message' => 'Donation not found'
            ], 404);
        }

        $donation->delete();

        return response()->json([
            'success' => true,
            'message' => 'Donation deleted successfully'
        ]);
    }



    /*GET Donation statistics*/
    public function statistics(Request $request)
    {
        $orgId = $request->query('org_id') ?? Auth::user()->organization_id;

        if (!$orgId) {
            return response()->json([
                'success' => false,
                'message' => 'Organization ID required'
            ], 403);
        }

        $stats = [
            'total_donations' => Donation::where('organization_id', $orgId)->count(),


            'total_money_amount' =>
            Donation::where('organization_id', $orgId)
                ->whereNotNull('donation_amount')
                ->sum('donation_amount'),

            'waiting_donations' =>
            Donation::where('organization_id', $orgId)
                ->where('donation_received', false)
                ->count(),

            'received_donations' =>
            Donation::where('organization_id', $orgId)
                ->where('donation_received', true)
                ->count(),

            'waiting_money_amount' =>
            Donation::where('organization_id', $orgId)
                ->whereNotNull('donation_amount')
                ->where('donation_received', false)
                ->sum('donation_amount'),

            'received_money_amount' =>
            Donation::where('organization_id', $orgId)
                ->whereNotNull('donation_amount')
                ->where('donation_received', true)
                ->sum('donation_amount'),

            'donations_by_type' =>
            Donation::where('organization_id', $orgId)
                ->whereNotNull('donation_amount')
                ->sum('donation_amount'),

            'waiting_donations' =>
            Donation::where('organization_id', $orgId)
                ->where('donation_received', false)
                ->count(),

            'received_donations' =>
            Donation::where('organization_id', $orgId)
                ->where('donation_received', true)
                ->count(),

            'waiting_money_amount' =>
            Donation::where('organization_id', $orgId)  // ⚠️ ADD THIS - was missing!
                ->whereNotNull('donation_amount')
                ->where('donation_received', false)
                ->sum('donation_amount'),

            'received_money_amount' =>
            Donation::where('organization_id', $orgId)  // ⚠️ ADD THIS - was missing!
                ->whereNotNull('donation_amount')
                ->where('donation_received', true)
                ->sum('donation_amount'),

            'donations_by_type' =>
            Donation::where('organization_id', $orgId)
                ->select(
                    'donation_type',
                    DB::raw('count(*) as count'),
                    DB::raw('sum(donation_amount) as total_amount')
                )
                ->groupBy('donation_type')
                ->get(),
        ];

        return response()->json([
            'success' => true,
            'data' => $stats
        ]);
    }



    public function topWilayasByDonation()
    {
        $data = Donation::select('wilayas.wilaya_name', DB::raw('SUM(donation_amount) as total'))
            ->join('organizations', 'donations.organization_id', '=', 'organizations.id')
            ->join('wilayas', 'organizations.wilaya_id', '=', 'wilayas.id')
            ->groupBy('wilayas.wilaya_name')
            ->orderByDesc('total') // sort descending by total donations
            ->limit(6)             // only top 6
            ->get();

        return response()->json($data);
    }
    public function donationsByType()
    {
        return response()->json([
            'money' => Donation::where('donation_type', 'money')->count(),
            'food' => Donation::where('donation_type', 'food')->count(),
            'medicine' => Donation::where('donation_type', 'medicine')->count(),
        ]);
    }
    public function totalMoneyDonations()
    {
        $total = Donation::whereNotNull('donation_amount')
            ->sum('donation_amount');

        return response()->json([
            'success' => true,
            'total' => $total
        ]);
    }

    public function getByCampaign($campaignId)
    {
        $orgId = Auth::user()->organization_id;

        if (!$orgId) {
            return response()->json([
                'success' => false,
                'message' => 'User is not associated with any organization'
            ], 403);
        }

        $donations = Donation::with(['organization', 'post'])
            ->where('organization_id', $orgId)
            ->where('compaign_ID', $campaignId)
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($donation) {
                return [
                    'id' => $donation->id,
                    'donor_firstName' => $donation->donor_firstName,
                    'donor_lastName' => $donation->donor_lastName,
                    'donor_email' => $donation->donor_email,
                    'donor_phoneNumber' => $donation->donor_phoneNumber,
                    'donation_type' => $donation->donation_type,
                    'donation_amount' => $donation->donation_amount,
                    'donation_received' => $donation->donation_received,
                    'donation_date' => $donation->donation_date->format('Y-m-d'),
                    'organization_id' => $donation->organization_id,
                    'campaign_ID' => $donation->compaign_ID,
                ];
            });

        return response()->json([
            'success' => true,
            'data' => $donations
        ]);
    }

    public function statisticsByCampaign($campaignId)
    {
        $orgId = Auth::user()->organization_id;

        $stats = [
            'total_donations' => Donation::where('organization_id', $orgId)
                ->where('compaign_ID', $campaignId)
                ->count(),

            'total_money_amount' => Donation::where('organization_id', $orgId)
                ->where('compaign_ID', $campaignId)
                ->whereNotNull('donation_amount')
                ->sum('donation_amount'),

            'waiting_donations' => Donation::where('organization_id', $orgId)
                ->where('compaign_ID', $campaignId)
                ->where('donation_received', false)
                ->count(),

            'received_donations' => Donation::where('organization_id', $orgId)
                ->where('compaign_ID', $campaignId)
                ->where('donation_received', true)
                ->count(),

            'donations_by_type' => Donation::where('organization_id', $orgId)
                ->where('compaign_ID', $campaignId)
                ->select(
                    'donation_type',
                    DB::raw('count(*) as count'),
                    DB::raw('sum(donation_amount) as total_amount')
                )
                ->groupBy('donation_type')
                ->get(),
        ];

        return response()->json([
            'success' => true,
            'data' => $stats
        ]);
    }
}