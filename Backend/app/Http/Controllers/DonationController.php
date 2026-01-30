<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Donation;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class DonationController extends Controller
{
    public function index()
{
    $donations = Donation::with(['organization', 'post'])
        ->orderBy('created_at', 'desc')
        ->get();

    return response()->json([
        'success' => true,
        'data' => $donations
    ]);
}

    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'donor_firstName'     => 'required|string|max:255',
                'donor_lastName'      => 'required|string|max:255',
                'donor_phoneNumber'   => 'required|string|max:20',
                'donor_email'         => 'required|email|max:100',
                'donation_type'       => 'required|string|in:money,food,medicins',
                'donation_amount'     => 'nullable|numeric|min:0',
                'donation_date'       => 'required|date',
                'donation_received'   => 'boolean',
            ]);

            if (
                $validated['donation_type'] === 'money'
                && empty($validated['donation_amount'])
            ) {
                return response()->json([
                    'success' => false,
                    'errors' => [
                        'donation_amount' => ['Amount is required for money donations']
                    ]
                ], 422);
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
        $donation = Donation::findOrFail($id);

        $validated = $request->validate([
            'donor_firstName' => 'required|string|max:255',
            'donor_lastName' => 'required|string|max:255',
            'donor_phoneNumber' => 'required|string|max:20',
            'donor_email' => 'required|email|max:100',
            'donation_type' => 'required|string|in:money,food,medicins',
            'donation_amount' => 'nullable|numeric|min:0',
            'donation_date' => 'required|date',
            'donation_received' => 'boolean',
        ]);

        if (
            $validated['donation_type'] === 'money'
            && empty($validated['donation_amount'])
        ) {
            return response()->json([
                'success' => false,
                'message' => 'Amount is required for money donations',
            ], 422);
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

        $donation = Donation::findOrFail($id);
        $donation->update([
            'donation_received' => $request->donation_received
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Donation status updated',
            'data' => $donation
        ]);
    }


    public function destroy($id)
{
    $donation = Donation::find($id);

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
    public function statistics()
    {
        $stats = [
            'total_donations' => Donation::count(),

            'total_money_amount' =>
                Donation::whereNotNull('donation_amount')->sum('donation_amount'),

            'waiting_donations' =>
                Donation::where('donation_received', false)->count(),

            'received_donations' =>
                Donation::where('donation_received', true)->count(),

            'waiting_money_amount' =>
                Donation::whereNotNull('donation_amount')
                    ->where('donation_received', false)
                    ->sum('donation_amount'),

            'received_money_amount' =>
                Donation::whereNotNull('donation_amount')
                    ->where('donation_received', true)
                    ->sum('donation_amount'),

            'donations_by_type' =>
                Donation::select(
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
