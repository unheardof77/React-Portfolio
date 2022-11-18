import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
