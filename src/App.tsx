import { Routes, Route, useNavigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

// Finder screens (and the place data they carry) load on demand —
// the homepage stays light. The data files themselves are untouched.
const FinderPage = lazy(() => import('./components/finder/FinderPage'));
const ExplorePage = lazy(() => import('./components/finder/ExplorePage'));
const ThingsListingPage = lazy(() => import('./pages/ThingsListingPage'));
const PlaceListingPage = lazy(() => import('./pages/PlaceListingPage'));

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
        <Route path="/finder/:param1/:param2?" element={<ExplorePage onClose={() => navigate('/')} />} />
        <Route path="/finder" element={<FinderPage />} />
        <Route path="/place/:city/:category/:slug" element={<PlaceListingPage />} />
        <Route path="/things/:city/:slug?" element={<ThingsListingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}