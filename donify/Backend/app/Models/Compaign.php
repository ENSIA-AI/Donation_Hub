<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Compaign extends Model
{
    use HasFactory;

    protected $table = 'compaigns';
    
  

    protected $fillable = [
        'compaign_img',
        'compaign_title',
        'compaign_content',
        'compaign_date',
        'status',
    ];
    public function donations()
{
    return $this->hasMany(Donation::class);
}
}