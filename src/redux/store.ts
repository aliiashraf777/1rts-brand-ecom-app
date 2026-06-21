import { configureStore } from '@reduxjs/toolkit'
import cartReducerSlice, { type CartInitialStateTy } from '@/redux/features/cartSlice'

import { initialState as cartInitialState } from '@/redux/features/cartSlice'
import { getLocalStateFn, setLocalStateFn } from '@/utils/localStorage'

const CART_STORAGE_KEY = 'brandCartItems';

const persistedCart = getLocalStateFn<CartInitialStateTy>(CART_STORAGE_KEY);

const preloadedState = {
    cartReducer: {
        ...cartInitialState,
        ...(persistedCart ?? {}),
    },
}

export const store = configureStore({
    reducer: {
        cartReducer: cartReducerSlice,
    },

    preloadedState,
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


// persist entire store on state change
store.subscribe(() => {
    console.log('hydrated cart', store.getState().cartReducer);

    setLocalStateFn(CART_STORAGE_KEY, store.getState().cartReducer)
});