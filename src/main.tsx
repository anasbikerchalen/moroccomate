import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import App from './App.tsx';
import './index.css';
import * as i18n from './i18n';
import HubErrorBoundary from './components/ui/HubErrorBoundary.tsx';

declare global {
  interface Window {
    gtag?: (command: 'config', measurementId: string, params: { page_path: string }) => void;
  }
}

function PageViewTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.gtag?.('config', 'G-VRGKPQYHYC', { page_path: pathname });
  }, [pathname]);

  return null;
}

// Auto-reload on Vite module preload failure (e.g. stale chunk or dev server restart)
window.addEventListener('vite:preloadError', () => {
  window.location.reload();
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n.default}>
      <HelmetProvider>
        <BrowserRouter>
          <PageViewTracker />
          <HubErrorBoundary fallbackName="Moroccan Mate">
            <App />
          </HubErrorBoundary>
        </BrowserRouter>
      </HelmetProvider>
    </I18nextProvider>
  </React.StrictMode>,
);
