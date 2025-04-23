import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import FAQPage from './FAQPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FAQPage />
  </StrictMode>
);