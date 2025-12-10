<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Organization;
use App\Models\Category;
use App\Models\Wilaya;

class OrganizationSeeder extends Seeder
{
    public function run(): void
    {
        // First, create some categories
        $category1 = Category::create(['category' => 'Education']);
        $category2 = Category::create(['category' => 'Health']);

        // Create some wilayas
        $wilaya1 = Wilaya::create(['wilaya_name' => 'Algiers']);
        $wilaya2 = Wilaya::create(['wilaya_name' => 'Oran']);

        // Create some organizations
        Organization::create([
            'org_name' => 'Learning Hub',
            'org_registrationDate' => '2024-01-15',
            'org_description' => 'A place for lifelong learning.',
            'category_id' => $category1->id,
            'wilaya_id' => $wilaya1->id,
            'org_email' => 'contact@learninghub.com',
            'org_slogan' => 'Knowledge is power',
            'status' => 'approved',
            'org_hero_img' => 'hero1.jpg',
            'org_logo' => 'logo1.png',
        ]);

        Organization::create([
            'org_name' => 'Health First',
            'org_registrationDate' => '2023-05-20',
            'org_description' => 'Providing healthcare for everyone.',
            'category_id' => $category2->id,
            'wilaya_id' => $wilaya2->id,
            'org_email' => 'info@healthfirst.com',
            'org_slogan' => 'Your health, our priority',
            'status' => 'pending',
            'org_hero_img' => 'hero2.jpg',
            'org_logo' => 'logo2.png',
        ]);
    }
}

