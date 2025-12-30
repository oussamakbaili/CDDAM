# Club des Dirigeants des Associations Maroc - CDDAM

Site web du Club des Dirigeants des Associations Maroc développé avec **Laravel 10** (Backend) et **React 18** (Frontend).

## Technologies utilisées

- **Backend**: Laravel 10
- **Frontend**: React 18 + React Router
- **Build Tool**: Vite
- **CSS Framework**: Bootstrap 5.3
- **Icons**: Font Awesome 6.4

## Installation

### 1. Installer les dépendances PHP (Composer)
```bash
composer install
```

### 2. Installer les dépendances JavaScript (NPM)
```bash
npm install
```

### 3. Configuration de l'environnement
```bash
cp .env.example .env
php artisan key:generate
```

### 4. Configurer la base de données dans le fichier `.env`

### 5. Lancer les migrations (si nécessaire)
```bash
php artisan migrate
```

## Démarrage du projet

### En développement

Vous devez lancer **deux serveurs** :

1. **Serveur Laravel** (Backend):
```bash
php artisan serve
```

2. **Serveur Vite** (Frontend React):
```bash
npm run dev
```

Le site sera accessible à l'adresse: **http://localhost:8000**

### En production

1. Compiler les assets React:
```bash
npm run build
```

2. Démarrer le serveur Laravel:
```bash
php artisan serve
```

## Structure du projet

### Backend (Laravel)
- `app/Http/Controllers/` - Contrôleurs API
- `routes/api.php` - Routes API
- `routes/web.php` - Route SPA (toutes les routes pointent vers React)

### Frontend (React)
- `resources/js/app.jsx` - Point d'entrée React
- `resources/js/components/` - Composants React
- `resources/js/components/pages/` - Pages React
- `resources/css/app.css` - Styles CSS personnalisés

## API Routes

- `POST /api/contact` - Envoyer un message de contact

## Thème

Le site utilise les couleurs suivantes:
- Primaire: #0081A4
- Secondaire: #A03E3F

## Pages disponibles

- Accueil (`/`)
- À Propos (`/a-propos`)
- Activités (`/activites`)
- Packs Adhésions (`/packs-adhesions`)
- MyCDDAM (`/mycdda`)
- Partenaires (`/partenaires`)
- Témoignages (`/temoignages`)
- Blog (`/blog`)
- Contact (`/contact`)

## Notes importantes

- Le projet utilise React Router pour la navigation côté client (SPA)
- Toutes les routes web pointent vers le layout Blade qui charge React
- Les appels API se font via Axios configuré dans `resources/js/bootstrap.js`

