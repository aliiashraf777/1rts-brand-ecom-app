import { createContext, useContext, useMemo, useReducer, type PropsWithChildren } from "react"

export type CartInitialStateTy = {
    isCartPortalOpen: boolean,
}

const cartInitialState: CartInitialStateTy = {
    isCartPortalOpen: false
}

// actions unions
type CartPortalActionsU =
    | { type: 'CART_TOGGLE' }
    | { type: 'CART_OPEN' }
    | { type: 'CART_CLOSE' }


// reducer
const cartReducerFn = (
    state: CartInitialStateTy,
    action: CartPortalActionsU
) => {
    switch (action.type) {
        case 'CART_TOGGLE':
            return { ...state, isCartPortalOpen: !state.isCartPortalOpen }
        case 'CART_OPEN':
            return { ...state, isCartPortalOpen: true }
        case 'CART_CLOSE':
            return { ...state, isCartPortalOpen: false }
        default:
            return state;
    }
}


// context value
type CartPortalContextValueTy = CartInitialStateTy & {
    cartToggle: () => void,
    cartOpen: () => void,
    cartClose: () => void,
}

export const CartPortalContext =
    createContext<CartPortalContextValueTy | undefined>(undefined)


export const CartPortalContextProvider = ({ children }: PropsWithChildren) => {

    const [state, dispatch] = useReducer(cartReducerFn, cartInitialState);

    const cartDispatchActionsFn = useMemo(
        () => ({
            cartToggle: () => dispatch({ type: 'CART_TOGGLE' }),
            cartOpen: () => dispatch({ type: 'CART_OPEN' }),
            cartClose: () => dispatch({ type: 'CART_CLOSE' }),
        }), []
    )

    const value = useMemo(
        () => ({
            ...state,
            ...cartDispatchActionsFn,
        }), [state, cartDispatchActionsFn]
    )

    return (
        <CartPortalContext.Provider value={value}>
            {children}
        </CartPortalContext.Provider>
    )
}


// custom use hook
export const useCartPortalContext = () => {
    const context = useContext(CartPortalContext);
    if (!context) {
        throw new Error(`CartPortalContext must be inside CartPortalContextProvider`)
    }

    return context;
}