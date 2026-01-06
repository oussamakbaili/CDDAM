@extends('layouts.app')

@section('title', __('pages.about.who_title'))

@section('content')
<section class="page-header py-5" style="background: linear-gradient(135deg, var(--primary-color) 0%, #006a87 100%); color: white;">
    <div class="container text-center">
        <h1 class="display-4">{{ __('pages.about.who_title') }}</h1>
    </div>
</section>

<section class="py-5">
    <div class="container">
        <div class="row mb-5">
            <div class="col-lg-8 mx-auto">
                <h2 class="section-title">{{ __('pages.about.identity_title') }}</h2>
                <div class="card mb-4">
                    <div class="card-body">
                        <h4><i class="fas fa-gavel" style="color: var(--primary-color);"></i> {{ __('pages.about.legal_form') }}</h4>
                        <p>{{ __('pages.about.legal_form_text') }}</p>
                    </div>
                </div>
                <div class="card mb-4">
                    <div class="card-body">
                        <h4><i class="fas fa-question-circle" style="color: var(--primary-color);"></i> {{ __('pages.about.why') }}</h4>
                        <p>{{ __('pages.about.why_text') }}</p>
                    </div>
                </div>
                <div class="card mb-4">
                    <div class="card-body">
                        <h4><i class="fas fa-map-marked-alt" style="color: var(--primary-color);"></i> {{ __('pages.about.scope') }}</h4>
                        <ul>
                            <li>{{ __('pages.about.scope1') }}</li>
                            <li>{{ __('pages.about.scope2') }}</li> 
                            <li>{{ __('pages.about.scope3') }}</li>
                        </ul>
                    </div>
                </div>
                <div class="card mb-4">
                    <div class="card-body">
                        <h4><i class="fas fa-compass" style="color: var(--primary-color);"></i> {{ __('pages.about.orientation') }}</h4>
                        <p>{{ __('pages.about.orientation_text') }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="identity-card">
                    <h3><i class="fas fa-eye"></i> {{ __('pages.about.vision') }}</h3>
                    <p>{{ __('pages.about.vision_text') }}</p>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="identity-card">
                    <h3><i class="fas fa-bullseye"></i> {{ __('pages.about.mission') }}</h3>
                    <ul>
                        <li>{{ __('pages.about.mission1') }}</li>
                        <li>{{ __('pages.about.mission2') }}</li>
                        <li>{{ __('pages.about.mission3') }}</li>
                        <li>{{ __('pages.about.mission4') }}</li>
                        <li>{{ __('pages.about.mission5') }}</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="identity-card">
                    <h3><i class="fas fa-heart"></i> {{ __('pages.about.values') }}</h3>
                    <ul>
                        <li>{{ __('pages.home.value1') }}</li>
                        <li>{{ __('pages.home.value2') }}</li>
                        <li>{{ __('pages.home.value3') }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection