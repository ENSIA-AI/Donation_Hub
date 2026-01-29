<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Wilaya extends Model
{
    protected $fillable = ['wilaya_name'];
    public function organizations()
    {
       return $this->hasMany(Organization::class);
    }
    public function setWilayaNameAttribute($value){
        $this->attributes['wilaya_name']=strtolower($value);
    }
    public function getWilayaNameAttribute($value)
    {
        return ucfirst($value);
    }
    public function scopeSearch($query , $term){
        if($term){
             return $query->whereRaw('LOWER(wilaya_name) LIKE ?', ['%' . strtolower($term) . '%']);
        }  
        return $query ; 
    }
}