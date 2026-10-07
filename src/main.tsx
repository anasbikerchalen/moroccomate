import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import App from './App.tsx';
import './index.css';
import * as i18n from './i18n';
import HubErrorBoundary from './components/ui/HubErrorBoundary.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n.default}>
      <HelmetProvider>
        <BrowserRouter>
          <HubErrorBoundary fallbackName="Moroccan Mate">
            <App />
          </HubErrorBoundary>
        </BrowserRouter>
      </HelmetProvider>
    </I18nextProvider>
  </React.StrictMode>,
);