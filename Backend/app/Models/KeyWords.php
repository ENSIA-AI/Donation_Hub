<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KeyWords extends Model
{
  use HasFactory;
  protected $table = 'key_words';

  protected $primaryKey = 'keyword_value';

}