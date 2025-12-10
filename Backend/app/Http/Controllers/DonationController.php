<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Donation;
use Illuminate\Support\Facades\DB;

class DonationController extends Controller
{
    // Your existing store method
    public function store(Request $request, $id)
    {
        $request->validate([
            'post_id' => 'nullable|integer',
            'donor_firstName' => 'required|string|max:255',
            'donor_lastName' => 'required|string|max:255',
            'donor_phoneNumber' => 'required|string|max:10',
            'donor_email' => 'required|email|max:100',
            'donation_type' => 'required|string',
            'donation_amount' => 'nullable|numeric',
            'donation_received' => 'required|boolean',
            'donation_date' => 'required|date',
        ]);

        $donation = Donation::findOrFail($id);
        $donation->update([
            'donation_received' => $request->donation_received
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Status updated successfully',
            'data' => $donation
        ]);
    }

    // Statistics method
    public function statistics()
    {
        $stats = [
            'total_donations' => Donation::count(),
            'total_money_amount' => Donation::whereNotNull('donation_amount')->sum('donation_amount'),

            'waiting_donations' => Donation::where('donation_received', false)->count(),
            'received_donations' => Donation::where('donation_received', true)->count(),

            'waiting_money_amount' => Donation::whereNotNull('donation_amount')
                ->where('donation_received', false)
                ->sum('donation_amount'),
            'received_money_amount' => Donation::whereNotNull('donation_amount')
                ->where('donation_received', true)
                ->sum('donation_amount'),

            'donations_by_type' => Donation::select(
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

    // NEW: Get all donations
    public function getAllDonations()
    {
        $donations = Donation::orderBy('created_at', 'desc')->get();

        return response()->json([
            'success' => true,
            'data' => $donations
        ]);
    }
}
