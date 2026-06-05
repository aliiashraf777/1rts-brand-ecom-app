import { langCurrencyData } from "@/data/navigationData";
import type { IlangCurrencyItem } from "@/types/menuTypes";
import { createContext, useContext, useMemo, useReducer, type PropsWithChildren } from "react";


// state
type CurrencyInitialStateTy = {
  isCurrencyOpen: boolean,
  selectedCurrency: IlangCurrencyItem,
}

export const currencyInitialState: CurrencyInitialStateTy = {
  isCurrencyOpen: false,
  selectedCurrency: langCurrencyData[0],
}

// Actions union
type CurrencyActionsU =
  | { type: 'CURRENCY_TOGGLE' }
  | { type: 'CURRENCY_OPEN' }
  | { type: 'CURRENCY_CLOSE' }
  | { type: 'CURRENCY_SET', payload: IlangCurrencyItem }


// reducer
const currencyReducerFn = (
  state: CurrencyInitialStateTy,
  action: CurrencyActionsU
) => {
  switch (action.type) {

    case 'CURRENCY_TOGGLE':
      return { ...state, isCurrencyOpen: !state.isCurrencyOpen }

    case 'CURRENCY_OPEN':
      return { ...state, isCurrencyOpen: true }

    case 'CURRENCY_CLOSE':
      return { ...state, isCurrencyOpen: false }

    case 'CURRENCY_SET':
      return {
        ...state,
        selectedCurrency: action.payload,
        isCurrencyOpen: false,
      }

    default:
      return state
  }
}


// context value
type CurrencyContextValueTy = CurrencyInitialStateTy & {
  currencyToggle: () => void
  currencyOpen: () => void
  currencyClose: () => void
  currencySet: (item: IlangCurrencyItem) => void
}

export const CurrencyContext = createContext<CurrencyContextValueTy | undefined>(undefined);


// context provider
export const CurrencyContextProvider = ({ children }: PropsWithChildren) => {

  const [state, dispatch] = useReducer(currencyReducerFn, currencyInitialState)

  const currencyDispatchActions = useMemo(
    () => ({
      currencyToggle: () => dispatch({ type: 'CURRENCY_TOGGLE' }),
      currencyOpen: () => dispatch({ type: 'CURRENCY_OPEN' }),
      currencyClose: () => dispatch({ type: 'CURRENCY_CLOSE' }),
      currencySet: (item: IlangCurrencyItem) => dispatch({
        type: 'CURRENCY_SET', payload: item
      }),
    }),
    []
  )

  const value = useMemo(
    () => ({
      ...state,
      ...currencyDispatchActions
    }),
    [state, currencyDispatchActions]
  )

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  )
}

// custom currency hook
export const useCurrencyContext = () => {
  const context = useContext(CurrencyContext);

  if (!context) {
    throw new Error(`useCurrencyContxt must be used inside CurrencyContextProvider`)
  }

  return context;
}