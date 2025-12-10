<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    protected $primaryKey = 'orgID';   // since your PK is orgID
    public $incrementing = true;

    protected $fillable = [
        'org_Name',
        'org_registrationDate',
        'org_description',
        'org_hero_img',
        'org_logo',
        'org_type',
        'org_slogan',
        'status',
    ];
}
