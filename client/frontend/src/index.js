import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { Auth0Provider } from '@auth0/auth0-react';



const REACT_APP_AUTH0_DOMAIN = "dev-10l5luah.us.auth0.com";
const REACT_APP_AUTH0_CLIENTID = "gV1MsADAKWE9TgWaBOJXPcdewdPG6NRK"

const domain = REACT_APP_AUTH0_DOMAIN;
const clientId = REACT_APP_AUTH0_CLIENTID;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain = {domain}
      clientId = {clientId}
      redirectUri = {window.location.origin}>
    <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);