<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name'];

    // A category can have many organizations
    public function organizations()
    {
        return $this->hasMany(Organization::class);
    }
}