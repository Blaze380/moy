import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AboutPage from './AboutPage';

import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AboutPage />
    </StrictMode>
);