import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { MobileMenuContextProvider } from './context/MobileMenuContext.tsx'
import { CurrencyContextProvider } from './context/CurrencyContext.tsx'
BrowserRouter

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MobileMenuContextProvider>
      <CurrencyContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CurrencyContextProvider>
    </MobileMenuContextProvider>
  </StrictMode>,
)
