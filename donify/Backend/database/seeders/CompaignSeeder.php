<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Compaign;

class CompaignSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Example static campaigns
        $campaigns = [
            [
                'compaign_title' => 'Clean Water Initiative',
                'compaign_content' => 'Providing clean water to rural areas.',
                'compaign_img' => null, // or you can put 'compaigns/example1.jpg'
                'compaign_date' => now(),
                'status' => 'waiting',
            ],
            [
                'compaign_title' => 'School Supplies Drive',
                'compaign_content' => 'Helping students get the supplies they need.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'waiting',
            ],
            [
                'compaign_title' => 'Tree Planting Campaign',
                'compaign_content' => 'Planting trees in urban areas for a greener city.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'waiting',
            ],
        ];

        foreach ($campaigns as $compaign) {
            Compaign::create($compaign);
        }
    }
}
