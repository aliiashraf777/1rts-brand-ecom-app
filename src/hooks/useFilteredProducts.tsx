import { useSortContext } from "@/context/TopSortContext";
import { productsData } from "@/data/productsData";
import type { ProductFiltersTy } from "@/pages/shop/Shop";
import { useMemo } from "react";



const useFilteredProducts = (productFilters: ProductFiltersTy) => {

    const { selectedSort } = useSortContext();

    return useMemo(() => {

        const filteredProducts = productsData.filter((product) => {

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
                productFilters.ratings.some((r) => productRating >= Number(r));

            const matchedVerified =
                !productFilters.verified ||
                product.verified === true;

            return (
                matchedPrice &&
                matchedRatings &&
                matchedCategory &&
                matchedBrand &&
                matchedFeature &&
                matchedCondition &&
                matchedVerified
            );
        });

        return filteredProducts.sort((a, b) => {
            switch (selectedSort.sortKey) {
                case 'featured':
                    return Number(b.featured ?? 0) - Number(a.featured ?? 0);
                case 'bestSellers':
                    return Number(b.orders) - Number(a.orders);
                case 'new':
                    return Number(b.isNew ?? 0) - Number(a.isNew ?? 0);
                case 'old':
                    return Number(b.isOld ?? 0) - Number(a.isOld ?? 0);
                case 'priceLowToHigh':
                    return Number(a.price) - Number(b.price);
                case 'priceHighToLow':
                    return Number(b.price) - Number(a.price);
                case 'SelectSort':
                default:
                    return Number(b.selectSort ?? 0) - Number(a.selectSort ?? 0)
            }
        });

    }, [productFilters, selectedSort]);
}

export default useFilteredProducts