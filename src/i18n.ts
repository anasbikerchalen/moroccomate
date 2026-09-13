import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import fr from './locales/fr.json';
import ar from './locales/ar.json';

// Get saved language from localStorage
let savedLang = 'en';
try {
  const stored = localStorage.getItem('morocco-profile-storage');
  if (stored) {
    const parsed = JSON.parse(stored);
    savedLang = parsed?.state?.language || 'en';
  }
} catch (e) {
  // ignore
}

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      ar: { translation: ar },
    },
    lng: savedLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18next;
