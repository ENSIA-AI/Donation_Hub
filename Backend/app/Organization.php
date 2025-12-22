<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    protected $fillable = [
        'org_name',
        'org_registrationDate',
        'org_description',
        'category_id',
        'wilaya_id',
        'org_email',
        'org_proof',
        'status',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function wilaya()
    {
        return $this->belongsTo(Wilaya::class);
    }
}

