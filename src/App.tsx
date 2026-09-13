import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FinderPage from './components/finder/FinderPage';
import ExplorePage from './components/finder/ExplorePage';

/**
 * Morocco Finder — standalone Finder-only website.
 * Routes:
 *   /                          → Homepage (city + categories, user-editable)
 *   /finder                    → Finder categories + quiz flow
 *   /finder/:city/:category    → Results
 */
export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/finder/:param1/:param2?" element={<ExplorePage onClose={() => navigate('/')} />} />
      <Route path="/finder" element={<FinderPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}