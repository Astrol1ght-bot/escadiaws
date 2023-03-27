import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './container/App';

import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";                                         
        

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
);
