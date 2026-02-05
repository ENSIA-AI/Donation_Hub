<?php
namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Admin extends Authenticatable
{
   use Notifiable, HasApiTokens;

   protected $fillable = [
       "username",
       "email",
       "password",
       "profile_image"
   ];

   protected $hidden = [
       "password",
   ];
}
