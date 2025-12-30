import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import des traductions
import fr from './locales/fr.json';
import ar from './locales/ar.json';
import en from './locales/en.json';

i18n
  // Détecter la langue du navigateur
  .use(LanguageDetector)
  // Passer l'instance i18n à react-i18next
  .use(initReactI18next)
  // Initialiser i18next
  .init({
    // Langue par défaut
    fallbackLng: 'fr',
    
    // Langues disponibles
    supportedLngs: ['fr', 'ar', 'en'],
    
    // Ressources de traduction
    resources: {
      fr: {
        translation: fr
      },
      ar: {
        translation: ar
      },
      en: {
        translation: en
      }
    },
    
    // Options de détection
    detection: {
      // Ordre et sources de détection
      order: ['localStorage', 'navigator', 'htmlTag'],
      
      // Clés de cache
      caches: ['localStorage'],
      
      // Clé de stockage
      lookupLocalStorage: 'i18nextLng',
    },
    
    // Options d'interpolation
    interpolation: {
      escapeValue: false // React échappe déjà les valeurs
    },
    
    // Options de réact
    react: {
      useSuspense: false
    }
  });

export default i18n;

