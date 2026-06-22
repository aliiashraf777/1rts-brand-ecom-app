import { createContext, useContext, useMemo, useReducer, type PropsWithChildren } from "react"

export type FavsInitialStateTy = {
    isFavsPortalOpen: boolean,
}

const favsInitialState: FavsInitialStateTy = {
    isFavsPortalOpen: false,
}

type FavsPortalActionsU =
    | { type: 'FAVS_TOGGLE' }
    | { type: 'FAVS_OPEN' }
    | { type: 'FAVS_CLOSE' }


const favsReducerFn = (
    state: FavsInitialStateTy,
    action: FavsPortalActionsU,
) => {
    switch (action.type) {
        case 'FAVS_TOGGLE':
            return { ...state, isFavsPortalOpen: !state.isFavsPortalOpen }
        case 'FAVS_OPEN':
            return { ...state, isFavsPortalOpen: true }
        case 'FAVS_CLOSE':
            return { ...state, isFavsPortalOpen: false }
        default:
            return state;
    }
}


// context value
type FavsPortalContextValueTy = FavsInitialStateTy & {
    favsToggle: () => void,
    favsOpen: () => void,
    favsClose: () => void,
}

export const FavsPortalContext =
    createContext<FavsPortalContextValueTy | undefined>(undefined)


export const FavsPortalContextProvider = ({ children }: PropsWithChildren) => {

    const [state, dispatch] = useReducer(favsReducerFn, favsInitialState)

    const favsDispatchActionsFn = useMemo(
        () => ({
            favsToggle: () => dispatch({ type: 'FAVS_TOGGLE' }),
            favsOpen: () => dispatch({ type: 'FAVS_OPEN' }),
            favsClose: () => dispatch({ type: 'FAVS_CLOSE' }),
        }), []
    )

    const value = useMemo(
        () => ({
            ...state,
            ...favsDispatchActionsFn,
        }), [state, favsDispatchActionsFn]
    )

    return (
        <FavsPortalContext.Provider value={value}>
            {children}
        </FavsPortalContext.Provider>
    )
}


// custom hook
export const useFavsPortalContext = () => {
    const context = useContext(FavsPortalContext);

    if (!context) {
        throw new Error(`useFavsPortalContext must be used inside FasPortalContextProvider`)
    }

    return context;
}