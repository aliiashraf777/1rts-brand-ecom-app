import type { AddItemPayloadTy, IProductItem } from "@/types/productTypes";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

export type ICartItem = IProductItem;

export type CartInitialStateTy = {
    cartItemsList: ICartItem[],
}

export const initialState: CartInitialStateTy = {
    cartItemsList: []
}

export const cartReducerSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (
            state,
            action: PayloadAction<AddItemPayloadTy>
        ) => {
            const newItem = action.payload;

            const existingItem = state.cartItemsList.find(
                (item) => item.id === newItem.id);

            if (existingItem) {
                existingItem.qty++;
                existingItem.totalPrice += newItem.price;

                console.log('add to cart')
            } else {
                state.cartItemsList.push({
                    id: newItem.id,
                    title: newItem.title,
                    image: newItem.image,
                    price: newItem.price,
                    qty: 1,
                    totalPrice: newItem.price,
                })

                console.log('add to cart')
            }
        },

        removeFromCart: (state, action: PayloadAction<string>) => {
            const toRemoveItemId = action.payload;

            const existingItem = state.cartItemsList.find(
                (item) => item.id === toRemoveItemId);

            if (!existingItem) return;

            if (existingItem.qty <= 1) {
                state.cartItemsList = state.cartItemsList.filter(
                    (item) => item.id !== toRemoveItemId);
            }
            else {
                existingItem.qty--;
                existingItem.totalPrice -= existingItem.price
            }
        },

        deleteFromCart: (state, action: PayloadAction<string>) => {
            const toDeleteItemId = action.payload;

            state.cartItemsList = state.cartItemsList.filter(
                (item) => item.id !== toDeleteItemId);
        },

        emptyCart: (state) => {
            state.cartItemsList = [];
        },

        itemAddedToast: () => {
            toast.success('item added...!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "light",
                transition: Zoom,
            });
        },

        itemRemovedToast: () => {
            toast.warn('item removed...!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "light",
                transition: Zoom,
            });
        },

        orderPlacedToast: () => {
            toast.success('order placed successfully...!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "light",
                transition: Zoom,
            });
        },
    }
})

export const cartReducerActions = cartReducerSlice.actions;

export default cartReducerSlice.reducer