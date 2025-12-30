@extends('layouts.app')

@section('title', 'Article')

@section('content')
<section class="page-header py-5" style="background: linear-gradient(135deg, var(--primary-color) 0%, #006a87 100%); color: white;">
    <div class="container text-center">
        <h1 class="display-4">Article</h1>
    </div>
</section>

<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 mx-auto">
                <article>
                    <h2>Article: {{ $slug }}</h2>
                    <p>Contenu de l'article...</p>
                </article>
            </div>
        </div>
    </div>
</section>
@endsection

