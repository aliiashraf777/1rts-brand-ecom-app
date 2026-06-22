import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export interface ICartItem {
    id: string,
    title: string,
    image: string,
    price: number,
    qty: number,
    totalPrice: number,
}

export type CartInitialStateTy = {
    cartItemsList: ICartItem[],
}

export const initialState: CartInitialStateTy = {
    cartItemsList: []
}

type AddToCartPayloadTy = Omit<ICartItem, 'qty' | 'totalPrice'>

export const cartReducerSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<AddToCartPayloadTy>) => {

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

            const existingItem = state.cartItemsList.find(
                (item) => item.id === toDeleteItemId)

            if (!existingItem) return;

            state.cartItemsList = state.cartItemsList.filter(
                (item) => item.id !== toDeleteItemId);
        },

        emptyCart: (state) => {
            alert('Empty Cart...!')
            state.cartItemsList = [];
        }
    }
})

export const cartReducerActions = cartReducerSlice.actions;

export default cartReducerSlice.reducer