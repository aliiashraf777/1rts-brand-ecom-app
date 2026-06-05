import { createContext, useContext, useReducer } from "react"

type Props = {}

export const MobileMenuContext = createContext();

const mobileInitialState = {
    isMobileMenuOpen: false,
}

const ACTIONS = {
    TOGGLE_MENU: 'TOGGLE_MENU',
    OPEN_MENU: 'OPEN_MENU',
    CLOSE_MENU: 'CLOSE_MENU',
}

const mobileReducerFn = (state, action) => {
    switch (action.type) {
        case ACTIONS.TOGGLE_MENU:
            return { ...state, isMobileMenuOpen: !state.isMobileMenuOpen }

        case ACTIONS.OPEN_MENU:
            return { ...state, isMobileMenuOpen: true }

        case ACTIONS.CLOSE_MENU:
            return { ...state, isMobileMenuOpen: false }

        default:
            throw new Error(`Unknown ${action.type} action type`)
    }
}

const useMobileDispatchActions = (dispatch) => {

    return {
        toggleMobileMenuDis: () => dispatch({ type: ACTIONS.TOGGLE_MENU }),
        openMobileMenu: () => dispatch({ type: ACTIONS.OPEN_MENU }),
        closeMobileMenu: () => dispatch({ type: ACTIONS.CLOSE_MENU }),
    }
}

export const MobileMenuContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(mobileReducerFn, mobileInitialState)

    return (
        <MobileMenuContext.Provider
            value={{ ...state, ...useMobileDispatchActions(dispatch) }}
        >
            {children}
        </MobileMenuContext.Provider>
    )
}


export const useMobileMenuContext = () => useContext(MobileMenuContext);