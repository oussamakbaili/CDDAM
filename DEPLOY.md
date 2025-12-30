# Guide de Déploiement en Production - CDDAM

## 🚀 Déploiement sur le Serveur de Production

### Étape 1 : Se connecter au serveur

```bash
ssh u507670352@uk-fast-web1475
cd CDDAM
```

### Étape 2 : Récupérer les dernières modifications depuis GitHub

```bash
# Configurer le tracking si nécessaire
git branch --set-upstream-to=origin/main main

# Récupérer les dernières modifications
git fetch origin
git pull origin main
```

### Étape 3 : Installer/Mettre à jour les dépendances

```bash
# Installer les dépendances PHP (si nécessaire)
composer install --no-dev --optimize-autoloader

# Installer les dépendances Node.js (si nécessaire)
npm install

# OU si npm install échoue, supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
```

### Étape 4 : Build des assets React pour la production

```bash
# Build des assets React (IMPORTANT pour que les modifications soient visibles)
npm run build
```

Cette commande va :
- Compiler tous les fichiers React/JSX
- Minifier le CSS et JavaScript
- Générer les fichiers dans `public/build/`

### Étape 5 : Configurer l'environnement de production

```bash
# Copier le fichier .env.example si .env n'existe pas
cp .env.example .env

# Générer la clé d'application
php artisan key:generate

# Configurer les permissions
chmod -R 755 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
```

### Étape 6 : Optimiser Laravel pour la production

```bash
# Cache de la configuration
php artisan config:cache

# Cache des routes
php artisan route:cache

# Cache des vues
php artisan view:cache

# Optimiser l'autoloader
composer dump-autoload --optimize
```

### Étape 7 : Vérifier que tout fonctionne

```bash
# Vérifier les permissions
ls -la public/build/

# Vérifier que les fichiers sont bien générés
ls -la public/build/assets/
```

### Étape 8 : Redémarrer les services (si nécessaire)

```bash
# Si tu utilises PHP-FPM
sudo systemctl restart php-fpm

# Ou redémarrer Apache/Nginx
sudo systemctl restart apache2
# OU
sudo systemctl restart nginx
```

## 📝 Checklist de Déploiement

- [ ] `git pull origin main` - Récupérer les dernières modifications
- [ ] `composer install --no-dev` - Installer les dépendances PHP
- [ ] `npm install` - Installer les dépendances Node.js
- [ ] `npm run build` - **CRITIQUE : Build des assets React**
- [ ] `php artisan config:cache` - Cache de la configuration
- [ ] `php artisan route:cache` - Cache des routes
- [ ] Vérifier les permissions des dossiers `storage` et `bootstrap/cache`
- [ ] Vérifier que `public/build/assets/` contient les nouveaux fichiers
- [ ] Tester le site en production

## ⚠️ Problèmes Courants

### Les modifications ne s'affichent pas en production

**Solution :** Tu dois absolument faire `npm run build` sur le serveur après chaque `git pull` pour que les modifications React soient compilées.

### Erreur "Vite manifest not found"

**Solution :** 
```bash
npm run build
```

### Les assets ne se chargent pas

**Solution :** Vérifier que le dossier `public/build/` existe et contient les fichiers :
```bash
ls -la public/build/assets/
```

### Erreur de permissions

**Solution :**
```bash
chmod -R 755 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
```

## 🔄 Script de Déploiement Automatique

Tu peux créer un script `deploy.sh` sur le serveur :

```bash
#!/bin/bash
echo "🚀 Déploiement en cours..."

# Récupérer les modifications
git pull origin main

# Installer les dépendances
composer install --no-dev --optimize-autoloader
npm install

# Build des assets
npm run build

# Optimiser Laravel
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "✅ Déploiement terminé !"
```

Rendre le script exécutable :
```bash
chmod +x deploy.sh
```

L'utiliser :
```bash
./deploy.sh
```

