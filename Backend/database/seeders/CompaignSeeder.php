<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Compaign;
use App\Models\Organization;

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
        $campaigns = [
            [
                'compaign_title' => 'Clean Water Initiative',
                'compaign_content' => 'Providing clean water to rural areas.',
                'compaign_img' => null, // or you can put 'compaigns/example1.jpg'
                'compaign_date' => now(),
                'status' => 'waiting',
                'organization_id' => $organization->id,

            ],
            [
                'compaign_title' => 'School Supplies Drive',
                'compaign_content' => 'Helping students get the supplies they need.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'waiting',
                'organization_id' => $organization->id,

            ],
            [
                'compaign_title' => 'Tree Planting Campaign',
                'compaign_content' => 'Planting trees in urban areas for a greener city.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'waiting',
                'organization_id' => $organization->id,

            ],
        ];

        foreach ($campaigns as $compaign) {
            Compaign::create($compaign);
        }
    }
}
