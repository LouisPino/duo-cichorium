import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Configuration } from "@react-md/layout";
// the ConfigurationProps are just all the props for the providers
// joined together. The only difference is that onResize has been
// renamed to onAppResize for the AppSizeListener


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Configuration>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ Configuration >
  </React.StrictMode>
);