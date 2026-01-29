<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrganizationSeeder extends Seeder
{
    public function run(): void
    {
        // 1️⃣ Seed Wilayas
        DB::table('wilayas')->insert([
            ['wilaya_name' => 'Algiers'],
            ['wilaya_name' => 'Oran'],
            ['wilaya_name' => 'Constantine'],
        ]);

        // 2️⃣ Seed Categories
        DB::table('categories')->insert([
            ['category' => 'Education'],
            ['category' => 'Health'],
            ['category' => 'Environment'],
        ]);

        // 3️⃣ Seed Organizations
        DB::table('organizations')->insert([

    [
        'org_name' => 'Green Future Foundation',
        'org_registrationDate' => '2023-05-12',
        'org_description' => 'Environmental organization promoting sustainability.',
        'category_id' => 3, // Environment
        'wilaya_id' => 1,   // Algiers
        'org_email' => 'contact@greenfuture.org',
        'org_slogan' => 'Together for a greener future',
        'status' => 'approved',
        'org_hero_img' => 'hero1.jpg',
        'org_logo' => 'logo1.png',
        'org_mission' => 'Protect the environment.',
        'org_vision' => 'A sustainable Algeria.',
        'mission_img' => 'mission1.png',
        'program1_title' => 'Tree Planting Program',
        'program1_desc' => 'Planting 10,000 trees across Algeria.',
        'program1_img' => 'program1.jpg',
        'program2_title' => 'Recycling Awareness',
        'program2_desc' => 'Teaching youth proper recycling habits.',
        'program2_img' => 'program2.jpg',
        'impact_value1' => '10k',
        'imapct_desc1' => 'Trees planted',
        'impact_value2' => '5k',
        'imapct_desc2' => 'Students trained',
        'impact_value3' => '20',
        'imapct_desc3' => 'Communities reached',
        'value1' => 'Sustainability',
        'value2' => 'Education',
        'value3' => 'Responsibility',
        'value4' => 'Community',
        'org_address' => 'Algiers Center',
        'org_phone' => '+213550001111',
        'org_facebook' => 'facebook.com/greenfuture',
        'org_instagram' => 'instagram.com/greenfuture',
    ],

    [
        'org_name' => 'Youth Education Network',
        'org_registrationDate' => '2022-11-20',
        'org_description' => 'Non-profit focused on improving youth education in Algeria.',
        'category_id' => 1, // Education
        'wilaya_id' => 2,   // Oran
        'org_email' => 'info@youthnetwork.org',
        'org_slogan' => 'Empowering future leaders',
        'status' => 'approved',
        'org_hero_img' => 'hero2.jpg',
        'org_logo' => 'logo2.png',
        'org_mission' => 'Provide free workshops for students.',
        'org_vision' => 'Education for every Algerian child.',
        'mission_img' => 'mission2.png',
        'program1_title' => 'Math Boost Program',
        'program1_desc' => 'Helps students improve math skills.',
        'program1_img' => 'program2a.jpg',
        'program2_title' => 'Language Skills',
        'program2_desc' => 'Free English and French lessons.',
        'program2_img' => 'program2b.jpg',
        'impact_value1' => '2k',
        'imapct_desc1' => 'Students taught',
        'impact_value2' => '200',
        'imapct_desc2' => 'Workshops delivered',
        'impact_value3' => '50',
        'imapct_desc3' => 'Volunteers engaged',
        'value1' => 'Knowledge',
        'value2' => 'Growth',
        'value3' => 'Motivation',
        'value4' => 'Opportunity',
        'org_address' => 'Oran city center',
        'org_phone' => '+213550002222',
        'org_facebook' => 'facebook.com/youthnetwork',
        'org_instagram' => 'instagram.com/youthnetwork',
    ],

    [
        'org_name' => 'Hope Medical Aid',
        'org_registrationDate' => '2021-04-05',
        'org_description' => 'Provides medical support and awareness programs.',
        'category_id' => 2, // Health
        'wilaya_id' => 1,   // Algiers
        'org_email' => 'contact@hopemedical.org',
        'org_slogan' => 'Health for all',
        'status' => 'approved',
        'org_hero_img' => 'hero3.jpg',
        'org_logo' => 'logo3.png',
        'org_mission' => 'Support families in need of medical care.',
        'org_vision' => 'A healthy, empowered society.',
        'mission_img' => 'mission3.png',
        'program1_title' => 'Blood Donation Campaigns',
        'program1_desc' => 'Organizes frequent blood donation events.',
        'program1_img' => 'program3a.jpg',
        'program2_title' => 'Health Awareness',
        'program2_desc' => 'Free public health workshops.',
        'program2_img' => 'program3b.jpg',
        'impact_value1' => '500',
        'imapct_desc1' => 'Patients supported',
        'impact_value2' => '120',
        'imapct_desc2' => 'Blood drives',
        'impact_value3' => '3k',
        'imapct_desc3' => 'People reached',
        'value1' => 'Care',
        'value2' => 'Compassion',
        'value3' => 'Support',
        'value4' => 'Humanity',
        'org_address' => 'Bab Ezzouar, Algiers',
        'org_phone' => '+213550003333',
        'org_facebook' => 'facebook.com/hopeaid',
        'org_instagram' => 'instagram.com/hopeaid',
    ],

    [
        'org_name' => 'Clean Coast Algeria',
        'org_registrationDate' => '2023-02-14',
        'org_description' => 'Community group dedicated to cleaning and preserving beaches.',
        'category_id' => 3, // Environment
        'wilaya_id' => 2,   // Oran (coast)
        'org_email' => 'contact@cleancoast.org',
        'org_slogan' => 'Cleaner oceans, brighter future',
        'status' => 'approved',
        'org_hero_img' => 'hero4.jpg',
        'org_logo' => 'logo4.png',
        'org_mission' => 'Reduce pollution on Algerian beaches.',
        'org_vision' => 'Plastic-free coasts.',
        'mission_img' => 'mission4.png',
        'program1_title' => 'Beach Cleanup Events',
        'program1_desc' => 'Organizes volunteer cleanup campaigns.',
        'program1_img' => 'program4a.jpg',
        'program2_title' => 'Marine Education',
        'program2_desc' => 'Teaches kids about protecting marine life.',
        'program2_img' => 'program4b.jpg',
        'impact_value1' => '8 tons',
        'imapct_desc1' => 'Trash collected',
        'impact_value2' => '900',
        'imapct_desc2' => 'Volunteers involved',
        'impact_value3' => '30',
        'imapct_desc3' => 'Beaches covered',
        'value1' => 'Protection',
        'value2' => 'Teamwork',
        'value3' => 'Awareness',
        'value4' => 'Respect',
        'org_address' => 'Oran seaside',
        'org_phone' => '+213550004444',
        'org_facebook' => 'facebook.com/cleancoast',
        'org_instagram' => 'instagram.com/cleancoast',
    ],

    [
        'org_name' => 'Algerian Women Empowerment',
        'org_registrationDate' => '2020-09-10',
        'org_description' => 'Helps women improve skills, education, and career opportunities.',
        'category_id' => 1, // Education
        'wilaya_id' => 3,   // Constantine
        'org_email' => 'support@awe.org',
        'org_slogan' => 'Empower a woman, empower a nation',
        'status' => 'approved',
        'org_hero_img' => 'hero5.jpg',
        'org_logo' => 'logo5.png',
        'org_mission' => 'Provide free training for women.',
        'org_vision' => 'Stronger women, stronger communities.',
        'mission_img' => 'mission5.png',
        'program1_title' => 'Entrepreneurship Training',
        'program1_desc' => 'Workshops helping women start businesses.',
        'program1_img' => 'program5a.jpg',
        'program2_title' => 'Digital Skills',
        'program2_desc' => 'Coding and tech literacy courses.',
        'program2_img' => 'program5b.jpg',
        'impact_value1' => '700',
        'imapct_desc1' => 'Women trained',
        'impact_value2' => '60',
        'imapct_desc2' => 'Workshops delivered',
        'impact_value3' => '15',
        'imapct_desc3' => 'Partnerships formed',
        'value1' => 'Equality',
        'value2' => 'Strength',
        'value3' => 'Independence',
        'value4' => 'Hope',
        'org_address' => 'Constantine center',
        'org_phone' => '+213550005555',
        'org_facebook' => 'facebook.com/awe.dz',
        'org_instagram' => 'instagram.com/awe.dz',
    ],

    [
        'org_name' => 'Healthy Kids Initiative',
        'org_registrationDate' => '2024-01-03',
        'org_description' => 'Promotes child health, nutrition, and sports.',
        'category_id' => 2, // Health
        'wilaya_id' => 3,   // Constantine
        'org_email' => 'hello@healthykids.org',
        'org_slogan' => 'Strong bodies, strong minds',
        'status' => 'approved',
        'org_hero_img' => 'hero6.jpg',
        'org_logo' => 'logo6.png',
        'org_mission' => 'Create a healthier generation.',
        'org_vision' => 'All children deserve a healthy life.',
        'mission_img' => 'mission6.png',
        'program1_title' => 'Nutrition Classes',
        'program1_desc' => 'Teaches kids about healthy eating.',
        'program1_img' => 'program6a.jpg',
        'program2_title' => 'Sports for All',
        'program2_desc' => 'Free access to physical activity programs.',
        'program2_img' => 'program6b.jpg',
        'impact_value1' => '1.2k',
        'imapct_desc1' => 'Kids helped',
        'impact_value2' => '70',
        'imapct_desc2' => 'Sports events',
        'impact_value3' => '12',
        'imapct_desc3' => 'Schools involved',
        'value1' => 'Health',
        'value2' => 'Energy',
        'value3' => 'Fun',
        'value4' => 'Community',
        'org_address' => 'Constantine',
        'org_phone' => '+213550006666',
        'org_facebook' => 'facebook.com/healthykids',
        'org_instagram' => 'instagram.com/healthykids',
    ],

]);

    }

}
