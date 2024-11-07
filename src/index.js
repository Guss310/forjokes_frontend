import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Auth0Provider 
    domain="dev-0la81q7j30zvsjmx.us.auth0.com" 
    clientId='4UXqebYq4bnDfqGkOu1fJ8atqoD5DwJX' 
    authorizationParams= {{redirectUri:window.location.origin}}
    audience="https://dev-0la81q7j30zvsjmx.us.auth0.com/api/v2/"
    cacheLocation='localstorage'
    >

      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
