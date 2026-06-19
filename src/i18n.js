import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from 'languages/es/es.json';
import en from 'languages/en/en.json';

const savedLanguage = localStorage.getItem('language');

i18next.use(initReactI18next).init({
  lng: savedLanguage || 'es',
  interpolation: { escapeValue: false },
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
});

export default i18next;
