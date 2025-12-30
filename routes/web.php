<?php

use Illuminate\Support\Facades\Route;

// SPA Route - Toutes les routes pointent vers React
// React Router gère la navigation côté client
Route::get('/{any}', function () {
    return view('layouts.app');
})->where('any', '.*');

