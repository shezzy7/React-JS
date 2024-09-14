import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Activity2 from "./Activity2.jsx";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Activity2 />
  </StrictMode>,
)
