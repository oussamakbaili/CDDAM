@extends('layouts.app')

@section('title', __('pages.activities.title'))

@section('content')
<section class="page-header py-5" style="background: linear-gradient(135deg, var(--primary-color) 0%, #006a87 100%); color: white;">
    <div class="container text-center">
        <h1 class="display-4">{{ __('pages.activities.title') }}</h1>
        <p class="lead">{{ __('pages.activities.subtitle') }}</p>
    </div>
</section>

<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-md-6 mb-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <i class="fas fa-building fa-3x mb-3" style="color: var(--primary-color);"></i>
                        <h3><a href="{{ route('activities.circles') }}" style="text-decoration: none; color: var(--primary-color);">{{ __('pages.activities.circles_title') }}</a></h3>
                        <p>{{ __('pages.activities.circles_text') }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <i class="fas fa-wine-glass fa-3x mb-3" style="color: var(--primary-color);"></i>
                        <h3><a href="{{ route('activities.networking') }}" style="text-decoration: none; color: var(--primary-color);">{{ __('pages.activities.networking_title') }}</a></h3>
                        <p>{{ __('pages.activities.networking_text') }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <i class="fas fa-calendar-alt fa-3x mb-3" style="color: var(--primary-color);"></i>
                        <h3><a href="{{ route('activities.congress') }}" style="text-decoration: none; color: var(--primary-color);">{{ __('pages.activities.congress_title') }}</a></h3>
                        <p>{{ __('pages.activities.congress_text') }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <i class="fas fa-calendar-check fa-3x mb-3" style="color: var(--primary-color);"></i>
                        <h3><a href="{{ route('activities.events') }}" style="text-decoration: none; color: var(--primary-color);">{{ __('pages.activities.events_title') }}</a></h3>
                        <p>{{ __('pages.activities.events_text') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection

