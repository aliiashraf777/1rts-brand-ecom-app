import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MobileMenuContextProvider } from './context/MobileMenuContext.tsx'
import { CurrencyContextProvider } from './context/CurrencyContext.tsx'
import { FlagsContextProvider } from './context/FlagsContext.tsx'
import { SortContextProvider } from './context/TopSortContext.tsx'
import { ProductViewContextProvider } from './context/ProductViewContext.tsx';
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { CartPortalContextProvider } from './context/CartPortalContext.tsx'
import { FavsPortalContextProvider } from './context/FavsPortalContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FavsPortalContextProvider>
      <CartPortalContextProvider>
        <Provider store={store}>
          <ProductViewContextProvider>
            <SortContextProvider>
              <MobileMenuContextProvider>
                <CurrencyContextProvider>
                  <FlagsContextProvider>
                    {/* <BrowserRouter> */}
                    <App />
                    {/* </BrowserRouter> */}
                  </FlagsContextProvider>
                </CurrencyContextProvider>
              </MobileMenuContextProvider>
            </SortContextProvider>
          </ProductViewContextProvider>
        </Provider>
      </CartPortalContextProvider>
    </FavsPortalContextProvider>
  </StrictMode>,
)
