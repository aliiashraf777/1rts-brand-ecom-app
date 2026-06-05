import { shipToFlagsData } from "@/data/navigationData";
import type { IshipToFlagsItem } from "@/types/menuTypes";
import { createContext, useContext, useMemo, useReducer, type PropsWithChildren } from "react";

// initial state
type FlagsInitialStateTy = {
  selectedCountry: IshipToFlagsItem,
  isFlagOpen: boolean,
}

export const flagsInitialState: FlagsInitialStateTy = {
  selectedCountry: shipToFlagsData[0],
  isFlagOpen: false,
}

// actions types union
type FlagsActionsU =
  | { type: 'FLAG_TOGGLE' }
  | { type: 'FLAG_OPEN' }
  | { type: 'FLAG_CLOSE' }
  | { type: 'FLAG_SET', payload: IshipToFlagsItem }


// reducer
const flagsReducerFn = (
  state: FlagsInitialStateTy,
  action: FlagsActionsU,
) => {
  switch (action.type) {
    case 'FLAG_TOGGLE':
      return { ...state, isFlagOpen: !state.isFlagOpen }

    case 'FLAG_OPEN':
      return { ...state, isFlagOpen: true }

    case 'FLAG_CLOSE':
      return { ...state, isFlagOpen: false }

    case 'FLAG_SET':
      return {
        ...state,
        selectedCountry: action.payload,
        isFlagOpen: false,
      }

    default:
      return state;
  }
}


// flag context value
type FlagsContextValueTy = FlagsInitialStateTy & {
  flagToggle: () => void
  flagOpen: () => void
  flagClose: () => void
  flagSet: (item: IshipToFlagsItem) => void
}

export const FlagsContext = createContext<FlagsContextValueTy | undefined>(undefined)


// context provider
export const FlagsContextProvider = ({ children }: PropsWithChildren) => {

  const [state, dispatch] = useReducer(flagsReducerFn, flagsInitialState);

  const flagDispatchActions = useMemo(
    () => ({
      flagToggle: () => dispatch({ type: 'FLAG_TOGGLE' }),
      flagOpen: () => dispatch({ type: 'FLAG_OPEN' }),
      flagClose: () => dispatch({ type: 'FLAG_CLOSE' }),
      flagSet: (item: IshipToFlagsItem) => dispatch({
        type: 'FLAG_SET', payload: item
      })
    }),
    []
  )

  const value = useMemo(
    () => ({
      ...state,
      ...flagDispatchActions
    }),
    [state, flagDispatchActions]
  )

  return (
    <FlagsContext.Provider value={value}>
      {children}
    </FlagsContext.Provider>
  )
}

// custom flags context hook
export const useFlagsContext = () => {

  const context = useContext(FlagsContext);

  if (!context) {
    throw new Error(`useFlagsCotnext must use inside FlagsContextProvider`)
  }

  return context
}