import { useMemo } from "react"
import { useAppDispatch } from "../storeHooks"
import { favsReducerActions, } from "./favsSlice";
import type { AddItemPayloadTy } from "@/types/productTypes";
import { toasts } from "@/utils/toasts";


export const useFavsActions = () => {

    const dispatch = useAppDispatch();

    return useMemo(
        () => ({
            addToFavs: (
                item: AddItemPayloadTy
            ) => {
                dispatch(favsReducerActions.addToFavs(item));
                toasts.itemAdded();
            },
            removeFromFavs: (id: string) => {
                dispatch(favsReducerActions.removeFromFavs(id));
                toasts.itemRemoved();
            },
            deleteFromFavs: (id: string) => {
                dispatch(favsReducerActions.deleteFromFavs(id));
                toasts.itemRemoved();
            },
            emptyFavs: () => {
                dispatch(favsReducerActions.emptyFavs());
                toasts.itemRemoved();
            },
            orderAddedFromFavs: () => {
                dispatch(favsReducerActions.emptyFavs());
                toasts.orderPlaced();
            }
        }), [dispatch]
    )
}