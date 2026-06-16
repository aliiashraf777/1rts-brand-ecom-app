import { productsData } from "@/data/productsData";
import type { ProductFiltersTy } from "@/pages/shop/Shop";
import { useMemo } from "react";



const useFilteredProducts = (productFilters: ProductFiltersTy) => {
    return useMemo(() => (
        productsData.filter((product) => {

            const productPrice = Number(product.price);
            const productRating = Number(product.ratings);

            const matchedCategory =
                productFilters.categoryIds.length === 0 ||
                (product.categoryId?.some((catId) => productFilters.categoryIds.includes(catId)) ?? false);

            const matchedBrand =
                productFilters.brandIds.length === 0 ||
                (product.brandId
                    ? productFilters.brandIds.includes(product.brandId)
                    : false);

            const matchedFeature =
                productFilters.featureIds.length === 0 ||
                (product.featureId
                    ? productFilters.featureIds.includes(product.featureId)
                    : false);

            const matchedPrice =
                productPrice >= productFilters.minPrice &&
                productPrice <= productFilters.maxPrice;

            const matchedCondition =
                productFilters.conditionIds.length === 0 ||
                (product.conditionId
                    ? productFilters.conditionIds.includes(product.conditionId)
                    : false);

            const matchedRatings =
                productFilters.ratings.length === 0 ||
                productFilters.ratings.some((r) => productRating >= Number(r))

            return (
                matchedPrice &&
                matchedRatings &&
                matchedCategory &&
                matchedBrand &&
                matchedFeature &&
                matchedCondition
            );
        })
    ), [productFilters])
}

export default useFilteredProducts