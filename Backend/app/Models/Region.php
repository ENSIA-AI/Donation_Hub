<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    protected $fillable = ['name'];

    // A region can have many organizations
    public function organizations()
    {
        return $this->hasMany(Organization::class);
    }
}
