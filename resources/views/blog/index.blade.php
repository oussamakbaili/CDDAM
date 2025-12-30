@extends('layouts.app')

@section('title', 'Blog')

@section('content')
<section class="page-header py-5" style="background: linear-gradient(135deg, var(--primary-color) 0%, #006a87 100%); color: white;">
    <div class="container text-center">
        <h1 class="display-4">Actualités</h1>
    </div>
</section>

<section class="py-5">
    <div class="container">
        @php
            $posts = isset($posts) && is_array($posts) ? $posts : [];
        @endphp
        <div class="row">
            @if(!empty($posts))
                @foreach($posts as $post)
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">{{ isset($post['title']) ? $post['title'] : '' }}</h5>
                            <p class="card-text">{{ isset($post['excerpt']) ? $post['excerpt'] : '' }}</p>
                            <p class="text-muted small">
                                <i class="fas fa-user"></i> {{ isset($post['author']) ? $post['author'] : '' }} | 
                                <i class="fas fa-calendar"></i> {{ isset($post['date']) ? $post['date'] : '' }}
                            </p>
                            <a href="{{ route('blog.show', isset($post['slug']) ? $post['slug'] : '') }}" class="btn btn-primary">Lire la suite</a>
                        </div>
                    </div>
                </div>
                @endforeach
            @endif
        </div>
    </div>
</section>
@endsection

