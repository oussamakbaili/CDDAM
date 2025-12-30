@extends('layouts.app')

@section('title', 'MyCDDAM')

@section('content')
<section class="page-header py-5" style="background: linear-gradient(135deg, var(--primary-color) 0%, #006a87 100%); color: white;">
    <div class="container text-center">
        <h1 class="display-4">MyCDDAM</h1>
        <p class="lead mt-3">Espace membre réservé aux dirigeants d'associations</p>
    </div>
</section>

<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 mx-auto">
                <div class="card shadow-sm">
                    <div class="card-body text-center p-5">
                        <i class="fas fa-user-shield fa-3x text-primary mb-4"></i>
                        <h3 class="mb-4">Espace Membre MyCDDAM</h3>
                        <p class="lead mb-4">Accédez à votre espace personnel pour gérer votre profil, consulter les événements exclusifs, accéder aux ressources et réseauter avec les autres membres du Club des Dirigeants des Associations Maroc.</p>
                        <div class="alert alert-info">
                            <i class="fas fa-info-circle me-2"></i>
                            Cette section est réservée aux membres actifs du CDDAM. Connectez-vous pour accéder à votre espace.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection

