<?php

use App\Http\Controllers\organizationController;
use App\Models\Organization;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

