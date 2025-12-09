<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
  protected $fillable = [
    'org_name',
    'org_registrationDate',
    'org_description',
    'org_type',
    'org_slogan',
    'org_status',
    'org_hero_image',
    'org_logo'
  ];
}
