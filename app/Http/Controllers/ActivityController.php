<?php

namespace App\Http\Controllers;

use App\Models\Activity;

class ActivityController extends Controller
{
    public function index()
    {
        return Activity::where('is_active', true)
            ->orderBy('order')
            ->get();
    }
}


