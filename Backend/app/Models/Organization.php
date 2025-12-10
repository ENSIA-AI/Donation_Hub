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
        'org_slogan',
        'status',
        'org_hero_img',
        'org_logo',
        'posts',
        'mission',
        'values',
        'programs',
        'impact',
        'contact'
  ];
}
