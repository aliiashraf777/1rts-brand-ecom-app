import { useMemo } from "react"
import { useAppDispatch } from "../storeHooks"
import { favsReducerActions, type IFavItem } from "./favsSlice";


export const useFavsActions = () => {

    const dispatch = useAppDispatch();

    return useMemo(
        () => ({
            addToFavs: (
                item: Omit<IFavItem, 'qty' | 'totalPrice'>
            ) => {
                dispatch(favsReducerActions.addToFavs(item))
                dispatch(favsReducerActions.itemAddedToast())
            },

            removeFromFavs: (id: string) => {
                dispatch(favsReducerActions.removeFromFavs(id))
                dispatch(favsReducerActions.itemRemovedToast())
            },

            deleteFromFavs: (id: string) => {
                dispatch(favsReducerActions.deleteFromFavs(id))
                dispatch(favsReducerActions.itemRemovedToast())
            },

            emptyFavs: () => {
                dispatch(favsReducerActions.emptyFavs())
                dispatch(favsReducerActions.itemRemovedToast())
            },

            itemAddedToast: () =>
                dispatch(favsReducerActions.itemAddedToast()),

            itemRemovedToast: () =>
                dispatch(favsReducerActions.itemRemovedToast()),

        }), [dispatch]
    )
}