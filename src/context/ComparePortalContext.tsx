import { createContext, useContext, useMemo, useReducer, type PropsWithChildren } from "react"

export type CompareInitialStateTy = {
    isComparePortalOpen: boolean
}

// 1. initial state
export const compareInitialState: CompareInitialStateTy = {
    isComparePortalOpen: false
}

// 2. types union
type ComparePortalActionsU =
    | { type: 'COMPARE_TOGGLE' }
    | { type: 'COMPARE_OPEN' }
    | { type: 'COMPARE_CLOSE' }

// 3. reducerFn
const compareReducerFn = (
    state: CompareInitialStateTy,
    action: ComparePortalActionsU,
) => {
    switch (action.type) {
        case 'COMPARE_TOGGLE':
            return { ...state, isComparePortalOpen: !state.isComparePortalOpen }
        case 'COMPARE_OPEN':
            return { ...state, isComparePortalOpen: true }
        case 'COMPARE_CLOSE':
            return { ...state, isComparePortalOpen: false }
        default:
            return state;
    }
}

// 3. context value ty
type ComparePortalContextValueTy = CompareInitialStateTy & {
    compareToggle: () => void,
    compareOpen: () => void,
    compareClose: () => void,
}

export const ComparePortalContext =
    createContext<ComparePortalContextValueTy | undefined>(undefined)


// 4. context provider
export const ComparePortalContextProvider = ({ children }: PropsWithChildren) => {

    const [state, dispatch] = useReducer(compareReducerFn, compareInitialState);

    const compareDispatchActions = useMemo(
        () => ({
            compareToggle: () => dispatch({ type: 'COMPARE_TOGGLE' }),
            compareOpen: () => dispatch({ type: 'COMPARE_OPEN' }),
            compareClose: () => dispatch({ type: 'COMPARE_CLOSE' }),
        }), []
    )

    const value = useMemo(
        () => ({
            ...state,
            ...compareDispatchActions
        }), [state, compareDispatchActions]
    )

    return (
        <ComparePortalContext.Provider value={value}>
            {children}
        </ComparePortalContext.Provider>
    )
}

// 5. context custom hook
export const useComparePortalContext = () => {
    const context = useContext(ComparePortalContext);

    if (!context) {
        throw new Error(`useComparePortalContext must be inside ComparePortalContextProvider`)
    }

    return context;
}