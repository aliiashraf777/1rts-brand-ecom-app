import { useMemo } from "react";
import { cartReducerActions } from "./cartSlice";
import { useAppDispatch } from "../storeHooks";
import type { AddItemPayloadTy } from "@/types/productTypes";

// reducer actions dispatchers
export const useCartActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(
    () => ({
      addToCart: (item: AddItemPayloadTy) => {
        dispatch(cartReducerActions.addToCart(item));
        dispatch(cartReducerActions.itemAddedToast());
      },

      removeFromCart: (id: string) => {
        dispatch(cartReducerActions.removeFromCart(id));
        dispatch(cartReducerActions.itemRemovedToast());
      },

      deleteFromCart: (id: string) => {
        dispatch(cartReducerActions.deleteFromCart(id));
        dispatch(cartReducerActions.itemRemovedToast());
      },

      emptyCart: () => {
        dispatch(cartReducerActions.emptyCart());
        dispatch(cartReducerActions.itemRemovedToast());
      },

      orderAddedFromCart: () => {
        dispatch(cartReducerActions.emptyCart());
        dispatch(cartReducerActions.orderPlacedToast());
      },
    }),
    [dispatch],
  );
};
