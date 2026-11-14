import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import de from './locales/de.json';
import ar from './locales/ar.json';
import { extractLangFromPath, isSupportedLang, LANG_META, type AppLanguage } from './utils/localeRouting';

function detectInitialLanguage(): AppLanguage {
  if (typeof window !== 'undefined') {
    const fromPath = extractLangFromPath(window.location.pathname).lang;
    if (fromPath !== 'en') return fromPath;
    // Only use root "/" as 'en' (avoid overriding English root URL with another language)
    if (window.location.pathname === '/' || window.location.pathname.startsWith('/finder') || window.location.pathname.startsWith('/place') || window.location.pathname.startsWith('/things')) {
      return 'en';
    }
    try {
      const stored = localStorage.getItem('morocco-profile-storage');
      if (stored) {
        const parsed = JSON.parse(stored);
        const saved = parsed?.state?.language;
        if (isSupportedLang(saved)) return saved;
      }
    } catch {
      // ignore storage errors
    }
  }
  return 'en';
}

const initialLang = detectInitialLanguage();

if (typeof document !== 'undefined') {
  document.documentElement.lang = initialLang;
  document.documentElement.dir = LANG_META[initialLang].dir;
}

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      es: { translation: es },
      de: { translation: de },
      ar: { translation: ar },
    },
    lng: initialLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18next;
