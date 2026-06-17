import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { MobileMenuContextProvider } from './context/MobileMenuContext.tsx'
import { CurrencyContextProvider } from './context/CurrencyContext.tsx'
import { FlagsContextProvider } from './context/FlagsContext.tsx'
import { SortContextProvider } from './context/TopSortContext.tsx'
import { ProductViewContextProvider } from './context/ProductViewContext.tsx'
BrowserRouter

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductViewContextProvider>
      <SortContextProvider>
        <MobileMenuContextProvider>
          <CurrencyContextProvider>
            <FlagsContextProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </FlagsContextProvider>
          </CurrencyContextProvider>
        </MobileMenuContextProvider>
      </SortContextProvider>
    </ProductViewContextProvider>
  </StrictMode>,
)
