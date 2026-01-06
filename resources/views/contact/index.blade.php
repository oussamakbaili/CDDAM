@extends('layouts.app')

@section('title', __('pages.contact.title'))

@section('content')
<section class="page-header py-5" style="background: linear-gradient(135deg, var(--primary-color) 0%, #006a87 100%); color: white;">
    <div class="container text-center">
        <h1 class="display-4">{{ __('pages.contact.title') }}</h1>
    </div>
</section>

<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-md-6 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h3 style="color: var(--primary-color);">{{ __('pages.contact.contact_info') }}</h3>
                        <ul class="contact-list">
                            <li><i class="fas fa-map-marker-alt"></i> {{ __('pages.contact.address') }}</li>
                            <li><i class="fas fa-phone"></i> {{ __('pages.contact.phone') }}</li>
                            <li><i class="fas fa-envelope"></i> {{ __('pages.contact.email') }}</li>
                            <li><i class="fas fa-clock"></i> {{ __('pages.contact.hours') }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h3 style="color: var(--primary-color);">{{ __('pages.contact.send_message') }}</h3>
                        @if(session('success'))
                        <div class="alert alert-success">
                            {{ __('pages.contact.success') }}
                        </div>
                        @endif
                        <form method="POST" action="{{ route('contact.store') }}">
                            @csrf
                            <div class="mb-3">
                                <label for="name" class="form-label">{{ __('pages.contact.name') }}</label>
                                <input type="text" class="form-control" id="name" name="name" required>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">{{ __('pages.contact.email') }}</label>
                                <input type="email" class="form-control" id="email" name="email" required>
                            </div>
                            <div class="mb-3">
                                <label for="subject" class="form-label">{{ __('pages.contact.subject') }}</label>
                                <input type="text" class="form-control" id="subject" name="subject" required>
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">{{ __('pages.contact.message') }}</label>
                                <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">{{ __('pages.contact.send') }}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection

