import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AddItemPayloadTy, IProductItem } from "@/types/productTypes";

export type IFavItem = IProductItem
// if favs ever needs extra fields, extend here

export type FavsInitialStateTy = {
    favsItemsList: IFavItem[],
}

export const initialState: FavsInitialStateTy = {
    favsItemsList: []
}

export const favsReducerSlice = createSlice({
    name: 'favsSlice',
    initialState,
    reducers: {
        addToFavs: (
            state,
            action: PayloadAction<AddItemPayloadTy>
        ) => {
            const newItem = action.payload;

            const existingItem = state.favsItemsList.find((item) => item.id === newItem.id)

            if (existingItem) {
                existingItem.qty++;
                existingItem.totalPrice += newItem.price
            } else {
                state.favsItemsList.push({
                    id: newItem.id,
                    title: newItem.title,
                    image: newItem.image,
                    price: newItem.price,
                    qty: 1,
                    totalPrice: newItem.price,
                })
            }
        },

        removeFromFavs: (state,
            action: PayloadAction<string>
        ) => {
            const toRemoveItemId = action.payload;

            const existingItem = state.favsItemsList.find((item) => item.id === toRemoveItemId);

            if (!existingItem) return;

            if (existingItem.qty <= 1) {
                state.favsItemsList = state.favsItemsList.filter((item) => item.id !== toRemoveItemId)
            } else {
                existingItem.qty--;
                existingItem.totalPrice -= existingItem.price
            }
        },

        deleteFromFavs: (state,
            action: PayloadAction<string>
        ) => {
            const toDeleteItemId = action.payload

            state.favsItemsList = state.favsItemsList.filter(
                (item) => item.id !== toDeleteItemId)
        },

        emptyFavs: (state) => {
            state.favsItemsList = [];
        }
    }
})


export const favsReducerActions = favsReducerSlice.actions

export default favsReducerSlice.reducer