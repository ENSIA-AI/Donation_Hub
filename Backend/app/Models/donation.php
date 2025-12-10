<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    use HasFactory;

    protected $fillable = [
        'post_id',
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

    // Relationship with Post
    /*public function post()
    {
        return $this->belongsTo(Post::class);
    }

    // Full name accessor
    public function getDonorFullNameAttribute()
    {
        return "{$this->donor_firstName} {$this->donor_lastName}";
    }*/
}
