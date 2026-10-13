import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

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
const FinderPage = lazyWithRetry(() => import('./components/finder/FinderPage'));
const ExplorePage = lazyWithRetry(() => import('./components/finder/ExplorePage'));
const ThingsListingPage = lazyWithRetry(() => import('./pages/ThingsListingPage'));
const PlaceListingPage = lazyWithRetry(() => import('./pages/PlaceListingPage'));

/**
 * Moroccan Mate — standalone Finder website.
 * Routes:
 *   /                          → Homepage (city + categories, user-editable)
 *   /finder                    → Finder categories + quiz flow
 *   /finder/:city/:category    → Results
 *   /place/:city/:category/:slug → Individual place page (name-based URL)
 *   /things/:city/:slug        → Things To Do listing page
 *   *                          → 404 "Page not found"
 */
export default function App() {
  const navigate = useNavigate();

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF7F2]" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/finder/:param1/:param2?/:param3?" element={<ExplorePage onClose={() => navigate('/')} />} />
        <Route path="/finder" element={<FinderPage />} />
        <Route path="/place/:city/:category/:slug" element={<PlaceListingPage />} />
        <Route path="/place/:city/:categoryOrSlug" element={<PlaceListingPage />} />
        <Route path="/things/:city/:slug?" element={<ThingsListingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}