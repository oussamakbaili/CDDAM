#!/bin/bash

echo "🚀 Déploiement CDDAM en production..."
echo "======================================"

# Couleurs pour les messages
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Étape 1: Récupérer les modifications
echo -e "${YELLOW}📥 Récupération des modifications depuis GitHub...${NC}"
git pull origin main
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erreur lors du git pull${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Modifications récupérées${NC}"

# Étape 2: Installer les dépendances PHP
echo -e "${YELLOW}📦 Installation des dépendances PHP...${NC}"
composer install --no-dev --optimize-autoloader
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erreur lors de l'installation des dépendances PHP${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Dépendances PHP installées${NC}"

# Étape 3: Installer les dépendances Node.js
echo -e "${YELLOW}📦 Installation des dépendances Node.js...${NC}"
npm install
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erreur lors de l'installation des dépendances Node.js${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Dépendances Node.js installées${NC}"

# Étape 4: Build des assets React (CRITIQUE)
echo -e "${YELLOW}🔨 Build des assets React pour la production...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erreur lors du build des assets${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Assets React compilés${NC}"

# Étape 5: Optimiser Laravel
echo -e "${YELLOW}⚡ Optimisation de Laravel...${NC}"
php artisan config:cache
php artisan route:cache
php artisan view:cache
echo -e "${GREEN}✅ Laravel optimisé${NC}"

# Étape 6: Vérifier les permissions
echo -e "${YELLOW}🔐 Vérification des permissions...${NC}"
chmod -R 755 storage bootstrap/cache 2>/dev/null
echo -e "${GREEN}✅ Permissions vérifiées${NC}"

# Étape 7: Vérifier que les assets sont générés
echo -e "${YELLOW}📁 Vérification des assets générés...${NC}"
if [ -d "public/build/assets" ]; then
    echo -e "${GREEN}✅ Assets trouvés dans public/build/assets/${NC}"
    ls -lh public/build/assets/ | head -5
else
    echo -e "${RED}❌ Le dossier public/build/assets/ n'existe pas !${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}======================================"
echo -e "✅ Déploiement terminé avec succès !"
echo -e "======================================${NC}"
echo ""
echo "🌐 Vérifie ton site en production pour confirmer que tout fonctionne."

