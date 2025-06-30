import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <HashRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </HashRouter>
    </HelmetProvider>
  </StrictMode>
);
