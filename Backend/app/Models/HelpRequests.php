<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HelpRequests extends Model
{
  use HasFactory;
  protected $table = 'help_requests';

  protected $primaryKey = 'help_rec_ID';
  protected $fillable = [
       'requester_first_name',
       'requester_last_name',
       'type_of_rec',
       'rec_phone_number',
       'rec_proof',
       'rec_message',
    ];
   protected $casts = [
    'rec_phone_number' => 'string',
];
}