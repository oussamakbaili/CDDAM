@extends('layouts.app')

@section('title', 'Les Instances')

@section('content')
<section class="page-header py-5" style="background: linear-gradient(135deg, var(--primary-color) 0%, #006a87 100%); color: white;">
    <div class="container text-center">
        <h1 class="display-4">Les Instances</h1>
    </div>
</section>

<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-md-6 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h3 style="color: var(--primary-color);"><i class="fas fa-map-marker-alt"></i> Représentants Régionaux</h3>
                        <p>Nos représentants dans les différentes régions du Maroc</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h3 style="color: var(--primary-color);"><i class="fas fa-flag"></i> Représentants Nationaux</h3>
                        <p>Nos représentants nationaux et le bureau exécutif</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h3 style="color: var(--primary-color);"><i class="fas fa-globe"></i> Représentants Internationaux</h3>
                        <p>Nos représentants à l'international</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h3 style="color: var(--primary-color);"><i class="fas fa-clipboard-list"></i> Commissions : Membres</h3>
                        <p>Les membres de nos différentes commissions</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection

