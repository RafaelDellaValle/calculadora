import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './paginas/App.jsx'
import Calculadora from './paginas/calculadora.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calculadora/>
    <App />
  </StrictMode>,
)
