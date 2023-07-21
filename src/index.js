import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { CradsContextProvider } from "./Context/CradsContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <CradsContextProvider>
    <App />
  </CradsContextProvider>
  // </React.StrictMode>
);


