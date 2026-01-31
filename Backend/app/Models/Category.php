<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{


        protected $fillable = ['category'];
        public function organizations()
        {
                return $this->hasMany(Organization::class);

        }


        public function compaigns()
        {
                return $this->hasMany(Compaign::class);
        }
}

          
