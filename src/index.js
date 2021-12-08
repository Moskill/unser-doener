import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import AuthProvider from './components/userArea/context/AuthContext'

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <AuthProvider>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </AuthProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
)
