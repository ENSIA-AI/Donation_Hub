<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CompaignController extends Controller
{
    public function index(){
        return (view('compaigns.index'));
    }
    public function create(){
        return (view('compaigns.create'));
    }
}