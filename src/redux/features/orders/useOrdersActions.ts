import { useMemo } from "react";
import { useAppDispatch } from "../storeHooks";
import type { IProductItem } from "@/types/productTypes";
import { ordersReducerActions } from "./ordersSlice";
import { useCartActions } from "../cart/useCartActions";
import { useFavsActions } from "../favs/useFavsActions";
import { toasts } from "@/utils/toasts";

export const useOrdersActions = () => {
  const dispatch = useAppDispatch();
  const { orderAddedFromCart } = useCartActions();
  const { orderAddedFromFavs } = useFavsActions();

  return useMemo(
    () => ({
      placeCartOrder: (cartItems: IProductItem[]) => {
        if (cartItems.length === 0) return;
        dispatch(ordersReducerActions.placedOrder(cartItems));
        orderAddedFromCart();
      },
      placeFavsOrder: (favsItems: IProductItem[]) => {
        if (favsItems.length === 0) return;
        dispatch(ordersReducerActions.placedOrder(favsItems));
        orderAddedFromFavs();
      },
      deleteFromOrder: (orderId: string) => {
        dispatch(ordersReducerActions.deleteFromOrders(orderId));
        toasts.orderDeleted();
      },
      emptyOrderHistory: () => {
        dispatch(ordersReducerActions.emptyOrders());
        toasts.orderHistoryCleared();
      }
    }),
    [dispatch, orderAddedFromCart, orderAddedFromFavs],
  );
};
