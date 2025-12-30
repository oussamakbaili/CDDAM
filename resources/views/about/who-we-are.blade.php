@extends('layouts.app')

@section('title', 'Qui sommes-nous')

@section('content')
<section class="page-header py-5" style="background: linear-gradient(135deg, var(--primary-color) 0%, #006a87 100%); color: white;">
    <div class="container text-center">
        <h1 class="display-4">Qui sommes-nous</h1>
    </div>
</section>

<section class="py-5">
    <div class="container">
        <div class="row mb-5">
            <div class="col-lg-8 mx-auto">
                <h2 class="section-title">Notre identité</h2>
                <div class="card mb-4">
                    <div class="card-body">
                        <h4><i class="fas fa-gavel" style="color: var(--primary-color);"></i> Forme juridique</h4>
                        <p>Association à but non lucratif offrant des services à la communauté des dirigeants.</p>
                    </div>
                </div>
                <div class="card mb-4">
                    <div class="card-body">
                        <h4><i class="fas fa-question-circle" style="color: var(--primary-color);"></i> Pourquoi le CDDAM?</h4>
                        <p>Le Club des Dirigeants des Associations Maroc offre un réseau professionnel de qualité, sécurisé et efficace, disposant d'une plateforme innovante et d'un annuaire d'experts spécialisés dans le secteur associatif. Nous offrons des outils, des ressources et des opportunités de networking exclusivement dédiés aux dirigeants d'associations.</p>
                    </div>
                </div>
                <div class="card mb-4">
                    <div class="card-body">
                        <h4><i class="fas fa-map-marked-alt" style="color: var(--primary-color);"></i> Périmètre d'activités</h4>
                        <ul>
                            <li>Made in Morocco.</li>
                            <li>Présence Régionale, Nationale et Internationale</li>
                            <li>Représentation de tous les secteurs d'activités.</li>
                        </ul>
                    </div>
                </div>
                <div class="card mb-4">
                    <div class="card-body">
                        <h4><i class="fas fa-compass" style="color: var(--primary-color);"></i> Orientations</h4>
                        <p>Aucune vocation politique ou religieuse.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="identity-card">
                    <h3><i class="fas fa-eye"></i> Vision</h3>
                    <p>Être la référence incontournable en matière de développement et de renforcement des capacités du secteur associatif marocain, en créant un écosystème d'excellence qui favorise l'innovation, la collaboration et l'impact social durable.</p>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="identity-card">
                    <h3><i class="fas fa-bullseye"></i> Mission</h3>
                    <ul>
                        <li>Rassembler et connecter les dirigeants d'associations</li>
                        <li>Renforcer les capacités organisationnelles et managériales</li>
                        <li>Créer des opportunités de partenariats stratégiques</li>
                        <li>Promouvoir l'excellence et l'innovation dans le secteur associatif</li>
                        <li>Contribuer au développement durable et à l'impact social</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4 mb-4">
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
@endsection

