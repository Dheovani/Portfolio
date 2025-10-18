import React from 'react'
import ReactDOM from 'react-dom/client'
import { SelectProvider } from './components/utils/Select';
import App from './components/App';
import './main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SelectProvider>
      <App />
    </SelectProvider>
  </React.StrictMode>
);
