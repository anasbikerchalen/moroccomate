import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import React, { lazy, Suspense, useEffect } from 'react';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import i18next from './i18n';
import { useProfileStore } from './state/profileStore';
import { extractLangFromPath, LANG_META, localizePath, NON_DEFAULT_LANGS } from './utils/localeRouting';
import { CookieConsentBanner } from './components/ui/CookieConsentBanner';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

/**
 * Keeps i18next, document <html lang/dir>, and profileStore synchronized
 * with the active URL language prefix (/fr, /es, /de, /ar, or default en).
 */
function LanguageRouteSync() {
  const { pathname } = useLocation();
  const setStoreLanguage = useProfileStore((s) => s.setLanguage);

  useEffect(() => {
    const { lang } = extractLangFromPath(pathname);
    if (i18next.language !== lang) {
      i18next.changeLanguage(lang);
    }
    if (useProfileStore.getState().language !== lang) {
      setStoreLanguage(lang);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = LANG_META[lang].dir;
    }
  }, [pathname, setStoreLanguage]);

  return null;
}

// Robust lazy loader: retries on chunk fetch hiccups and self-heals on dev restarts / deployments
function lazyWithRetry<T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) {
  return lazy(async () => {
    const reloadKey = 'chunk_reload_' + window.location.pathname;
    try {
      const mod = await factory();
      try {
        sessionStorage.removeItem(reloadKey);
      } catch {
        // ignore storage errors
      }
      return mod;
    } catch (error) {
      console.warn('Dynamic chunk import failed, retrying...', error);
      try {
        await new Promise((resolve) => setTimeout(resolve, 600));
        const mod = await factory();
        try {
          sessionStorage.removeItem(reloadKey);
        } catch {
          // ignore storage errors
        }
        return mod;
      } catch (retryError) {
        try {
          const lastReload = Number(sessionStorage.getItem(reloadKey) || '0');
          if (!lastReload || Date.now() - lastReload > 10000) {
            sessionStorage.setItem(reloadKey, String(Date.now()));
            window.location.reload();
          }
        } catch {
          window.location.reload();
        }
        throw retryError;
      }
    }
  });
}

// Finder screens load on demand — keeping the homepage bundle light for Vercel & Web Vitals
const ExplorePage = lazyWithRetry(() => import('./components/finder/ExplorePage'));
const ThingsListingPage = lazyWithRetry(() => import('./pages/ThingsListingPage'));
const PlaceListingPage = lazyWithRetry(() => import('./pages/PlaceListingPage'));
const PlaceMenuPage = lazyWithRetry(() => import('./pages/PlaceMenuPage'));
const NearMePage = lazyWithRetry(() => import('./components/finder/NearMePage'));
const BlogIndexPage = lazyWithRetry(() => import('./pages/BlogIndexPage'));
const BlogArticlePage = lazyWithRetry(() => import('./pages/BlogArticlePage'));
const AboutPage = lazyWithRetry(() => import('./pages/AboutPage'));
const ContactPage = lazyWithRetry(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazyWithRetry(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazyWithRetry(() => import('./pages/TermsPage'));

function AppRoutes() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { lang } = extractLangFromPath(pathname);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route index element={<HomePage />} />
      <Route
        path="/finder/:param1/:param2?/:param3?"
        element={<ExplorePage onClose={() => navigate(localizePath('/', lang))} />}
      />
      <Route path="/finder" element={<Navigate to={localizePath('/', lang)} replace />} />
      {/* Near Me Discovery routes (must precede generic /things/:city/:slug? and /place/...) */}
      <Route path="/things/:city/near-me" element={<NearMePage />} />
      <Route path="/things/near-me" element={<NearMePage />} />
      <Route path="/:category/:city/near-me" element={<NearMePage />} />
      <Route path="/:category/near-me" element={<NearMePage />} />
      <Route path="/near-me/:category/:city" element={<NearMePage />} />
      <Route path="/near-me/:category" element={<NearMePage />} />
      <Route path="/near-me" element={<NearMePage />} />
      <Route path="/place/:city/food/:slug/menu" element={<PlaceMenuPage />} />
      <Route path="/place/:city/eat/:slug/menu" element={<PlaceMenuPage />} />
      <Route path="/place/:city/:category/:slug" element={<PlaceListingPage />} />
      <Route path="/place/:city/:categoryOrSlug" element={<PlaceListingPage />} />
      <Route path="/things/:city/:slug?" element={<ThingsListingPage />} />
      <Route path="/blog" element={<BlogIndexPage />} />
      <Route path="/blog/:slug" element={<BlogArticlePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/privacy-policy" element={<Navigate to={localizePath('/privacy', lang)} replace />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/terms-of-use" element={<Navigate to={localizePath('/terms', lang)} replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

/**
 * Moroccan Mate — standalone multilingual Finder website.
 * Supports default English routes (/) and localized routes (/fr/*, /es/*, /de/*, /ar/*).
 */
function BrandedSplashFallback() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF7F2]">
      <div className="mate-splash flex flex-col items-center">
        <img
          src="/logo192.png"
          alt="Moroccan Mate"
          className="w-[52px] h-[52px] mb-[14px] object-contain"
        />
        <span className="text-[13px] font-bold text-[#173042] tracking-[0.14em] uppercase">
          Moroccan Mate
        </span>
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.includes('/near-me')) {
      try {
        sessionStorage.setItem('mm_last_visited_page', location.pathname + location.search);
      } catch {
        // ignore storage quota issues
      }
    }
  }, [location.pathname, location.search]);

  return (
    <Suspense fallback={<BrandedSplashFallback />}>
      <ScrollToTop />
      <LanguageRouteSync />
      <Routes>
        {NON_DEFAULT_LANGS.map((code) => (
          <Route key={code} path={`/${code}/*`} element={<AppRoutes />} />
        ))}
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
      <CookieConsentBanner />
    </Suspense>
  );
}