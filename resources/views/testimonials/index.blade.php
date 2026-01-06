@extends('layouts.app')

@section('title', __('pages.testimonials.title'))

@section('content')
<section class="page-header py-5" style="background: linear-gradient(135deg, var(--primary-color) 0%, #006a87 100%); color: white;">
    <div class="container text-center">
        <h1 class="display-4">{{ __('pages.testimonials.title') }}</h1>
    </div>
</section>

<section class="testimonials-section py-5">
    <div class="container">
        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="testimonial-card">
                    <div class="testimonial-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p class="testimonial-content">"Cooperation, partenariat et solidarité sont l'essentiel de toute réussite, d'où l'importance de se constituer en groupe et s'ouvrir individuellement vers les membres du groupe et de façon solidaire vers l'extérieur du groupe. En toute sincérité depuis ma présence au sein du club des dirigeants je retrouve mes forces et je me retrouve moi même. Je fais bcp de progrès. Merci beaucoup Ssi Driss pour avoir pense a créer ce club, et merci au club qui nous réuni."</p>
                    <div class="testimonial-author">
                        <strong>Abdelhak KASSABI</strong>
                        <p>DIRECTEUR CHEZ URBAMENA</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="testimonial-card">
                    <div class="testimonial-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p class="testimonial-content">"Il ne m'étais jamais venu a l'esprit qu'un jour je serai parmi un groupe CDD un groupe inédit. Bon continuation Ssi Driss."</p>
                    <div class="testimonial-author">
                        <strong>Ahmed BOUTRIG</strong>
                        <p>DEPUTY DIRECTOR GENERAL CHEZ SGI TEELCOM</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="testimonial-card">
                    <div class="testimonial-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p class="testimonial-content">"Merci d'avoir mis au point ce concept au Maroc Ssi Driss, vous y avez crû et vous y êtes engagé. Seuls les vrais leaders connaissent Ia valeur du réseau. Tous ceux qui ont réussi témoignent de l'importance du réseautage. Un sage a dit un jour que chacun d'entre nous est Ia moyenne des 5 personnes qui l'entourent, je rajouterai autant bien les choisir, et ce qui se fait au Club des dirigeants."</p>
                    <div class="testimonial-author">
                        <strong>Mohammed Achraf ALAOUI TAHIRI</strong>
                        <p>DIRECTEUR DES OPERATIONS CHEZ SCASCO ASSURANCES</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection

