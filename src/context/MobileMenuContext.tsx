import { createContext, useContext, useMemo, useReducer, type PropsWithChildren } from "react"


// state
type MobileMenuStateTy = {
    isMobileMenuOpen: boolean,
}

const mobileInitialState: MobileMenuStateTy = {
    isMobileMenuOpen: false,
}

// actions unions
type MobileMenuActionsU =
    | { type: 'TOGGLE_MENU' }
    | { type: 'OPEN_MENU' }
    | { type: 'CLOSE_MENU' }


// reducer
const mobileReducerFn = (
    state: MobileMenuStateTy,
    action: MobileMenuActionsU
) => {
    switch (action.type) {
        case 'TOGGLE_MENU':
            return { ...state, isMobileMenuOpen: !state.isMobileMenuOpen }

        case 'OPEN_MENU':
            return { ...state, isMobileMenuOpen: true }

        case 'CLOSE_MENU':
            return { ...state, isMobileMenuOpen: false }

        default:
            return state;
    }
}

// Context Value MobileMenuStateTy
type MobileMenuContextValueTy = MobileMenuStateTy & {
    toggleMobileMenu: () => void
    openMobileMenu: () => void
    closeMobileMenu: () => void
}

export const MobileMenuContext = createContext<MobileMenuContextValueTy | undefined>(undefined);


// context provider function
export const MobileMenuContextProvider = ({ children }: PropsWithChildren) => {

    const [state, dispatch] = useReducer(mobileReducerFn, mobileInitialState)

    const mobileDispatchActions = useMemo(
        () => ({
            toggleMobileMenu: () => dispatch({ type: 'TOGGLE_MENU' }),
            openMobileMenu: () => dispatch({ type: 'OPEN_MENU' }),
            closeMobileMenu: () => dispatch({ type: 'CLOSE_MENU' }),
        }),
        []
    )

    const value = useMemo(
        () => ({
            ...state,
            ...mobileDispatchActions,
        }),
        [state, mobileDispatchActions]
    )

    return (
        <MobileMenuContext.Provider
            value={value}
        >
            {children}
        </MobileMenuContext.Provider>
    )
}

// custom hook
export const useMobileMenuContext = () => {

    const context = useContext(MobileMenuContext);

    if (!context) {
        throw new Error("useMobileMenuContext must be inside MobileMenuContextProvider")
    }

    return context;
}