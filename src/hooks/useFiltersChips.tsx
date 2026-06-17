import { searchCategoriesData } from "@/data/navigationData";
import { filterBrandsData, filterConditionData, filterFeaturesData } from "@/data/shopFiltersData";
import { initialFilters, type ProductFiltersTy } from "@/pages/shop/Shop";
import { useMemo } from "react";

export type AppliedFiltersChipsTy = {
    key: string,
    label: string,
    onRemove: () => void,
}


const useFiltersChips = (
    productFilters: ProductFiltersTy,
    setProductFilters: React.Dispatch<React.SetStateAction<ProductFiltersTy>>,
    resetPriceSlider: () => void,
): AppliedFiltersChipsTy[] => {
    
    return useMemo(() => {
        const chips: AppliedFiltersChipsTy[] = [];

        productFilters.categoryIds.forEach((id) => {
            const item = searchCategoriesData.find((c) => c.id === id);
            if (item) chips.push({
                key: `cat-${id}`,
                label: item.label,
                onRemove: () => setProductFilters((prev) => ({
                    ...prev,
                    categoryIds: prev.categoryIds.filter((c) => c !== id)
                }))
            })
        })

        productFilters.brandIds.forEach((id) => {
            const item = filterBrandsData.find((b) => b.id === id);
            if (item) chips.push({
                key: `brand-${id}`,
                label: item.label!,
                onRemove: () => setProductFilters((prev) => ({
                    ...prev,
                    brandIds: prev.brandIds.filter((b) => b !== id),
                })),
            })
        })

        productFilters.featureIds.forEach((id) => {
            const item = filterFeaturesData.find((f) => f.id === id);
            if (item) chips.push({
                key: `feature-${id}`,
                label: item.label!,
                onRemove: () => setProductFilters((prev) => ({
                    ...prev,
                    featureIds: prev.featureIds.filter((f) => f !== id),
                })),
            })
        })

        productFilters.conditionIds.forEach((id) => {
            const item = filterConditionData.find((c) => c.id === id);
            if (item) chips.push({
                key: `condition-${id}`,
                label: item.label!,
                onRemove: () => setProductFilters((prev) => ({
                    ...prev,
                    conditionIds: prev.conditionIds.filter((c) => c !== id),
                })),
            })
        })

        productFilters.ratings.forEach((rating) => {
            chips.push({
                key: `rating-${rating}`,
                label: `${rating} star`,
                onRemove: () => setProductFilters((prev) => ({
                    ...prev,
                    ratings: prev.ratings.filter((r) => r !== rating),
                })),
            })
        })

        if (
            productFilters.minPrice !== initialFilters.minPrice ||
            productFilters.maxPrice !== initialFilters.maxPrice
        ) {
            chips.push({
                key: 'price-range',
                label: `$${productFilters.minPrice}-$${productFilters.maxPrice}`,
                onRemove: () => {
                    setProductFilters((prev) => ({
                        ...prev,
                        minPrice: initialFilters.minPrice,
                        maxPrice: initialFilters.maxPrice,
                    }))
                    resetPriceSlider()
                },
            })
        }

        if (productFilters.verified) chips.push({
            key: 'verified',
            label: 'Verified only',
            onRemove: () => {
                setProductFilters((prev) => ({
                    ...prev,
                    verified: false,
                }))
            },
        })

        return chips;
    }, [productFilters])
}

export default useFiltersChips