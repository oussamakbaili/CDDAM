# Guide de Configuration Email - CDDAM

Ce guide vous explique étape par étape comment configurer l'envoi d'emails pour le site CDDAM.

## 📧 Configuration Email avec Gmail

### Étape 1 : Activer l'authentification à deux facteurs (2FA) sur Gmail

1. Connectez-vous à votre compte Gmail
2. Allez dans **Paramètres Google** → **Sécurité**
3. Activez la **Validation en deux étapes** si ce n'est pas déjà fait
4. C'est obligatoire pour créer un mot de passe d'application

### Étape 2 : Créer un mot de passe d'application Gmail

**⚠️ IMPORTANT :** Vous devez utiliser un **mot de passe d'application**, pas votre mot de passe Gmail normal !

1. Allez sur : https://myaccount.google.com/apppasswords
2. Connectez-vous avec votre compte Gmail
3. Sélectionnez **"Application"** → **"Autre (nom personnalisé)"**
4. Entrez un nom (ex: "CDDAM Website")
5. Cliquez sur **"Générer"**
6. **Copiez le mot de passe généré** (16 caractères, espaces inclus)
   - Exemple : `abcd efgh ijkl mnop`
   - Vous ne pourrez plus le voir après !

### Étape 3 : Configurer le fichier .env

Ouvrez le fichier `.env` à la racine de votre projet et modifiez les lignes suivantes :

---

## 📝 Détail de chaque ligne de configuration

### 1. `MAIL_MAILER=smtp`

**Qu'est-ce que c'est ?**
- Définit le protocole d'envoi d'emails
- `smtp` = Simple Mail Transfer Protocol (standard pour l'envoi d'emails)

**Que faire ?**
- Laissez cette valeur telle quelle : `smtp`
- Ne changez pas cette ligne

---

### 2. `MAIL_HOST=smtp.gmail.com`

**Qu'est-ce que c'est ?**
- L'adresse du serveur SMTP de Gmail
- C'est le serveur qui va envoyer vos emails

**Que faire ?**
- Laissez cette valeur telle quelle : `smtp.gmail.com`
- Ne changez pas cette ligne

---

### 3. `MAIL_PORT=587`

**Qu'est-ce que c'est ?**
- Le port de communication avec le serveur SMTP
- `587` = Port standard pour SMTP avec TLS (recommandé)
- Alternative : `465` pour SSL (moins courant)

**Que faire ?**
- Laissez cette valeur : `587`
- Si ça ne fonctionne pas, essayez `465` et changez `MAIL_ENCRYPTION` en `ssl`

---

### 4. `MAIL_USERNAME=votre-email@gmail.com`

**Qu'est-ce que c'est ?**
- Votre adresse email Gmail complète
- C'est l'email qui sera utilisé pour envoyer les messages

**Que faire ?**
- Remplacez `votre-email@gmail.com` par votre vraie adresse Gmail
- Exemple : `MAIL_USERNAME=contact.aiais@gmail.com`
- ⚠️ Utilisez l'email complet avec @gmail.com

**Exemple :**
```env
MAIL_USERNAME=contact.aiais@gmail.com
```

---

### 5. `MAIL_PASSWORD=votre-mot-de-passe-app`

**Qu'est-ce que c'est ?**
- Le mot de passe d'application Gmail que vous avez créé à l'Étape 2
- ⚠️ **PAS votre mot de passe Gmail normal !**

**Que faire ?**
- Remplacez `votre-mot-de-passe-app` par le mot de passe d'application de 16 caractères
- Supprimez les espaces du mot de passe généré
- Exemple : Si Gmail vous donne `abcd efgh ijkl mnop`, utilisez `abcdefghijklmnop`

**Exemple :**
```env
MAIL_PASSWORD=abcdefghijklmnop
```

**⚠️ SÉCURITÉ :**
- Ne partagez jamais ce mot de passe
- Ne le commitez pas dans Git (il est déjà dans .gitignore)
- Si vous le perdez, créez-en un nouveau

---

### 6. `MAIL_ENCRYPTION=tls`

**Qu'est-ce que c'est ?**
- Type de chiffrement pour sécuriser la connexion
- `tls` = Transport Layer Security (recommandé avec le port 587)
- Alternative : `ssl` (pour le port 465)

**Que faire ?**
- Laissez `tls` si vous utilisez le port 587
- Si vous utilisez le port 465, changez en `ssl`

**Exemple :**
```env
MAIL_ENCRYPTION=tls
```

---

### 7. `MAIL_FROM_ADDRESS=contact.aiais@gmail.com`

**Qu'est-ce que c'est ?**
- L'adresse email qui apparaîtra comme expéditeur
- C'est l'email que les destinataires verront dans "De :"

**Que faire ?**
- Remplacez par l'email que vous voulez afficher comme expéditeur
- Doit être le même que `MAIL_USERNAME` ou un alias autorisé
- Exemple : `MAIL_FROM_ADDRESS=contact.aiais@gmail.com`

**Exemple :**
```env
MAIL_FROM_ADDRESS=contact.aiais@gmail.com
```

---

### 8. `MAIL_FROM_NAME="${APP_NAME}"`

**Qu'est-ce que c'est ?**
- Le nom qui apparaîtra comme expéditeur
- `"${APP_NAME}"` utilise la valeur de `APP_NAME` dans votre .env

**Que faire ?**
- Option 1 : Laissez `"${APP_NAME}"` (utilisera le nom de votre app)
- Option 2 : Mettez un nom personnalisé, ex: `"CDDAM - Club des Dirigeants des Associations Maroc"`

**Exemple :**
```env
MAIL_FROM_NAME="CDDAM - Club des Dirigeants des Associations Maroc"
```

---

## ✅ Configuration complète exemple

Voici un exemple de configuration complète dans votre `.env` :

```env
# Configuration Email
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=contact.aiais@gmail.com
MAIL_PASSWORD=abcdefghijklmnop
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=contact.aiais@gmail.com
MAIL_FROM_NAME="CDDAM - Club des Dirigeants des Associations Maroc"
```

---

## 🔧 Vérification de la configuration

### 1. Vérifier que le fichier .env existe
```bash
# Dans le terminal, à la racine du projet
ls -la .env
```

### 2. Vérifier que les valeurs sont correctes
```bash
# Afficher les variables MAIL (sans afficher les valeurs sensibles)
php artisan tinker
>>> config('mail.mailers.smtp.host')
>>> exit
```

### 3. Tester l'envoi d'email
```bash
# Tester avec une commande Laravel
php artisan tinker
>>> Mail::raw('Test email', function($message) {
    $message->to('votre-email-test@gmail.com')
            ->subject('Test CDDAM');
});
```

---

## 🚨 Problèmes courants et solutions

### Erreur : "Authentication failed"
**Cause :** Mauvais mot de passe d'application
**Solution :** 
- Vérifiez que vous utilisez le mot de passe d'application (pas votre mot de passe Gmail)
- Vérifiez qu'il n'y a pas d'espaces dans le mot de passe
- Créez un nouveau mot de passe d'application

### Erreur : "Connection timeout"
**Cause :** Problème de port ou de firewall
**Solution :**
- Essayez le port 465 avec `MAIL_ENCRYPTION=ssl`
- Vérifiez que votre serveur peut se connecter à smtp.gmail.com

### Erreur : "Could not authenticate"
**Cause :** Authentification à deux facteurs non activée
**Solution :**
- Activez la validation en deux étapes sur votre compte Gmail
- Créez un nouveau mot de passe d'application

### Les emails partent mais arrivent en spam
**Solution :**
- Utilisez un email professionnel (pas un compte personnel)
- Configurez SPF et DKIM pour votre domaine (si vous utilisez votre propre domaine)
- Évitez d'envoyer trop d'emails rapidement

---

## 📋 Checklist de configuration

- [ ] Authentification à deux facteurs activée sur Gmail
- [ ] Mot de passe d'application créé et copié
- [ ] Fichier `.env` modifié avec les bonnes valeurs
- [ ] `MAIL_USERNAME` = votre email Gmail complet
- [ ] `MAIL_PASSWORD` = mot de passe d'application (16 caractères, sans espaces)
- [ ] `MAIL_FROM_ADDRESS` = email d'expéditeur
- [ ] `MAIL_FROM_NAME` = nom de l'expéditeur
- [ ] Test d'envoi réussi

---

## 🔐 Sécurité

**Important :**
- Le fichier `.env` est déjà dans `.gitignore` (ne sera pas commité)
- Ne partagez jamais votre mot de passe d'application
- Si vous suspectez une fuite, créez un nouveau mot de passe d'application
- Utilisez un compte Gmail dédié pour la production (recommandé)

---

## 📞 Support

Si vous rencontrez des problèmes :
1. Vérifiez que toutes les étapes sont suivies
2. Consultez les logs Laravel : `storage/logs/laravel.log`
3. Testez avec un email de test simple
4. Vérifiez les paramètres de sécurité de votre compte Gmail

---

**Dernière mise à jour :** Janvier 2025

