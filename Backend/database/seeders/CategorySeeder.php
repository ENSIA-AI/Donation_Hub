<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    public function run()
    {
        $categories = [
            ['category' => 'Education'],
            ['category' => 'Health'],
            ['category' => 'Charity / Humanitarian'],
            ['category' => 'Environment'],
            ['category' => 'Technology'],
            ['category' => 'Culture & Arts'],
            ['category' => 'Sports & Youth'],
        ];

        Category::insert($categories);
    }
}
