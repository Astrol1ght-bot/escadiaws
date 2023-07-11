import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './container/App';

import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';

import 'primeflex/primeflex.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
