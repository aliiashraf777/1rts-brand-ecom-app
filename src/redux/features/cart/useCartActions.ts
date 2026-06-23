import { useMemo } from "react";
import { cartReducerActions, type ICartItem } from "./cartSlice";
import { useAppDispatch } from "../storeHooks";

// reducer actions dispatchers
export const useCartActions = () => {

    const dispatch = useAppDispatch();

    return useMemo(
        () => ({
            addToCart: (
                item: Omit<ICartItem, 'qty' | 'totalPrice'>
            ) => {
                dispatch(cartReducerActions.addToCart(item))
                dispatch(cartReducerActions.itemAddedToast())
            },

            removeFromCart: (id: string) => {
                dispatch(cartReducerActions.removeFromCart(id))
                dispatch(cartReducerActions.itemRemovedToast())
            },

            deleteFromCart: (id: string) => {
                dispatch(cartReducerActions.deleteFromCart(id))
                dispatch(cartReducerActions.itemRemovedToast())
            },

            emptyCart: () => {
                dispatch(cartReducerActions.emptyCart())
                dispatch(cartReducerActions.itemRemovedToast())
            },

            itemAddedToast: () =>
                dispatch(cartReducerActions.itemAddedToast()),

            itemRemovedToast: () =>
                dispatch(cartReducerActions.itemRemovedToast()),

            orderPlacedToast: () =>
                dispatch(cartReducerActions.orderPlacedToast()),

        }), [dispatch]
    )
}