<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;

class SetLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Vérifier si la langue est passée en paramètre
        if ($request->has('lang')) {
            $lang = $request->get('lang');
            if (in_array($lang, ['fr', 'en', 'ar'])) {
                App::setLocale($lang);
                Session::put('locale', $lang);
            }
        } elseif (Session::has('locale')) {
            // Utiliser la langue de la session
            App::setLocale(Session::get('locale'));
        } elseif ($request->hasHeader('Accept-Language')) {
            // Détecter la langue depuis le header Accept-Language
            $locale = $request->getPreferredLanguage(['fr', 'en', 'ar']);
            if ($locale) {
                App::setLocale($locale);
            }
        }

        return $next($request);
    }
}

