<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    use HasFactory;

    protected $fillable = [
        'donor_firstName',
        'donor_lastName',
        'donor_phoneNumber',
        'donor_email',
        'donation_type',
        'donation_amount',
        'donation_received',
        'donation_date'
    ];

    protected $casts = [
        'donation_amount' => 'decimal:2',
        'donation_date' => 'date',
        'donation_received' => 'boolean',
    ];


}



