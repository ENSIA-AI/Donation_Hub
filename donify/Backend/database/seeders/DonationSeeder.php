<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Donation;
use Carbon\Carbon;

class DonationSeeder extends Seeder
{
    public function run()
    {
        Donation::insert([
            [   'organization_id' => 1,
                'compaign_id' => 1,
                'donor_firstName' => 'Ali',
                'donor_lastName' => 'Benali',
                'donor_phoneNumber' => '0550123456',
                'donor_email' => 'ali@example.com',
                'donation_type' => 'money',
                'donation_amount' => 5000,
                'donation_received' => true,
                'donation_date' => Carbon::parse('2025-11-25'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [   'organization_id' => 1,
                'compaign_id' => 1,
                'donor_firstName' => 'Sara',
                'donor_lastName' => 'Khelifi',
                'donor_phoneNumber' => '0660987654',
                'donor_email' => 'sara@example.com',
                'donation_type' => 'food',
                'donation_amount' => null,
                'donation_received' => false,
                'donation_date' => Carbon::parse('2025-11-20'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [    'organization_id' => 1,
                 'compaign_id' => 1,
                'donor_firstName' => 'Mohamed',
                'donor_lastName' => 'Amrani',
                'donor_phoneNumber' => '0770456123',
                'donor_email' => 'mohamed@example.com',
                'donation_type' => 'medicins',
                'donation_amount' => null,
                'donation_received' => true,
                'donation_date' => Carbon::parse('2025-11-18'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [    'organization_id' => 1,
                 'compaign_id' => 1,
                'donor_firstName' => 'Lina',
                'donor_lastName' => 'Toumi',
                'donor_phoneNumber' => '0541122334',
                'donor_email' => 'lina@example.com',
                'donation_type' => 'money',
                'donation_amount' => 12000,
                'donation_received' => false,
                'donation_date' => Carbon::parse('2025-11-27'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}