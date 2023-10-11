import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from "react-dom/client"
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
