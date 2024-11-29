import React from 'react'
import ReactDOM from 'react-dom/client'
// Import CSS files before components
import './index.css'
import './App.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)