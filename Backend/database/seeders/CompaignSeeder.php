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

            // ===== GREEN FUTURE FOUNDATION (Org 1) =====
            [
                'compaign_title' => 'Tree Planting Campaign 2024',
                'compaign_content' => 'Planting 5,000 trees across Algiers to combat climate change and improve air quality.',
                'compaign_img' => 'compaigns/tree_planting.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 1,
                'category_id' => 4, // Environment
            ],
            [
                'compaign_title' => 'Recycling Education Program',
                'compaign_content' => 'Teaching schools and communities about proper waste management and recycling practices.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 1,
                'category_id' => 1, // Education
            ],
            [
                'compaign_title' => 'Solar Energy Initiative',
                'compaign_content' => 'Installing solar panels in rural communities for sustainable energy access.',
                'compaign_img' => 'compaigns/solar_energy.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 1,
                'category_id' => 4, // Environment
            ],
            [
                'compaign_title' => 'Organic Farming Support',
                'compaign_content' => 'Providing resources and training for organic farming in rural areas.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 1,
                'category_id' => 4, // Environment
            ],
            [
                'compaign_title' => 'Ocean Cleanup Drive',
                'compaign_content' => 'Organizing beach cleanups and marine conservation efforts along Algeria coast.',
                'compaign_img' => 'compaigns/ocean_cleanup.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 1,
                'category_id' => 4, // Environment
            ],
            [
                'compaign_title' => 'Environmental Awareness Week',
                'compaign_content' => 'Week-long campaign promoting environmental consciousness through workshops and events.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 1,
                'category_id' => 4, // Environment
            ],

            // ===== YOUTH EDUCATION NETWORK (Org 2) =====
            [
                'compaign_title' => 'Math Tutoring Program',
                'compaign_content' => 'Free math tutoring sessions for struggling students in grades 6-12.',
                'compaign_img' => 'compaigns/math_tutoring.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 2,
                'category_id' => 1, // Education
            ],
            [
                'compaign_title' => 'English Language Bootcamp',
                'compaign_content' => 'Intensive 8-week English language program for youth in Oran.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 2,
                'category_id' => 1, // Education
            ],
            [
                'compaign_title' => 'Scholarship Fund Drive',
                'compaign_content' => 'Raising funds for scholarships to help underprivileged students continue their education.',
                'compaign_img' => 'compaigns/scholarship.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 2,
                'category_id' => 3, // Charity/Humanitarian
            ],
            [
                'compaign_title' => 'Digital Literacy Workshop',
                'compaign_content' => 'Teaching computer basics and digital skills to students with limited tech access.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 2,
                'category_id' => 5, // Technology
            ],
            [
                'compaign_title' => 'Science Fair Support',
                'compaign_content' => 'Organizing and sponsoring annual youth science fair to encourage STEM interest.',
                'compaign_img' => 'compaigns/science_fair.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 2,
                'category_id' => 1, // Education
            ],
            [
                'compaign_title' => 'Mentorship Program Launch',
                'compaign_content' => 'Connecting successful professionals with youth for career mentoring and guidance.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 2,
                'category_id' => 1, // Education
            ],

            // ===== HOPE MEDICAL AID (Org 3) =====
            [
                'compaign_title' => 'Blood Donation Campaign Q1',
                'compaign_content' => 'Organizing blood donation drives to replenish hospital blood banks.',
                'compaign_img' => 'compaigns/comp1_3.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 3,
                'category_id' => 2, // Health
            ],
            [
                'compaign_title' => 'Free Health Screening',
                'compaign_content' => 'Providing free medical check-ups and health screenings in underserved neighborhoods.',
                'compaign_img' => 'compaigns/comp2_3.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 3,
                'category_id' => 2, // Health
            ],
            [
                'compaign_title' => 'Vaccination Drive',
                'compaign_content' => 'Mobile vaccination clinic reaching remote areas with essential vaccines.',
                'compaign_img' => 'compaigns/comp3_3.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 3,
                'category_id' => 2, // Health
            ],
            [
                'compaign_title' => 'Maternal Health Initiative',
                'compaign_content' => 'Providing prenatal care and maternal health education to pregnant women.',
                'compaign_img' => 'compaigns/comp4_3.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 3,
                'category_id' => 2, // Health
            ],
            [
                'compaign_title' => 'Health Awareness Seminar',
                'compaign_content' => 'Educational seminars on chronic disease prevention and healthy lifestyle choices.',
                'compaign_img' => 'compaigns/comp5_3.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 3,
                'category_id' => 2, // Health
            ],
            [
                'compaign_title' => 'Mental Health Support Program',
                'compaign_content' => 'Free counseling and mental health support for patients and families.',
                'compaign_img' => 'compaigns/comp6_3.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 3,
                'category_id' => 2, // Health
            ],

            // ===== CLEAN COAST ALGERIA (Org 4) =====
            [
                'compaign_title' => 'Beach Cleanup Marathon',
                'compaign_content' => 'Monthly beach cleanup events collecting plastic waste and debris from shores.',
                'compaign_img' => 'compaigns/beach_cleanup.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 4,
                'category_id' => 4, // Environment
            ],
            [
                'compaign_title' => 'Marine Wildlife Protection',
                'compaign_content' => 'Campaign to protect endangered marine species and their habitats.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 4,
                'category_id' => 4, // Environment
            ],
            [
                'compaign_title' => 'Plastic-Free Initiative',
                'compaign_content' => 'Encouraging businesses and residents to reduce single-use plastic.',
                'compaign_img' => 'compaigns/plastic_free.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 4,
                'category_id' => 3, // Charity/Humanitarian
            ],
            [
                'compaign_title' => 'Coastal Education Program',
                'compaign_content' => 'Teaching schools about marine ecosystems and coastal conservation.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 4,
                'category_id' => 1, // Education
            ],
            [
                'compaign_title' => 'Fishing Sustainability Drive',
                'compaign_content' => 'Promoting sustainable fishing practices to protect fish populations.',
                'compaign_img' => 'compaigns/fishing_sustainability.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 4,
                'category_id' => 4, // Environment
            ],
            [
                'compaign_title' => 'Youth Marine Ambassador Program',
                'compaign_content' => 'Training young people to become ocean conservation ambassadors.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 4,
                'category_id' => 7, // Sports & Youth
            ],

            // ===== ALGERIAN WOMEN EMPOWERMENT (Org 5) =====
            [
                'compaign_title' => 'Women in Business Training',
                'compaign_content' => 'Entrepreneurship workshops helping women start and grow their own businesses.',
                'compaign_img' => 'compaigns/women_business.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 5,
                'category_id' => 1, // Education
            ],
            [
                'compaign_title' => 'Tech Skills for Women',
                'compaign_content' => 'Coding and tech literacy courses for women in tech industry.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 5,
                'category_id' => 5, // Technology
            ],
            [
                'compaign_title' => 'Leadership Development Program',
                'compaign_content' => 'Developing leadership skills and confidence in women leaders.',
                'compaign_img' => 'compaigns/women_leadership.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 5,
                'category_id' => 1, // Education
            ],
            [
                'compaign_title' => 'Women\'s Rights Awareness',
                'compaign_content' => 'Educating women about their rights and how to access support services.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 5,
                'category_id' => 3, // Charity/Humanitarian
            ],
            [
                'compaign_title' => 'Financial Literacy Workshop',
                'compaign_content' => 'Teaching women financial planning, saving, and investment skills.',
                'compaign_img' => 'compaigns/financial_literacy.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 5,
                'category_id' => 1, // Education
            ],
            [
                'compaign_title' => 'Scholarship for Girls Fund',
                'compaign_content' => 'Raising funds to provide scholarships for underprivileged girls.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 5,
                'category_id' => 3, // Charity/Humanitarian
            ],

            // ===== HEALTHY KIDS INITIATIVE (Org 6) =====
            [
                'compaign_title' => 'School Sports Program',
                'compaign_content' => 'Free sports and physical activity programs for school children.',
                'compaign_img' => 'compaigns/school_sports.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 6,
                'category_id' => 7, // Sports & Youth
            ],
            [
                'compaign_title' => 'Nutrition Education Campaign',
                'compaign_content' => 'Teaching children and parents about healthy eating and nutrition.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 6,
                'category_id' => 2, // Health
            ],
            [
                'compaign_title' => 'Childhood Obesity Prevention',
                'compaign_content' => 'Programs to combat childhood obesity through exercise and healthy diet.',
                'compaign_img' => 'compaigns/obesity_prevention.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 6,
                'category_id' => 2, // Health
            ],
            [
                'compaign_title' => 'Mental Wellness for Kids',
                'compaign_content' => 'Promoting mental health and emotional well-being in children.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 6,
                'category_id' => 2, // Health
            ],
            [
                'compaign_title' => 'Free Health Checkup Days',
                'compaign_content' => 'Regular health checkups and dental care for underprivileged children.',
                'compaign_img' => 'compaigns/health_checkup.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 6,
                'category_id' => 2, // Health
            ],
            [
                'compaign_title' => 'Youth Sports Tournament',
                'compaign_content' => 'Annual sports tournament for children promoting team spirit and fitness.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 6,
                'category_id' => 7, // Sports & Youth
            ],

            // ===== SHELTER FOR HOMELESS (Org 7) =====
            [
                'compaign_title' => 'Emergency Winter Shelter Drive',
                'compaign_content' => 'Providing temporary shelter and warm meals during winter months.',
                'compaign_img' => 'compaigns/winter_shelter.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 7,
                'category_id' => 3, // Charity/Humanitarian
            ],
            [
                'compaign_title' => 'Job Training Initiative',
                'compaign_content' => 'Vocational training and job placement assistance for homeless individuals.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 7,
                'category_id' => 1, // Education
            ],
            [
                'compaign_title' => 'Mental Health Support Services',
                'compaign_content' => 'Free counseling and mental health services for shelter residents.',
                'compaign_img' => 'compaigns/mental_health_support.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 7,
                'category_id' => 2, // Health
            ],
            [
                'compaign_title' => 'Housing First Program',
                'compaign_content' => 'Moving homeless individuals into permanent housing with support services.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 7,
                'category_id' => 3, // Charity/Humanitarian
            ],
            [
                'compaign_title' => 'Community Kitchen Program',
                'compaign_content' => 'Operating daily community kitchens providing free meals to homeless population.',
                'compaign_img' => 'compaigns/community_kitchen.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 7,
                'category_id' => 3, // Charity/Humanitarian
            ],
            [
                'compaign_title' => 'Health and Hygiene Drive',
                'compaign_content' => 'Providing hygiene kits, showers, and healthcare to homeless individuals.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 7,
                'category_id' => 3, // Charity/Humanitarian
            ],

            // ===== WATER FOR LIFE (Org 8) =====
            [
                'compaign_title' => 'Rural Water Well Project',
                'compaign_content' => 'Drilling and installing water wells in remote rural villages.',
                'compaign_img' => 'compaigns/water_well.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 8,
                'category_id' => 4, // Environment
            ],
            [
                'compaign_title' => 'Water System Maintenance',
                'compaign_content' => 'Maintaining and repairing existing water infrastructure in communities.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 8,
                'category_id' => 4, // Environment
            ],
            [
                'compaign_title' => 'Water Safety Training',
                'compaign_content' => 'Teaching communities about water purification and safe handling.',
                'compaign_img' => 'compaigns/water_safety.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 8,
                'category_id' => 1, // Education
            ],
            [
                'compaign_title' => 'Rainwater Harvesting Program',
                'compaign_content' => 'Installing rainwater collection systems for water conservation.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 8,
                'category_id' => 4, // Environment
            ],
            [
                'compaign_title' => 'Water Quality Testing',
                'compaign_content' => 'Regular testing and monitoring of water quality in villages.',
                'compaign_img' => 'compaigns/water_quality.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 8,
                'category_id' => 4, // Environment
            ],
            [
                'compaign_title' => 'Water Conservation Awareness',
                'compaign_content' => 'Educating communities about water conservation and sustainable use.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 8,
                'category_id' => 3, // Charity/Humanitarian
            ],

            // ===== FOOD BANK ALGERIA (Org 9) =====
            [
                'compaign_title' => 'Weekly Food Distribution',
                'compaign_content' => 'Weekly distribution of food packages to families in need.',
                'compaign_img' => 'compaigns/comp1_9.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 9,
                'category_id' => 3, // Charity/Humanitarian
            ],
            [
                'compaign_title' => 'Community Meal Program',
                'compaign_content' => 'Free daily meals at community centers for vulnerable populations.',
                'compaign_img' => 'compaigns/comp2_9.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 9,
                'category_id' => 3, // Charity/Humanitarian
            ],
            [
                'compaign_title' => 'School Lunch Program',
                'compaign_content' => 'Providing nutritious lunch to students from low-income families.',
                'compaign_img' => 'compaigns/comp3_9.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 9,
                'category_id' => 1, // Education
            ],
            [
                'compaign_title' => 'Food Donation Drive',
                'compaign_content' => 'Collecting food donations from businesses and residents.',
                'compaign_img' => 'compaigns/comp4_9.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 9,
                'category_id' => 3, // Charity/Humanitarian
            ],
            [
                'compaign_title' => 'Nutrition Education Workshop',
                'compaign_content' => 'Teaching families about nutrition and healthy meal preparation on budget.',
                'compaign_img' => 'compaigns/comp5_9.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 9,
                'category_id' => 2, // Health
            ],
            [
                'compaign_title' => 'Ramadan Food Package Drive',
                'compaign_content' => 'Special food packages during Ramadan for breaking fast and charity.',
                'compaign_img' => 'compaigns/comp6_9.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 9,
                'category_id' => 6, // Culture & Arts (Ramadan is cultural)
            ],

            // ===== MENTAL HEALTH AWARENESS (Org 10) =====
            [
                'compaign_title' => 'Free Counseling Services',
                'compaign_content' => 'Providing free and confidential counseling sessions for all ages.',
                'compaign_img' => 'compaigns/counseling_services.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 10,
                'category_id' => 2, // Health
            ],
            [
                'compaign_title' => 'Mental Health Awareness Campaign',
                'compaign_content' => 'Public awareness campaign to reduce stigma around mental health.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 10,
                'category_id' => 2, // Health
            ],
            [
                'compaign_title' => 'Depression and Anxiety Support Group',
                'compaign_content' => 'Weekly support groups for people with depression and anxiety.',
                'compaign_img' => 'compaigns/support_group.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 10,
                'category_id' => 2, // Health
            ],
            [
                'compaign_title' => 'Teen Mental Health Program',
                'compaign_content' => 'Mental health support and awareness programs specifically for teenagers.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 10,
                'category_id' => 7, // Sports & Youth
            ],
            [
                'compaign_title' => 'Stress Management Workshop',
                'compaign_content' => 'Educational workshops on stress management and coping strategies.',
                'compaign_img' => 'compaigns/stress_management.jpg',
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 10,
                'category_id' => 1, // Education
            ],
            [
                'compaign_title' => 'Workplace Mental Health Initiative',
                'compaign_content' => 'Training companies on mental health awareness and employee support.',
                'compaign_img' => null,
                'compaign_date' => now(),
                'status' => 'accepted',
                'organization_id' => 10,
                'category_id' => 2, // Health
            ],
        ];

        foreach ($campaigns as $compaign) {
            Compaign::create($compaign);
        }
    }
}