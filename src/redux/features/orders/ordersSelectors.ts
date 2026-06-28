import type { RootState } from "@/redux/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectBaseOrdersState = (state: RootState) => {
  // console.log("redux state", state);
  // console.log("orders redux state", state.ordersReducer);
  return state.ordersReducer;
};

export const selectOrdersItemsList = createSelector(
  [selectBaseOrdersState],
  (orders) => orders.ordersItemsList,
);

export const selectOrdersTotalQty = createSelector(
  [selectOrdersItemsList],
  (items) => items.reduce((total, item) => total + item.items.length, 0),
);
