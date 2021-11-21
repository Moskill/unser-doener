import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);