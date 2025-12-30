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
                'message' => $request->message,
            ];

            // Envoyer l'email
            Mail::send('emails.contact', $data, function ($mail) use ($data) {
                $mail->from($data['email'], $data['name'])
                     ->to('contact.aiais@gmail.com')
                     ->subject('Nouveau message de contact - CDDAM: ' . $data['subject']);
            });

            return response()->json([
                'message' => 'Votre message a été envoyé avec succès!'
            ], 200);

        } catch (\Exception $e) {
            \Log::error('Erreur lors de l\'envoi de l\'email de contact: ' . $e->getMessage());
            
            return response()->json([
                'message' => 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer plus tard.'
            ], 500);
        }
    }
}