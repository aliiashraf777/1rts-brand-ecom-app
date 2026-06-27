import { useMemo } from "react";
import { cartReducerActions } from "./cartSlice";
import { useAppDispatch } from "../storeHooks";
import type { AddItemPayloadTy } from "@/types/productTypes";
import { toasts } from "@/utils/toasts";

// reducer actions dispatchers
export const useCartActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(
    () => ({
      addToCart: (item: AddItemPayloadTy) => {
        dispatch(cartReducerActions.addToCart(item));
        toasts.itemAdded();
      },

      removeFromCart: (id: string) => {
        dispatch(cartReducerActions.removeFromCart(id));
        toasts.itemRemoved();
      },

      deleteFromCart: (id: string) => {
        dispatch(cartReducerActions.deleteFromCart(id));
        toasts.itemRemoved();
      },

      emptyCart: () => {
        dispatch(cartReducerActions.emptyCart());
        toasts.itemRemoved();
      },

      orderAddedFromCart: () => {
        dispatch(cartReducerActions.emptyCart());
        toasts.orderPlaced();
      },
    }),
    [dispatch],
  );
};
