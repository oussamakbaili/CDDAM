@extends('layouts.app')

@section('title', __('pages.mycdd.title'))

@section('content')
<section class="page-header py-5" style="background: linear-gradient(135deg, var(--primary-color) 0%, #006a87 100%); color: white;">
    <div class="container text-center">
        <h1 class="display-4">{{ __('pages.mycdd.title') }}</h1>
        <p class="lead mt-3">{{ __('pages.mycdd.subtitle') }}</p>
    </div>
</section>

<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 mx-auto">
                <div class="card shadow-sm">
                    <div class="card-body text-center p-5">
                        <i class="fas fa-user-shield fa-3x text-primary mb-4"></i>
                        <h3 class="mb-4">{{ __('pages.mycdd.member_space') }}</h3>
                        <p class="lead mb-4">{{ __('pages.mycdd.description') }}</p>
                        <div class="alert alert-info">
                            <i class="fas fa-info-circle me-2"></i>
                            {{ __('pages.mycdd.info') }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection

