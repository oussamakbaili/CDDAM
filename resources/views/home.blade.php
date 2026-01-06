@extends('layouts.app')

@section('title', __('pages.home.title'))

@section('content')
<!-- Hero Section -->
<section class="hero-section">
    <div class="container">
        <div class="hero-content">
            <h1 class="hero-title">{{ __('pages.home.hero_title') }}</h1>
            <p class="hero-subtitle">{{ __('pages.home.hero_subtitle') }}</p>
            <div class="hero-buttons">
                <a href="{{ route('membership') }}" class="btn btn-primary btn-lg">{{ __('pages.home.know_more') }}</a>
            </div>
            <div class="hero-features">
                <div class="feature-item">
                    <h3>{{ __('pages.home.feature1_title') }}</h3>
                    <p>{{ __('pages.home.feature1_text') }}</p>
                </div>
                <div class="feature-item">
                    <h3>{{ __('pages.home.feature2_title') }}</h3>
                    <p>{{ __('pages.home.feature2_text') }}</p>
                </div>
                <div class="feature-item">
                    <h3>{{ __('pages.home.feature3_title') }}</h3>
                    <p>{{ __('pages.home.feature3_text') }}</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Welcome Section -->
<section class="welcome-section py-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 mx-auto text-center">
                <h2 class="section-title">{{ __('pages.home.welcome_title') }}</h2>
                <p class="lead">{{ __('pages.home.welcome_text1') }}</p>
                <p>{{ __('pages.home.welcome_text2') }}</p>
            </div>
        </div>
    </div>
</section>

<!-- Identity Section -->
<section class="identity-section py-5 bg-light">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="identity-card">
                    <h3><i class="fas fa-eye"></i> {{ __('pages.home.vision') }}</h3>
                    <p>{{ __('pages.home.vision_text') }}</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="identity-card">
                    <h3><i class="fas fa-bullseye"></i> {{ __('pages.home.mission') }}</h3>
                    <ul>
                        <li>{{ __('pages.home.mission1') }}</li>
                        <li>{{ __('pages.home.mission2') }}</li>
                        <li>{{ __('pages.home.mission3') }}</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4">
                <div class="identity-card">
                    <h3><i class="fas fa-heart"></i> {{ __('pages.home.values') }}</h3>
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

<!-- Stats Section -->
<section class="stats-section py-5">
    <div class="container">
        <h2 class="section-title text-center mb-5">{{ __('pages.home.stats_title') }}</h2>
        <div class="row">
            @php
                $stats = isset($stats) && is_array($stats) ? $stats : [];
            @endphp
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="stat-card text-center">
                    <div class="stat-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3 class="stat-number">+ {{ number_format(isset($stats['members']) ? $stats['members'] : 0) }}</h3>
                    <p class="stat-label">{{ __('pages.home.members') }}</p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="stat-card text-center">
                    <div class="stat-icon">
                        <i class="fas fa-map-marked-alt"></i>
                    </div>
                    <h3 class="stat-number">{{ isset($stats['regions']) ? $stats['regions'] : 0 }}</h3>
                    <p class="stat-label">{{ __('pages.home.regions') }}</p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="stat-card text-center">
                    <div class="stat-icon">
                        <i class="fas fa-globe"></i>
                    </div>
                    <h3 class="stat-number">+ {{ isset($stats['countries']) ? $stats['countries'] : 0 }}</h3>
                    <p class="stat-label">{{ __('pages.home.countries') }}</p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="stat-card text-center">
                    <div class="stat-icon">
                        <i class="fas fa-handshake"></i>
                    </div>
                    <h3 class="stat-number">+ {{ isset($stats['partnerships']) ? $stats['partnerships'] : 0 }}</h3>
                    <p class="stat-label">{{ __('pages.home.partnerships') }}</p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="stat-card text-center">
                    <div class="stat-icon">
                        <i class="fas fa-building"></i>
                    </div>
                    <h3 class="stat-number">+ {{ isset($stats['business_circles']) ? $stats['business_circles'] : 0 }}</h3>
                    <p class="stat-label">{{ __('pages.home.business_circles') }}</p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="stat-card text-center">
                    <div class="stat-icon">
                        <i class="fas fa-calendar-alt"></i>
                    </div>
                    <h3 class="stat-number">+ {{ isset($stats['congress']) ? $stats['congress'] : 0 }}</h3>
                    <p class="stat-label">{{ __('pages.home.congress') }}</p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="stat-card text-center">
                    <div class="stat-icon">
                        <i class="fas fa-wine-glass"></i>
                    </div>
                    <h3 class="stat-number">+ {{ isset($stats['networking_events']) ? $stats['networking_events'] : 0 }}</h3>
                    <p class="stat-label">{{ __('pages.home.networking_events') }}</p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="stat-card text-center">
                    <div class="stat-icon">
                        <i class="fas fa-laptop"></i>
                    </div>
                    <h3 class="stat-number">{{ isset($stats['platforms']) ? $stats['platforms'] : 0 }}</h3>
                    <p class="stat-label">{{ __('pages.home.platforms') }}</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Premium Members Section -->
<section class="members-section py-5 bg-light">
    <div class="container">
        <h2 class="section-title text-center mb-5">{{ __('pages.home.premium_members') }}</h2>
        <div class="row">
            @if(isset($premiumMembers) && is_array($premiumMembers))
                @foreach($premiumMembers as $member)
                <div class="col-md-3 col-sm-6 mb-4">
                    <div class="member-card text-center">
                        <div class="member-avatar">
                            <i class="fas fa-user-tie"></i>
                        </div>
                        <h4>{{ isset($member['name']) ? $member['name'] : '' }}</h4>
                        <p>{{ isset($member['position']) ? $member['position'] : '' }}</p>
                    </div>
                </div>
                @endforeach
            @endif
        </div>
    </div>
</section>

<!-- VIP Members Section -->
<section class="members-section py-5">
    <div class="container">
        <h2 class="section-title text-center mb-5">{{ __('pages.home.vip_members') }}</h2>
        <div class="row">
            @if(isset($vipMembers) && is_array($vipMembers))
                @foreach($vipMembers as $member)
                <div class="col-md-3 col-sm-6 mb-4">
                    <div class="member-card text-center">
                        <div class="member-avatar">
                            <i class="fas fa-user-tie"></i>
                        </div>
                        <h4>{{ isset($member['name']) ? $member['name'] : '' }}</h4>
                        @if(isset($member['position']) && !empty($member['position']))
                        <p>{{ $member['position'] }}</p>
                        @endif
                    </div>
                </div>
                @endforeach
            @endif
        </div>
    </div>
</section>

<!-- Testimonials Section -->
<section class="testimonials-section py-5 bg-light">
    <div class="container">
        <h2 class="section-title text-center mb-5">{{ __('pages.home.testimonials') }}</h2>
        <div class="row">
            @if(isset($testimonials) && is_array($testimonials))
                @foreach($testimonials as $testimonial)
                <div class="col-md-4 mb-4">
                    <div class="testimonial-card">
                        <div class="testimonial-rating">
                            @for($i = 0; $i < (isset($testimonial['rating']) ? $testimonial['rating'] : 5); $i++)
                            <i class="fas fa-star"></i>
                            @endfor
                        </div>
                        <p class="testimonial-content">"{{ isset($testimonial['content']) ? $testimonial['content'] : '' }}"</p>
                        <div class="testimonial-author">
                            <strong>{{ isset($testimonial['author']) ? $testimonial['author'] : '' }}</strong>
                            <p>{{ isset($testimonial['position']) ? $testimonial['position'] : '' }}</p>
                        </div>
                    </div>
                </div>
                @endforeach
            @endif
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="cta-section py-5">
    <div class="container text-center">
        <h2 class="section-title mb-4">{{ __('pages.home.cta_title') }}</h2>
        <p class="lead mb-4">{{ __('pages.home.cta_text') }}</p>
        <a href="{{ route('membership') }}" class="btn btn-primary btn-lg">{{ __('pages.home.join_button') }}</a>
    </div>
</section>
@endsection

