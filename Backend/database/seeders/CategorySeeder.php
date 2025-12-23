<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    public function run()
    {
        $categories = [
            ['category_name' => 'Education'],
            ['category_name' => 'Health'],
            ['category_name' => 'Charity / Humanitarian'],
            ['category_name' => 'Environment'],
            ['category_name' => 'Technology'],
            ['category_name' => 'Culture & Arts'],
            ['category_name' => 'Sports & Youth'],
        ];

        Category::insert($categories);
    }
}