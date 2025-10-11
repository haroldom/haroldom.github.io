import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18next from 'i18next';
import { initReactI18next } from "react-i18next"
import es from './languages/es/es.json'
import en from './languages/en/en.json'


i18next.use(initReactI18next).init({
  lng: "es",
  interpolation: { escapeValue: false },
  resources: {
    es: {
      translation: es,
    },
    en: {
      translation: en,
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
