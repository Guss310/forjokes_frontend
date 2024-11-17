// This is the initial code for App.js. It is used to display the routes of the application.

// This dependencies are used in this file.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';


// This use Component Composition to render the App component.
// The BrowserRouter is used to wrap the App component. This is used to enable the routing in the application.
// The Auth0Provider is used to wrap the BrowserRouter component. This is used to enable the authentication in the application.
// The App component is used to display the routes of the application.

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
