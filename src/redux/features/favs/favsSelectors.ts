import type { RootState } from "@/redux/store";
import { createSelector } from "@reduxjs/toolkit";


export const selectBaseFavsState = (state: RootState) => {
    // console.log('redux state: ', state);
    // console.log('redux favs state: ', state.favsReducer);

    return state.favsReducer;
}

export const selectFavsItemsList = createSelector(
    [selectBaseFavsState],
    (favs) => favs.favsItemsList
);

export const selectFavsTotalQty = createSelector(
    [selectFavsItemsList],
    (items) => items.reduce(
        (total, item) => total + item.qty, 0)
)

export const selectFavsSubTotal = createSelector(
    [selectFavsItemsList],
    (items) => items.reduce(
        (total, item) => total + item.totalPrice, 0)
)