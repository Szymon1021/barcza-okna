import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationPL from './locales/pl/translation.json';
import translationDE from './locales/de/translation.json';
import brandsPL from './locales/pl/brands.json';
import brandsDE from './locales/de/brands.json';

const resources = {
  pl: {
    translation: { ...translationPL, ...brandsPL }
  },
  de: {
    translation: { ...translationDE, ...brandsDE }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pl',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
