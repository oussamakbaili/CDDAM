<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ActivitiesController extends Controller
{
    public function index()
    {
        return view('activities.index');
    }

    public function businessCircles()
    {
        return view('activities.business-circles');
    }

    public function networking()
    {
        return view('activities.networking');
    }

    public function congress()
    {
        return view('activities.congress');
    }

    public function events()
    {
        return view('activities.events');
    }
}

