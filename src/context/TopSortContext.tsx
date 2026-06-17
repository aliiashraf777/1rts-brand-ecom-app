import { sortTopData, type IfilterOption } from "@/data/shopFiltersData";
import { createContext, useContext, useMemo, useReducer, type PropsWithChildren } from "react";

type SortInitialStateTy = {
    isSortOpen: boolean,
    selectedSort: IfilterOption,
}

export const sortInitialState: SortInitialStateTy = {
    isSortOpen: false,
    selectedSort: sortTopData[0],
}

type SortActionsU =
    | { type: 'SORT_TOGGLE' }
    | { type: 'SORT_OPEN' }
    | { type: 'SORT_CLOSE' }
    | { type: 'SORT_SELECT', payload: IfilterOption }

const sortReducerFn = (
    state: SortInitialStateTy,
    action: SortActionsU,
) => {
    switch (action.type) {
        case 'SORT_TOGGLE':
            return { ...state, isSortOpen: !state.isSortOpen }
        case 'SORT_OPEN':
            return { ...state, isSortOpen: true }
        case 'SORT_CLOSE':
            return { ...state, isSortOpen: false }
        case 'SORT_SELECT':
            return {
                ...state,
                selectedSort: action.payload,
                isSortOpen: false,
            }
    }
}

// context value
type SortContextValueTy = SortInitialStateTy & {
    sortToggle: () => void,
    sortOpen: () => void,
    sortClose: () => void,
    sortSelect: (item: IfilterOption) => void,
}
export const SortContext = createContext<SortContextValueTy | undefined>(undefined)


export const SortContextProvider = ({ children }: PropsWithChildren) => {

    const [state, dispatch] = useReducer(sortReducerFn, sortInitialState);

    const sortDispatchActions = useMemo(() => ({
        sortToggle: () => dispatch({ type: 'SORT_TOGGLE' }),
        sortOpen: () => dispatch({ type: 'SORT_OPEN' }),
        sortClose: () => dispatch({ type: 'SORT_CLOSE' }),
        sortSelect: (item: IfilterOption) => dispatch({
            type: 'SORT_SELECT',
            payload: item,
        }),
    }), [])

    const value = useMemo(() => ({
        ...state,
        ...sortDispatchActions
    }), [state, sortDispatchActions])

    return (
        <SortContext.Provider value={value}>
            {children}
        </SortContext.Provider>
    )
}

// custom sort context hook
export const useSortContext = () => {
    const context = useContext(SortContext);

    if (!context) {
        throw new Error(`useSortContext must be used inside SortcontextProvider`)
    }

    return context;
}