import './bootstrap';
import '../css/app.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './i18n/config'; // Initialiser i18n
import App from './components/App';

const container = document.getElementById('app');

if (container) {
    const root = createRoot(container);

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
} else {
    console.error('Container #app not found');
}
