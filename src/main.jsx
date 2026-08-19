import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/*
  main.jsx — Application entry point.
  
  StrictMode is kept on during development — it intentionally
  double-invokes certain lifecycle methods to surface bugs early.
  It has no effect in production builds.
*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
