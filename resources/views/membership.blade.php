@extends('layouts.app')

@section('title', __('pages.membership.title'))

@section('content')
<section class="page-header py-5" style="background: linear-gradient(135deg, var(--primary-color) 0%, #006a87 100%); color: white;">
    <div class="container text-center">
        <h1 class="display-4">{{ __('pages.membership.title') }}</h1>
    </div>
</section>

<section class="py-5">
    <div class="container">
        <p class="lead text-center mb-5">{{ __('pages.membership.subtitle') }}</p>
    </div>
</section>
@endsection

