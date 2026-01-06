@extends('layouts.app')

@section('title', __('pages.about.title'))

@section('content')
<section class="page-header py-5" style="background: linear-gradient(135deg, var(--primary-color) 0%, #006a87 100%); color: white;">
    <div class="container text-center">
        <h1 class="display-4">{{ __('pages.about.title') }}</h1>
        <p class="lead">{{ __('pages.about.subtitle') }}</p>
    </div>
</section>

<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <i class="fas fa-info-circle fa-3x mb-3" style="color: var(--primary-color);"></i>
                        <h3><a href="{{ route('about.who') }}" style="text-decoration: none; color: var(--primary-color);">{{ __('pages.about.who_title') }}</a></h3>
                        <p>{{ __('pages.about.who_text') }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <i class="fas fa-users fa-3x mb-3" style="color: var(--primary-color);"></i>
                        <h3><a href="{{ route('about.instances') }}" style="text-decoration: none; color: var(--primary-color);">{{ __('pages.about.instances_title') }}</a></h3>
                        <p>{{ __('pages.about.instances_text') }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <i class="fas fa-clipboard-list fa-3x mb-3" style="color: var(--primary-color);"></i>
                        <h3><a href="{{ route('about.commissions') }}" style="text-decoration: none; color: var(--primary-color);">{{ __('pages.about.commissions_title') }}</a></h3>
                        <p>{{ __('pages.about.commissions_text') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection

