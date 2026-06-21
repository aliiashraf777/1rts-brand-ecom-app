import { useMemo } from "react";
import { cartReducerActions, type ICartItem } from "./cartSlice";
import { useAppDispatch } from "./storeHooks";

// reducer actions dispatchers
export const useCartActions = () => {

    const dispatch = useAppDispatch();

    return useMemo(() => ({
        addToCart: (item: Omit<ICartItem, 'qty' | 'totalPrice'>) =>
            dispatch(cartReducerActions.addToCart(item)),
        removeFromCart: (id: string) =>
            dispatch(cartReducerActions.removeFromCart(id)),
        deleteFromCart: (id: string) =>
            dispatch(cartReducerActions.deleteFromCart(id)),
        emptyCart: () =>
            dispatch(cartReducerActions.emptyCart()),
    }), [dispatch])
}