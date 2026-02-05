<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;

class MessageController extends Controller
{
    // Get all messages (optional, for dashboard)
    public function index()
    {
        return response()->json(Message::orderBy('created_at', 'desc')->get());
    }

    // Store a new message
    public function store(Request $request)
    {
        $request->validate([
            'fname' => 'required|string|max:255',
            'lname' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        // Create message
        $msg = Message::create([
            'fname' => $request->fname,
            'lname' => $request->lname,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message,
            'status' => 'unread', // default status
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Message sent successfully!',
            'data' => $msg
        ], 201);
    }

    // Mark message as read
    public function markRead($id)
    {
        try {
            $msg = Message::findOrFail($id);
            $msg->status = 'read';
            $msg->save();

            return response()->json([
                'success' => true,
                'message' => 'Message marked as read',
                'data' => $msg
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error updating message'
            ], 500);
        }
    }

    // Delete a message
    public function destroy($id)
    {
        try {
            $msg = Message::findOrFail($id);
            $msg->delete();

            return response()->json([
                'success' => true,
                'message' => 'Message deleted successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error deleting message'
            ], 500);
        }
    }
    // Get total number of messages
    public function count()
    {
        return response()->json([
            'total' => Message::count()
        ]);
    }
}