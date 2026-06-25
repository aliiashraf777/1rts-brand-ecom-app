import { configureStore } from "@reduxjs/toolkit";
import cartReducerSlice, {
  type CartInitialStateTy,
} from "@/redux/features/cart/cartSlice";
import favsReducerSlice, {
  type FavsInitialStateTy,
} from "@/redux/features/favs/favsSlice";
import ordersReducerSlice, {
  type IOrdersInitialStateTy,
} from "@/redux/features/orders/ordersSlice";

import { initialState as cartInitialState } from "@/redux/features/cart/cartSlice";
import { initialState as favsInitialState } from "@/redux/features/favs/favsSlice";
import { initialState as ordersInitialState } from "@/redux/features/orders/ordersSlice";

import { getLocalStateFn, setLocalStateFn } from "@/utils/localStorage";

// 1
const CART_STORAGE_KEY = "brandCartItems";
const FAVS_STORAGE_KEY = "brandFavsItems";
const ORDERS_STORAGE_KEY = "brandOrdersItems";

// 2
const persistedCart = getLocalStateFn<CartInitialStateTy>(CART_STORAGE_KEY);

const persistedFavs = getLocalStateFn<FavsInitialStateTy>(FAVS_STORAGE_KEY);

const persistedOrders =
  getLocalStateFn<IOrdersInitialStateTy>(ORDERS_STORAGE_KEY);

// 3
const preloadedState = {
  cartReducer: {
    ...cartInitialState,
    ...(persistedCart ?? {}),
  },
  favsReducer: {
    ...favsInitialState,
    ...(persistedFavs ?? {}),
  },
  ordersReducer: {
    ...ordersInitialState,
    ...(persistedOrders ?? {}),
  },
};

export const store = configureStore({
  reducer: {
    cartReducer: cartReducerSlice,
    favsReducer: favsReducerSlice,
    ordersReducer: ordersReducerSlice,
  },

  // 4
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// 5
// persist entire store on state change
store.subscribe(() => {
  console.log("hydrated cart", store.getState().cartReducer);

  console.log("hydrated favs", store.getState().favsReducer);

  console.log("hydrated orders", store.getState().ordersReducer);

  setLocalStateFn(CART_STORAGE_KEY, store.getState().cartReducer);

  setLocalStateFn(FAVS_STORAGE_KEY, store.getState().favsReducer);

  setLocalStateFn(ORDERS_STORAGE_KEY, store.getState().ordersReducer);
});
