# Configuration SMTP pour CDDAM

## Comment trouver les paramètres SMTP dans Hostinger

### Méthode 1 : Via le panneau Hostinger

1. **Connectez-vous à votre panneau Hostinger** (hpanel.hostinger.com)
2. **Allez dans "Emails"** (menu de gauche)
3. **Cliquez sur "Email Accounts"** ou "Gérer les emails"
4. **Si vous avez déjà un email `contact@cddam.org`** :
   - Cliquez sur "Gérer" ou "Paramètres"
   - Les paramètres SMTP seront affichés

### Méthode 2 : Paramètres SMTP par défaut Hostinger

Si vous utilisez un email professionnel Hostinger (`contact@cddam.org`), les paramètres sont généralement :

```
Serveur SMTP : smtp.hostinger.com
Port : 587 (TLS) ou 465 (SSL)
Encryption : TLS (pour port 587) ou SSL (pour port 465)
Username : contact@cddam.org (votre adresse email complète)
Password : Le mot de passe de votre compte email
```

## Configuration dans le fichier .env

Ajoutez ces lignes dans votre fichier `.env` sur le serveur :

```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.hostinger.com
MAIL_PORT=587
MAIL_USERNAME=contact@cddam.org
MAIL_PASSWORD=votre_mot_de_passe_email
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=contact@cddam.org
MAIL_FROM_NAME="CDDAM"
```

## Alternatives SMTP

### Option 1 : Gmail SMTP (si vous préférez utiliser Gmail)

```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=votre-email@gmail.com
MAIL_PASSWORD=votre_mot_de_passe_app_gmail
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=contact@cddam.org
MAIL_FROM_NAME="CDDAM"
```

**Note** : Pour Gmail, vous devez utiliser un "Mot de passe d'application" (pas votre mot de passe normal).

### Option 2 : Mailgun (Service d'email professionnel)

```env
MAIL_MAILER=mailgun
MAILGUN_DOMAIN=votre-domaine.mailgun.org
MAILGUN_SECRET=votre-cle-secrete
MAIL_FROM_ADDRESS=contact@cddam.org
MAIL_FROM_NAME="CDDAM"
```

### Option 3 : Sendmail (si disponible sur le serveur)

```env
MAIL_MAILER=sendmail
MAIL_FROM_ADDRESS=contact@cddam.org
MAIL_FROM_NAME="CDDAM"
```

## Vérification de la configuration

Après avoir configuré le `.env`, sur le serveur :

1. **Videz le cache de configuration** :
```bash
php artisan config:clear
php artisan cache:clear
```

2. **Testez l'envoi d'email** :
   - Utilisez le formulaire de contact sur le site
   - Vérifiez les logs si ça ne fonctionne pas : `storage/logs/laravel.log`

## Dépannage

### Erreur : "MailManager::getConfig(): Argument #1 ($name) must be of type string, null given"

**Solution** : Assurez-vous que `MAIL_MAILER` est défini dans votre `.env` :
```env
MAIL_MAILER=smtp
```

### Erreur : "Connection timeout" ou "Could not authenticate"

**Solutions** :
1. Vérifiez que le port est correct (587 pour TLS, 465 pour SSL)
2. Vérifiez que l'encryption correspond au port (TLS pour 587, SSL pour 465)
3. Vérifiez que le username est l'email complet (contact@cddam.org)
4. Vérifiez que le mot de passe est correct
5. Vérifiez que le serveur SMTP autorise les connexions depuis votre serveur

### Erreur : "Authentication failed"

**Solutions** :
1. Vérifiez que vous utilisez le bon mot de passe
2. Pour Gmail, utilisez un "Mot de passe d'application"
3. Vérifiez que l'email existe bien dans Hostinger

## Support Hostinger

Si vous avez des problèmes avec les paramètres SMTP Hostinger :
1. Contactez le support Hostinger
2. Demandez les paramètres SMTP pour votre domaine `cddam.org`
3. Vérifiez la documentation Hostinger : https://www.hostinger.com/tutorials/how-to-use-smtp


