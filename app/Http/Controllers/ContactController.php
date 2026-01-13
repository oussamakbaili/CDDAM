<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function index()
    {
        return view('contact.index');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Les données fournies sont invalides.',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $data = [
                'name' => $request->name,
                'email' => $request->email,
                'subject' => $request->subject,
                'messageText' => $request->message, // Renommé pour éviter conflit avec $message réservé dans les vues email
            ];

            // Envoyer l'email
            // Note: L'adresse "From" doit être contact@cddam.org (celle utilisée pour SMTP)
            // L'email de l'utilisateur est mis en "Reply-To" pour que les réponses lui soient envoyées
            Mail::send('emails.contact', $data, function ($message) use ($data) {
                $message->from(config('mail.from.address'), config('mail.from.name'))
                        ->replyTo($data['email'], $data['name'])
                        ->to('contact@cddam.org')
                        ->subject('Nouveau message de contact - CDDAM: ' . $data['subject']);
            });

            return response()->json([
                'message' => 'Votre message a été envoyé avec succès!'
            ], 200);

        } catch (\Exception $e) {
            // Logger l'erreur complète avec la stack trace
            \Log::error('Erreur lors de l\'envoi de l\'email de contact', [
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
                'trace' => $e->getTraceAsString(),
                'config' => [
                    'mail_mailer' => config('mail.default'),
                    'mail_host' => config('mail.mailers.smtp.host'),
                    'mail_port' => config('mail.mailers.smtp.port'),
                    'mail_encryption' => config('mail.mailers.smtp.encryption'),
                    'mail_username' => config('mail.mailers.smtp.username') ? '***configured***' : 'NOT SET',
                ]
            ]);
            
            // En mode debug, renvoyer plus de détails
            $errorMessage = config('app.debug') 
                ? 'Erreur: ' . $e->getMessage() . ' (Vérifiez les logs pour plus de détails)'
                : 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer plus tard.';
            
            return response()->json([
                'message' => $errorMessage,
                'error_details' => config('app.debug') ? [
                    'exception' => get_class($e),
                    'message' => $e->getMessage(),
                ] : null
            ], 500);
        }
    }
}