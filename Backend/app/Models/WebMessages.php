<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;



class WebMessages extends Model
{
    protected $table = 'web_messages';
    protected $primaryKey = 'web_message_id';
    protected $fillable = [
        'admin_id',
        'sender_name',
        'web_subject',
        'web_message'
    ];

    
}
