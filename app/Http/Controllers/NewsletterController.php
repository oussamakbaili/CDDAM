<?php

namespace App\Http\Controllers;

use App\Models\NewsletterSubscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class NewsletterController extends Controller
{
    public function subscribe(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Veuillez fournir une adresse email valide.',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $email = strtolower(trim($request->email));
            $ipAddress = $request->ip();

            // Vérifier si l'email existe déjà
            $subscriber = NewsletterSubscriber::where('email', $email)->first();

            if ($subscriber) {
                if ($subscriber->is_active) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Cet email est déjà inscrit à notre newsletter.'
                    ], 409);
                } else {
                    // Réactiver l'abonnement
                    $subscriber->update([
                        'is_active' => true,
                        'subscribed_at' => now(),
                        'unsubscribed_at' => null,
                        'ip_address' => $ipAddress,
                    ]);

                    // Envoyer un email de confirmation
                    $this->sendConfirmationEmail($subscriber->email);

                    return response()->json([
                        'success' => true,
                        'message' => 'Votre abonnement à la newsletter a été réactivé avec succès!'
                    ], 200);
                }
            }

            // Créer un nouvel abonné
            $subscriber = NewsletterSubscriber::create([
                'email' => $email,
                'is_active' => true,
                'subscribed_at' => now(),
                'ip_address' => $ipAddress,
            ]);

            // Envoyer un email de confirmation
            $this->sendConfirmationEmail($subscriber->email);

            return response()->json([
                'success' => true,
                'message' => 'Merci! Vous êtes maintenant abonné à notre newsletter.'
            ], 201);

        } catch (\Exception $e) {
            Log::error('Erreur lors de l\'inscription à la newsletter: ' . $e->getMessage());
            
            return response()->json([
                'success' => false,
                'message' => 'Une erreur est survenue lors de votre inscription. Veuillez réessayer plus tard.'
            ], 500);
        }
    }

    public function unsubscribe(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Veuillez fournir une adresse email valide.'
            ], 422);
        }

        try {
            $email = strtolower(trim($request->email));
            $subscriber = NewsletterSubscriber::where('email', $email)->first();

            if (!$subscriber) {
                return response()->json([
                    'success' => false,
                    'message' => 'Cet email n\'est pas inscrit à notre newsletter.'
                ], 404);
            }

            if (!$subscriber->is_active) {
                return response()->json([
                    'success' => false,
                    'message' => 'Vous êtes déjà désabonné de notre newsletter.'
                ], 409);
            }

            $subscriber->update([
                'is_active' => false,
                'unsubscribed_at' => now(),
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Vous avez été désabonné de notre newsletter avec succès.'
            ], 200);

        } catch (\Exception $e) {
            Log::error('Erreur lors du désabonnement de la newsletter: ' . $e->getMessage());
            
            return response()->json([
                'success' => false,
                'message' => 'Une erreur est survenue. Veuillez réessayer plus tard.'
            ], 500);
        }
    }

    private function sendConfirmationEmail($email)
    {
        try {
            Mail::send('emails.newsletter-confirmation', ['email' => $email], function ($mail) use ($email) {
                $mail->to($email)
                     ->subject('Confirmation d\'abonnement à la newsletter CDDAM');
            });
        } catch (\Exception $e) {
            // Log l'erreur mais ne bloque pas l'inscription
            Log::warning('Impossible d\'envoyer l\'email de confirmation newsletter: ' . $e->getMessage());
        }
    }
}

