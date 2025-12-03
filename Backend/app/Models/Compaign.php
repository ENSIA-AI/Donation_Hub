<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Compaign extends Model
{
    use HasFactory;
  protected $table = 'compaigns';

  protected $primaryKey = 'compaign_ID';
  protected $fillable = [
    'compaign_img',
    'compaign_title',
    'compaign_content',
    'compaign_date',
    'compaign_approval',
    ];
    protected $casts = [
    'compaign_approval' => 'boolean',
    'compaign_date' => 'date',
    ];
}