@extends('layouts.app')

@section('title', 'Accueil')

@section('content')
<!-- Hero Section -->
<section class="hero-section">
    <div class="container">
        <div class="hero-content">
            <h1 class="hero-title">REJOIGNEZ LE CDD</h1>
            <p class="hero-subtitle">Nous serons plus fort, ENSEMBLE</p>
            <div class="hero-buttons">
                <a href="{{ route('membership') }}" class="btn btn-primary btn-lg">EN SAVOIR PLUS</a>
            </div>
            <div class="hero-features">
                <div class="feature-item">
                    <h3>FAITES PARTIE D'UN RÉSEAU INFLUENT</h3>
                    <p>REJOIGNEZ LE CDD</p>
                </div>
                <div class="feature-item">
                    <h3>Un hub d'affaires 100% Marocain</h3>
                    <p>REJOIGNEZ LE CDD</p>
                </div>
                <div class="feature-item">
                    <h3>REJOINGEZ UN CERCLE D'AFFAIRES</h3>
                    <p>REJOIGNEZ LE CDD</p>
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
                <h2 class="section-title">Bienvenue au Club des Dirigeants</h2>
                <p class="lead">Nous sommes ravis de vous accueillir dans notre communauté dynamique regroupant des dirigeants passionnés et visionnaires. Chez nous, vous trouverez un espace d'échange, de partage et de croissance, conçu spécialement pour répondre aux besoins uniques des leaders d'aujourd'hui.</p>
                <p>Que vous soyez un entrepreneur chevronné, un cadre supérieur ou un futur dirigeant ambitieux, notre club vous offre une plateforme exceptionnelle pour développer votre réseau, élargir vos horizons et renforcer votre leadership.</p>
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
                    <h3><i class="fas fa-eye"></i> Vision</h3>
                    <p>Etre le Hub d'affaire, d'influence, et de création des valeurs le plus responsable et engagé dans le bien-être collectif.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="identity-card">
                    <h3><i class="fas fa-bullseye"></i> Mission</h3>
                    <ul>
                        <li>Connecteur des leaders</li>
                        <li>Créateur d'opportunités</li>
                        <li>Constructeur d'un développement durable</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4">
                <div class="identity-card">
                    <h3><i class="fas fa-heart"></i> Valeurs</h3>
                    <ul>
                        <li>Engagement</li>
                        <li>Equité</li>
                        <li>Solidarité</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Stats Section -->
<section class="stats-section py-5">
    <div class="container">
        <h2 class="section-title text-center mb-5">Chiffres clé</h2>
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
                    <p class="stat-label">Membres</p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="stat-card text-center">
                    <div class="stat-icon">
                        <i class="fas fa-map-marked-alt"></i>
                    </div>
                    <h3 class="stat-number">{{ isset($stats['regions']) ? $stats['regions'] : 0 }}</h3>
                    <p class="stat-label">Régions du Maroc</p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="stat-card text-center">
                    <div class="stat-icon">
                        <i class="fas fa-globe"></i>
                    </div>
                    <h3 class="stat-number">+ {{ isset($stats['countries']) ? $stats['countries'] : 0 }}</h3>
                    <p class="stat-label">Pays</p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="stat-card text-center">
                    <div class="stat-icon">
                        <i class="fas fa-handshake"></i>
                    </div>
                    <h3 class="stat-number">+ {{ isset($stats['partnerships']) ? $stats['partnerships'] : 0 }}</h3>
                    <p class="stat-label">Partenariats</p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="stat-card text-center">
                    <div class="stat-icon">
                        <i class="fas fa-building"></i>
                    </div>
                    <h3 class="stat-number">+ {{ isset($stats['business_circles']) ? $stats['business_circles'] : 0 }}</h3>
                    <p class="stat-label">Cercles d'affaires</p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="stat-card text-center">
                    <div class="stat-icon">
                        <i class="fas fa-calendar-alt"></i>
                    </div>
                    <h3 class="stat-number">+ {{ isset($stats['congress']) ? $stats['congress'] : 0 }}</h3>
                    <p class="stat-label">Congrès internationaux</p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="stat-card text-center">
                    <div class="stat-icon">
                        <i class="fas fa-wine-glass"></i>
                    </div>
                    <h3 class="stat-number">+ {{ isset($stats['networking_events']) ? $stats['networking_events'] : 0 }}</h3>
                    <p class="stat-label">Soirée networking</p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="stat-card text-center">
                    <div class="stat-icon">
                        <i class="fas fa-laptop"></i>
                    </div>
                    <h3 class="stat-number">{{ isset($stats['platforms']) ? $stats['platforms'] : 0 }}</h3>
                    <p class="stat-label">Plateformes digitales</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Premium Members Section -->
<section class="members-section py-5 bg-light">
    <div class="container">
        <h2 class="section-title text-center mb-5">Membres premium</h2>
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
        <h2 class="section-title text-center mb-5">Membres VIP</h2>
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
        <h2 class="section-title text-center mb-5">Témoignages</h2>
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
        <h2 class="section-title mb-4">Prêt à nous rejoindre?</h2>
        <p class="lead mb-4">Rejoignez le Club des Dirigeants et faites partie d'un réseau influent</p>
        <a href="{{ route('membership') }}" class="btn btn-primary btn-lg">REJOIGNEZ LE CDD</a>
    </div>
</section>
@endsection

