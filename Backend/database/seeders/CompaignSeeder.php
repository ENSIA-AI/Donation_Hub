<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Compaign;
use App\Models\Organization;
use App\Models\Category;

class CompaignSeeder extends Seeder
{

    public function run(): void
    {
        $organization = Organization::first();

        if (!$organization) {
            // If no organizations exist, create one
            $organization = Organization::create([
                'org_name' => 'Default Org',
                'org_description' => 'Automatically created organization',
                'org_slogan' => 'Helping people',
            ]);
        }


        // Get some categories
        $categories = Category::all();
        if ($categories->isEmpty()) {
            $this->command->info('No categories found. Run CategorySeeder first!');
            return;
        }


        $campaigns = [
            [
                'compaign_ID' => 1,
                'compaign_title' => 'Clean Water Initiative',
                'compaign_content' => 'Providing clean water to rural areas.',
                'compaign_img' => 'compaigns/postagri.jpg',
                'compaign_date' => now(),
                'status' => 'waiting',
                'organization_id' => $organization->id,
                'category_id' => $categories->where('category', 'Health')->first()->id ?? $categories->first()->id,

            ],
            [
                'compaign_ID' => 2,
                'compaign_title' => 'School Supplies Drive',
                'compaign_content' => 'Helping students get the supplies they need.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'waiting',
                'organization_id' => $organization->id,
                'category_id' => $categories->where('category', 'Education')->first()->id ?? $categories->first()->id,

            ],
            [
                'compaign_ID' => 3,
                'compaign_title' => 'Tree Planting Campaign',
                'compaign_content' => 'Planting trees in urban areas for a greener city.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'waiting',
                'organization_id' => $organization->id,
                'category_id' => $categories->where('category', 'Environment')->first()->id ?? $categories->first()->id,

            ],
        ];

        foreach ($campaigns as $compaign) {
            Compaign::create($compaign);
        }
    }
}
