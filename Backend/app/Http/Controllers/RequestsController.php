<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Requests;
use Illuminate\Support\Facades\DB;

class RequestsController extends Controller
{

    public function store(Request $request)
    {
        $validated = $request->validate([
            'rec_firstName' => 'required|string|max:255',
            'rec_lastName' => 'required|string|max:255',
            'rec_phoneNumber' => 'required|string|max:10',
            'rec_email' => 'required|email|max:100',
            'rec_message' => 'required|string|max:1000',
            'rec_type' => 'required|string',
            'rec_file_path' => 'nullable|string',
            'rec_date' => 'required|date',
            'organization_id' => 'required|exists:organizations,id'
        ]);

        // Handle file upload
        if ($request->hasFile('rec_file')) {
            $file = $request->file('rec_file');
            $filePath = $file->store('requests_files', 'public');
            $validated['rec_file_path'] = $filePath;
        }

        $requestRecord = Requests::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Request created successfully',
            'data' => $requestRecord
        ], 201);
    }

    public function getRequestsByOrg($orgId)
    {
        $requests = Requests::where('organization_id', $orgId)
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json([
            'success' => true,
            'data' => $requests
        ]);
    }

    public function getAllRequests()
    {
        $requests = Requests::orderBy('created_at', 'desc')->get();

        return response()->json([
            'success' => true,
            'data' => $requests
        ]);
    }

    public function getOrgRequests($orgId)
{
    $requests = Requests::where('organization_id', $orgId)
        ->orderBy('created_at', 'desc')
        ->get();

    return response()->json([
        'success' => true,
        'data' => $requests
    ]);
}
}
