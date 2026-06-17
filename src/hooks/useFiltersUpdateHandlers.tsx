import { filterRatingsData } from "@/data/shopFiltersData";
import { initialFilters, type ProductFiltersTy } from "@/pages/shop/Shop";
import { useState } from "react";

const toggleInArrayT = <T,>(arr: T[], value: T): T[] => (
    arr.includes(value)
        ? arr.filter((v) => v !== value)
        : [...arr, value]
);

export type onClickFiltersHandlersTy = {
    updateCategory: (categoryId: string) => void;
    updateBrand: (brandId: string) => void;
    updateFeature: (featureId: string) => void;
    updateCondition: (conditionId: string) => void;
    updateRatings: (rating: number) => void;
    updatePriceRange: (minPrice: number, maxPrice: number) => void;
    selectedRatingIds: string[];
    updateVerified: () => void,
}

export type UseProductFiltersTy = {
    productFilters: ProductFiltersTy,
    setProductFilters: React.Dispatch<React.SetStateAction<ProductFiltersTy>>,
    filtersHandlers: onClickFiltersHandlersTy,
    clearAllFilters: (resetSlider: () => void) => void,
}


const useFiltersUpdateHandlers = (): UseProductFiltersTy => {

    const [productFilters, setProductFilters] = useState(initialFilters);

    const updateCategory = (categoryId: string) => {
        setProductFilters((prev) => ({
            ...prev,
            categoryIds: toggleInArrayT(prev.categoryIds, categoryId),
        }))
    };

    const updateBrand = (brandId: string) => {
        setProductFilters((prev) => ({
            ...prev,
            brandIds: toggleInArrayT(prev.brandIds, brandId),
        }))
    };

    const updateFeature = (featureId: string) => {
        setProductFilters((prev) => ({
            ...prev,
            featureIds: toggleInArrayT(prev.featureIds, featureId),
        }))
    };

    const updateCondition = (conditionId: string) => {
        setProductFilters((prev) => ({
            ...prev,
            conditionIds: toggleInArrayT(prev.conditionIds, conditionId),
        }));
    };

    const updateRatings = (rating: number) => {
        setProductFilters((prev) => ({
            ...prev,
            ratings: toggleInArrayT(prev.ratings, String(rating))
        }));
    };

    const updatePriceRange = (minPrice: number, maxPrice: number) => {
        setProductFilters((prev) => ({
            ...prev,
            minPrice,
            maxPrice,
        }));
    };

    const clearAllFilters = (resetSlider: () => void) => {
        setProductFilters(initialFilters)
        resetSlider()
    };

    const selectedRatingIds = filterRatingsData
        .filter((d) => productFilters.ratings.includes(String(d.rating!)))
        .map((d) => d.id);

    const updateVerified = () => {
        setProductFilters((prev) => ({
            ...prev,
            verified: !prev.verified,
        }));
    };

    return ({
        productFilters,
        setProductFilters,
        filtersHandlers: {
            updateCategory,
            updateBrand,
            updateFeature,
            updateCondition,
            updateRatings,
            updatePriceRange,
            selectedRatingIds,
            updateVerified,
        },
        clearAllFilters,
    })
}

export default useFiltersUpdateHandlers