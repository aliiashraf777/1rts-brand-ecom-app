import { useMemo } from "react";
import { useAppDispatch } from "../storeHooks";
import type { IProductItem } from "@/types/productTypes";
import { ordersReducerActions } from "./ordersSlice";
import { useCartActions } from "../cart/useCartActions";

export const useOrdersActions = () => {
  const dispatch = useAppDispatch();
  const { emptyCart, orderAddedFromCart } = useCartActions();

  return useMemo(
    () => ({
      placeCartOrder: (cartItems: IProductItem[]) => {
        if (cartItems.length === 0) return;
        dispatch(ordersReducerActions.placedOrder(cartItems));
        orderAddedFromCart();
      },
    }),
    [dispatch, orderAddedFromCart],
  );
};
