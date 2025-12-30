<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index()
    {
        return view('about.index');
    }

    public function whoWeAre()
    {
        return view('about.who-we-are');
    }

    public function instances()
    {
        return view('about.instances');
    }

    public function commissions()
    {
        return view('about.commissions');
    }
}

