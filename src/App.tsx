import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import React, { lazy, Suspense, useEffect } from 'react';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import i18next from './i18n';
import { useProfileStore } from './state/profileStore';
import { extractLangFromPath, LANG_META, localizePath, NON_DEFAULT_LANGS } from './utils/localeRouting';

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

// Robust lazy loader: retries on chunk fetch hiccups and self-heals on Vercel deployments
function lazyWithRetry<T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) {
  return lazy(async () => {
    try {
      return await factory();
    } catch (error) {
      console.warn('Dynamic chunk import failed, retrying...', error);
      try {
        await new Promise((resolve) => setTimeout(resolve, 600));
        return await factory();
      } catch (retryError) {
        const reloadKey = 'chunk_reload_' + window.location.pathname;
        if (!sessionStorage.getItem(reloadKey)) {
          sessionStorage.setItem(reloadKey, 'true');
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
// 🧪 PROTOTYPE — design review page for the "Things You're Worried About!" section.
// TEMPORARY: remove this import + the /prototype/worries route below once the
// section is implemented on the real listing pages (or if the prototype is rejected).
const WorriesPrototypePage = lazyWithRetry(() => import('./pages/WorriesPrototypePage'));

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
      {/* 🧪 PROTOTYPE — design review for the worries section. Remove after review. */}
      <Route path="/prototype/worries" element={<WorriesPrototypePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

/**
 * Moroccan Mate — standalone multilingual Finder website.
 * Supports default English routes (/) and localized routes (/fr/*, /es/*, /de/*, /ar/*).
 */
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
    <Suspense fallback={<div className="min-h-screen bg-[#FAF7F2]" />}>
      <ScrollToTop />
      <LanguageRouteSync />
      <Routes>
        {NON_DEFAULT_LANGS.map((code) => (
          <Route key={code} path={`/${code}/*`} element={<AppRoutes />} />
        ))}
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </Suspense>
  );
}