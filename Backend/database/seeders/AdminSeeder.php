<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    public function run()
    {
        Admin::create([
            'username' => 'DonifyAdmin',
            'email' => 'Donifyadmin@gmail.com',
            'password' => bcrypt('Donify123'),
            'profile_image' => null,
        ]);
    }
}