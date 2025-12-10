<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    protected $fillable = [
        'org_name',
        'org_registrationDate',
        'org_description',
        'org_email',
        'org_slogan',
        'category_id',
        'wilaya_id',
        'status',
        'org_hero_img',
        'org_logo'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function wilaya()
    {
        return $this->belongsTo(Region::class);
    }
}
