import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// base selector for memoized selectors
export const selectBaseCartState = (state: RootState) => {
    console.log('redux state: ', state);
    console.log('redux state key: ', state.cartReducer);
    return state.cartReducer;
}

export const selectCartItemsList = createSelector(
    [selectBaseCartState],
    (cart) => cart.cartItemsList
)

export const selectTotalQty = createSelector(
    [selectCartItemsList],
    (items) => items.reduce(
        (total, item) => total + item.qty, 0)
)


export const selectCartBilling = createSelector(
    [selectCartItemsList],
    (items) => {

        const subTotal = items?.reduce(
            (total, item) => total + item.totalPrice, 0);

        const deliveryFee =
            subTotal === 0 ? 0 :
                subTotal > 500 ? 50 :
                    subTotal > 150 ? 30 :
                        subTotal > 100 ? 20 : 20;

        // 0.5% tax
        const taxes = subTotal * (0.5 / 100);

        const grandTotal = subTotal + deliveryFee + taxes;

        return {
            subTotal,
            deliveryFee,
            taxes,
            grandTotal,
        }
    }
)