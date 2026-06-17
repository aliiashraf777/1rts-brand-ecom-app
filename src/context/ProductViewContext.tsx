import { createContext, useContext, useMemo, useReducer, type PropsWithChildren } from "react"

export type ProductViewInitialStateTy = {
    isListView: boolean,
    isGridView: boolean,
}

export const productViewInitialState: ProductViewInitialStateTy = {
    isListView: true,
    isGridView: false,
}

type ProductViewActionsU =
    | { type: 'PRODUCT_VIEW_TOGGLE' }


const productViewReducerFn = (
    state: ProductViewInitialStateTy,
    action: ProductViewActionsU,
) => {
    switch (action.type) {
        case 'PRODUCT_VIEW_TOGGLE':
            return {
                ...state,
                isListView: !state.isListView,
                isGridView: !state.isGridView,
            }
    }
}

// context value
type ProductViewContextValueTy = ProductViewInitialStateTy & {
    productViewToggle: () => void,
}

export const ProductViewContext = createContext<ProductViewContextValueTy | undefined>(undefined)


export const ProductViewContextProvider = ({ children }: PropsWithChildren) => {

    const [state, dispatch] = useReducer(productViewReducerFn, productViewInitialState);

    const productViewDispatchFns = useMemo(() => ({
        productViewToggle: () => dispatch({ type: 'PRODUCT_VIEW_TOGGLE' })
    }), [])

    const value = useMemo(() => ({
        ...state,
        ...productViewDispatchFns
    }), [state, productViewDispatchFns])

    return (
        <ProductViewContext.Provider value={value}>
            {children}
        </ProductViewContext.Provider>
    )
}


// product view custom hook
export const useProductViewContext = () => {
    const context = useContext(ProductViewContext);

    if (!context) {
        throw new Error(`useProductViewContext must be used inside ProductViewContextProvider`)
    }

    return context;
}