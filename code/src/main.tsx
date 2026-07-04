import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConsentProvider } from './consent/ConsentContext';
import App from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConsentProvider>
        <App />
      </ConsentProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
