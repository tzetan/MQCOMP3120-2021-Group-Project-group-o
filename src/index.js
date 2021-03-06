import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import AuthConfig from "./auth_config.json";

ReactDOM.render(
    <Auth0Provider
        domain={AuthConfig.domain}
        clientId={AuthConfig.clientId}
        redirectUri={window.location.origin}
        audience={AuthConfig.audience}
        scope={AuthConfig.scope}
    >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
