import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa los tipos para tus archivos de traducción
import esTranslation from '../locales/es/translation.json';
import enTranslation from '../locales/en/translation.json';

// Obtén el idioma guardado en el localStorage o utiliza 'es' por defecto
const savedLanguage = localStorage.getItem('language') || 'es';

// Configuración de i18next
i18n
  .use(initReactI18next) // Conectar react-i18next con i18next
  .init({
    lng: savedLanguage, // Establecer el idioma inicial desde localStorage
    fallbackLng: 'es', // Idioma de respaldo en caso de que la traducción no esté disponible
    resources: { // Configuración de los recursos de traducción
      es: {
        translation: esTranslation, // Archivo de traducción en español
      },
      en: {
        translation: enTranslation, // Archivo de traducción en inglés
      },
    },
    interpolation: {
      escapeValue: false, // Evitar escapar las cadenas traducidas
    },
  });

export default i18n;