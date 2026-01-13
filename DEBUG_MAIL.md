# Guide de débogage - Problème d'envoi d'email

## Étapes pour diagnostiquer le problème

### 1. Vérifier les logs Laravel

Sur le serveur, consultez les logs pour voir l'erreur exacte :

```bash
tail -f storage/logs/laravel.log
```

Ou pour voir les dernières erreurs :

```bash
tail -n 100 storage/logs/laravel.log | grep -i mail
```

### 2. Tester la configuration mail

Utilisez la commande de test que nous avons créée :

```bash
php artisan mail:test contact@cddam.org
```

Cette commande va :
- Afficher votre configuration mail actuelle
- Tenter d'envoyer un email de test
- Afficher l'erreur exacte si ça échoue

### 3. Vérifier le fichier .env

Assurez-vous que toutes les variables sont correctement définies dans `.env` :

```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.hostinger.com
MAIL_PORT=587
MAIL_USERNAME=contact@cddam.org
MAIL_PASSWORD=votre_mot_de_passe
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=contact@cddam.org
MAIL_FROM_NAME="CDDAM"
```

**Points importants :**
- Pas d'espaces autour du `=` dans le `.env`
- Pas de guillemets autour des valeurs (sauf pour `MAIL_FROM_NAME`)
- Le mot de passe doit être le mot de passe de l'email, pas celui du compte Hostinger

### 4. Vider le cache après modification du .env

Après chaque modification du `.env`, exécutez :

```bash
php artisan config:clear
php artisan cache:clear
```

### 5. Tester avec le driver "log" (pour isoler le problème)

Si vous voulez tester si le problème vient de SMTP ou d'autre chose, changez temporairement :

```env
MAIL_MAILER=log
```

Puis testez. Si ça fonctionne avec "log", le problème vient de la configuration SMTP.

### 6. Erreurs SMTP courantes et solutions

#### Erreur : "Connection timeout" ou "Connection refused"

**Causes possibles :**
- Le port est incorrect (essayez 465 avec SSL au lieu de 587 avec TLS)
- Le serveur SMTP bloque les connexions depuis votre serveur
- Le firewall bloque le port

**Solutions :**
1. Essayez le port 465 avec SSL :
   ```env
   MAIL_PORT=465
   MAIL_ENCRYPTION=ssl
   ```

2. Vérifiez que le serveur peut se connecter à smtp.hostinger.com :
   ```bash
   telnet smtp.hostinger.com 587
   # ou
   telnet smtp.hostinger.com 465
   ```

#### Erreur : "Authentication failed" ou "Invalid credentials"

**Causes possibles :**
- Le username ou password est incorrect
- Le username doit être l'email complet (contact@cddam.org)
- Le mot de passe contient des caractères spéciaux qui doivent être échappés

**Solutions :**
1. Vérifiez que vous utilisez l'email complet comme username
2. Si le mot de passe contient des caractères spéciaux, essayez de le mettre entre guillemets dans le `.env` :
   ```env
   MAIL_PASSWORD="votre_mot_de_passe_avec_caractères_spéciaux"
   ```

#### Erreur : "Could not instantiate mailer"

**Causes possibles :**
- La configuration mail n'est pas chargée
- Le fichier `config/mail.php` est manquant ou corrompu

**Solutions :**
1. Vérifiez que `config/mail.php` existe
2. Videz le cache :
   ```bash
   php artisan config:clear
   php artisan cache:clear
   ```

### 7. Vérifier les paramètres SMTP Hostinger

1. Connectez-vous à Hostinger
2. Allez dans "Emails" → "Email Accounts"
3. Vérifiez que l'email `contact@cddam.org` existe
4. Vérifiez les paramètres SMTP affichés
5. Comparez avec votre configuration dans `.env`

### 8. Alternative : Utiliser Sendmail (si disponible)

Si SMTP ne fonctionne pas, vous pouvez essayer Sendmail :

```env
MAIL_MAILER=sendmail
MAIL_FROM_ADDRESS=contact@cddam.org
MAIL_FROM_NAME="CDDAM"
```

**Note :** Sendmail doit être installé et configuré sur le serveur.

### 9. Vérifier les permissions

Assurez-vous que Laravel peut écrire dans les logs :

```bash
chmod -R 775 storage/logs
chown -R www-data:www-data storage/logs
```

### 10. Contacter le support Hostinger

Si rien ne fonctionne :
1. Contactez le support Hostinger
2. Demandez les paramètres SMTP exacts pour votre domaine
3. Demandez s'il y a des restrictions sur l'envoi d'emails depuis votre serveur

## Commandes utiles

```bash
# Tester la configuration mail
php artisan mail:test contact@cddam.org

# Voir la configuration actuelle
php artisan config:show mail

# Vider tous les caches
php artisan optimize:clear

# Voir les logs en temps réel
tail -f storage/logs/laravel.log
```

## Mode debug temporaire

Pour voir plus de détails sur les erreurs, activez temporairement le mode debug dans `.env` :

```env
APP_DEBUG=true
```

**⚠️ Important :** Désactivez-le après le débogage pour des raisons de sécurité !

