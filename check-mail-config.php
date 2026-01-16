<?php

/**
 * Script pour vérifier la configuration mail
 * Usage: php check-mail-config.php
 */

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

echo "=== Vérification de la configuration mail ===\n\n";

// Vérifier les variables d'environnement
echo "Variables d'environnement (.env):\n";
echo "MAIL_MAILER: " . (env('MAIL_MAILER') ?: 'NON DÉFINI') . "\n";
echo "MAIL_HOST: " . (env('MAIL_HOST') ?: 'NON DÉFINI') . "\n";
echo "MAIL_PORT: " . (env('MAIL_PORT') ?: 'NON DÉFINI') . "\n";
echo "MAIL_USERNAME: " . (env('MAIL_USERNAME') ? '***configured***' : 'NON DÉFINI') . "\n";
echo "MAIL_PASSWORD: " . (env('MAIL_PASSWORD') ? '***configured***' : 'NON DÉFINI') . "\n";
echo "MAIL_ENCRYPTION: " . (env('MAIL_ENCRYPTION') ?: 'NON DÉFINI') . "\n";
echo "MAIL_FROM_ADDRESS: " . (env('MAIL_FROM_ADDRESS') ?: 'NON DÉFINI') . "\n";
echo "MAIL_FROM_NAME: " . (env('MAIL_FROM_NAME') ?: 'NON DÉFINI') . "\n\n";

// Vérifier la configuration Laravel
echo "Configuration Laravel (config/mail.php):\n";
echo "mail.default: " . config('mail.default') . "\n";
echo "mail.mailers.smtp.host: " . config('mail.mailers.smtp.host') . "\n";
echo "mail.mailers.smtp.port: " . config('mail.mailers.smtp.port') . "\n";
echo "mail.mailers.smtp.encryption: " . config('mail.mailers.smtp.encryption') . "\n";
echo "mail.mailers.smtp.username: " . (config('mail.mailers.smtp.username') ? '***configured***' : 'NON DÉFINI') . "\n";
echo "mail.from.address: " . config('mail.from.address') . "\n";
echo "mail.from.name: " . config('mail.from.name') . "\n\n";

// Vérifications
$errors = [];

if (!env('MAIL_MAILER')) {
    $errors[] = "❌ MAIL_MAILER n'est pas défini dans .env";
} else {
    echo "✓ MAIL_MAILER est défini\n";
}

if (!env('MAIL_HOST')) {
    $errors[] = "❌ MAIL_HOST n'est pas défini dans .env";
} else {
    echo "✓ MAIL_HOST est défini\n";
}

if (!env('MAIL_USERNAME')) {
    $errors[] = "❌ MAIL_USERNAME n'est pas défini dans .env";
} else {
    echo "✓ MAIL_USERNAME est défini\n";
}

if (!env('MAIL_PASSWORD')) {
    $errors[] = "❌ MAIL_PASSWORD n'est pas défini dans .env";
} else {
    echo "✓ MAIL_PASSWORD est défini\n";
}

if (empty($errors)) {
    echo "\n✅ Toutes les variables mail sont configurées!\n";
} else {
    echo "\n❌ Problèmes détectés:\n";
    foreach ($errors as $error) {
        echo "  $error\n";
    }
    echo "\nVérifiez votre fichier .env et assurez-vous que toutes les variables MAIL_* sont définies.\n";
}


