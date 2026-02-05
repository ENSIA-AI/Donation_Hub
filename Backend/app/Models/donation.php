<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    use HasFactory;

    protected $fillable = [
        'organization_id',
        'compaign_ID',
        'donor_firstName',
        'donor_lastName',
        'donor_phoneNumber',
        'donor_email',
        'donation_type',
        'donation_amount',
        'donation_received',
        'donation_date',
        'organization_id',
        'campaign_ID',
    ];

    protected $casts = [
        'donation_amount' => 'decimal:2',
        'donation_date' => 'date',
        'donation_received' => 'boolean',
    ];


    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }

    public function post()
    {
        return $this->belongsTo(Compaign::class, 'compaign_ID');
    }
}
