import type { IProductItem } from "@/types/productTypes";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IOrdersItem {
  orderId: string;
  placedAt: string;
  items: IProductItem[];
  total: number;
}

export type IOrdersInitialStateTy = {
  ordersItemsList: IOrdersItem[];
};

export const initialState: IOrdersInitialStateTy = {
  ordersItemsList: [],
};

export const ordersReducerSlice = createSlice({
  name: "ordersSlice",
  initialState,
  reducers: {
    placedOrder: (state, action: PayloadAction<IProductItem[]>) => {
      const items = action.payload;
      if (items.length === 0) return;

      state.ordersItemsList.push({
        orderId: crypto.randomUUID(),
        placedAt: new Date().toISOString(),
        items: items,
        total: items.reduce((total, i) => total + i.totalPrice, 0),
      });
    },
  },
});

export const ordersReducerActions = ordersReducerSlice.actions;

export default ordersReducerSlice.reducer;
