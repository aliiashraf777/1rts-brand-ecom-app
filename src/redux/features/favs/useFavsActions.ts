import { useMemo } from "react"
import { useAppDispatch } from "../storeHooks"
import { favsReducerActions, type IFavItem } from "./favsSlice";


export const useFavsActions = () => {

    const dispatch = useAppDispatch();

    return useMemo(
        () => ({
            addToFavs: (
                item: Omit<IFavItem, 'qty' | 'totalPrice'>
            ) =>
                dispatch(favsReducerActions.addToFavs(item)),

            removeFromFavs: (id: string) =>
                dispatch(favsReducerActions.removeFromFavs(id)),

            deleteFromFavs: (id: string) =>
                dispatch(favsReducerActions.deleteFromFavs(id)),

            emptyFavs: () =>
                dispatch(favsReducerActions.emptyFavs()),

        }), [dispatch]
    )
}