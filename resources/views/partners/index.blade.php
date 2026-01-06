@extends('layouts.app')

@section('title', __('pages.partners.title'))

@section('content')
<section class="page-header py-5" style="background: linear-gradient(135deg, var(--primary-color) 0%, #006a87 100%); color: white;">
    <div class="container text-center">
        <h1 class="display-4">{{ __('pages.partners.subtitle') }}</h1>
    </div>
</section>

<section class="py-5">
    <div class="container">
        <div class="row mb-5">
            <div class="col-12">
                <h2 class="section-title text-center">{{ __('pages.partners.categories_title') }}</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <i class="fas fa-university fa-3x mb-3" style="color: var(--primary-color);"></i>
                        <h4>{{ __('pages.partners.category1') }}</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <i class="fas fa-laptop-code fa-3x mb-3" style="color: var(--primary-color);"></i>
                        <h4>{{ __('pages.partners.category2') }}</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <i class="fas fa-handshake fa-3x mb-3" style="color: var(--primary-color);"></i>
                        <h4>{{ __('pages.partners.category3') }}</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <i class="fas fa-landmark fa-3x mb-3" style="color: var(--primary-color);"></i>
                        <h4>{{ __('pages.partners.category4') }}</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <i class="fas fa-graduation-cap fa-3x mb-3" style="color: var(--primary-color);"></i>
                        <h4>{{ __('pages.partners.category5') }}</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <i class="fas fa-tv fa-3x mb-3" style="color: var(--primary-color);"></i>
                        <h4>{{ __('pages.partners.category6') }}</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <i class="fas fa-plane fa-3x mb-3" style="color: var(--primary-color);"></i>
                        <h4>{{ __('pages.partners.category7') }}</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <i class="fas fa-dumbbell fa-3x mb-3" style="color: var(--primary-color);"></i>
                        <h4>{{ __('pages.partners.category8') }}</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <i class="fas fa-star fa-3x mb-3" style="color: var(--primary-color);"></i>
                        <h4>{{ __('pages.partners.category9') }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection

