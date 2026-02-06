<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Requests extends Model
{
    use HasFactory;

    protected $fillable = [
        'organization_id',
        'rec_firstName',
        'rec_lastName',
        'rec_phoneNumber',
        'rec_email',
        'rec_message',
        'rec_type',
        'rec_date',
        'rec_file_path'
    ];

     public function organization()
    {
        return $this->belongsTo(Organization::class);
    }

    protected $casts = [
        'donation_amount' => 'decimal:2',
        'donation_date' => 'date',
    ];
}
