import React, { useState } from "react"
import FilterItem from "./FilterItem"
import { searchCategoriesData } from "@/data/navigationData";
import { filterBrandsData, filterConditionData, filterFeaturesData, filterRatingsData, } from "@/data/shopFiltersData";
import CheckboxBtn from "./CheckboxBtn";
import Button from "../common/Button";
import { hasActiveFilters, initialFilters, type ProductFiltersTy } from "@/pages/shop/Shop";
import ClearAllFilters from "./ClearAllFilters";


type PriceRangePropsTy = {
    minRange: number,
    maxRange: number,
    minInput: string,
    maxInput: string,
    MIN_PRICE: number,
    MAX_PRICE: number,
    MIN_GAP: number,
    minPercent: number,
    maxPercent: number,
    handleMinChange: (raw: number) => void,
    handleMaxChange: (raw: number) => void,
    handleMinInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleMaxInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    commitMinInput: () => void,
    commitMaxInput: () => void,
    handleEnterCommit: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    applyPriceRange: () => void,
}

type onClickFiltersHandlersTy = {
    updateCategory: (categoryId: string) => void;
    updateBrand: (brandId: string) => void;
    updateFeature: (featureId: string) => void;
    updateCondition: (conditionId: string) => void;
    selectedRatingIds: string[];
    updateRatings: (rating: number) => void;
    updatePriceRange: (minPrice: number, maxPrice: number) => void;
}

type Props = {
    productFilters: ProductFiltersTy,
    setProductFilters: React.Dispatch<React.SetStateAction<ProductFiltersTy>>,
    priceRange: PriceRangePropsTy,
    clearAllFilters: () => void,
    onClickFiltersHandlers: onClickFiltersHandlersTy,
}

const ShopFilters = ({ productFilters, setProductFilters, priceRange, clearAllFilters, onClickFiltersHandlers }: Props) => {

    const [isCategoryFilterOpen, setIsCategoryFilterOpen] = useState<boolean>(true);

    // filters toggle states
    const [isBrandsFilterOpen, setIsBrandsFilterOpen] = useState<boolean>(true);

    const [isFeaturesFilterOpen, setIsFeaturesFilterOpen] = useState(true);

    const [isPriceFilterOpen, setIsPriceFilterOpen] = useState<boolean>(true)

    const [isConditionFilterOpen, setIsConditionFilterOpen] = useState<boolean>(true);

    const [isRatingsFilterOpen, setIsRatingsFilterOpen] = useState(true)

    const [isSeeAllOpen, setIsSeeAllOpen] = useState(false);

    const toggleFilter = (filter: string) => {
        switch (filter) {
            case 'category':
                setIsCategoryFilterOpen((prev) => !prev);
                break;
            case 'brands':
                setIsBrandsFilterOpen((prev) => !prev);
                break;
            case 'features':
                setIsFeaturesFilterOpen((prev) => !prev);
                break;
            case 'price':
                setIsPriceFilterOpen((prev) => !prev);
                break;
            case 'condition':
                setIsConditionFilterOpen((prev) => !prev);
                break;
            case 'ratings':
                setIsRatingsFilterOpen((prev) => !prev);
                break;

            default:
                break;
        }
    }


    return (
        <div className="hidden lg:block w-[240px] shrink-0">

            {/* resetBtn */}
            <ClearAllFilters
                productFilters={productFilters}
                onClick={clearAllFilters}
            />

            {/* category filter */}
            <FilterItem
                title="Category"
                state={isCategoryFilterOpen}
                onClick={() => toggleFilter('category')}
                seeAll
                isSeeAllOpen
                seeAllOnClick={() => setIsSeeAllOpen((prev) => !prev)}
            >
                {searchCategoriesData.slice(0, 5).map((item) => (
                    <CheckboxBtn
                        key={`${item.id}`}
                        item={item}
                        selectedIds={productFilters.categoryIds}
                        onClick={() => onClickFiltersHandlers.updateCategory(item.id)}
                        variant="noCheckRadio"
                    />
                ))}

                {/* see all open */}
                {isSeeAllOpen &&
                    searchCategoriesData.slice(5,).map((item) => (
                        <CheckboxBtn
                            key={`${item.id}`}
                            item={item}
                            selectedIds={productFilters.categoryIds}
                            onClick={() => onClickFiltersHandlers.updateCategory(item.id)}
                            variant="noCheckRadio"
                        />
                    ))
                }
            </FilterItem>

            {/* brands filter */}
            <FilterItem
                title="Brands"
                state={isBrandsFilterOpen}
                onClick={() => toggleFilter('brands')}
                seeAll
            >
                {filterBrandsData.map((item) => (
                    <CheckboxBtn
                        key={`${item.id}`}
                        item={item}
                        selectedIds={productFilters.brandIds}
                        onClick={() => onClickFiltersHandlers.updateBrand(item.id)}
                    />
                ))}
            </FilterItem>

            {/* features filter */}
            <FilterItem
                title="Features"
                state={isFeaturesFilterOpen}
                onClick={() => toggleFilter('features')}
                seeAll
            >
                {filterFeaturesData.map((item, idx) => (
                    <CheckboxBtn
                        key={`${item.label}-${idx}`}
                        item={item}
                        selectedIds={productFilters.featureIds}
                        onClick={() => onClickFiltersHandlers.updateFeature(item.id)}
                    />
                ))}
            </FilterItem>

            {/* Price Filter */}
            <FilterItem
                title="Price range"
                state={isPriceFilterOpen}
                onClick={() => toggleFilter('price')}
            >

                {/* range slider */}
                <div className="mt-2.5 relative h-1.5 bg-primary-light rounded-card">
                    <span
                        className="absolute h-full bg-primary rounded-card"
                        style={{
                            left: `${priceRange.minPercent}%`,
                            width: `${priceRange.maxPercent - priceRange.minPercent}%`
                        }}
                    />
                </div>

                {/* range input */}
                <div className="price-range relative mb-section h-4">
                    <input
                        type="range"
                        min={priceRange.MIN_PRICE}
                        max={priceRange.MAX_PRICE}
                        step={10}
                        value={priceRange.minRange}
                        onChange={(e) => priceRange.handleMinChange(Number(e.target.value))}
                    />

                    <input
                        type="range"
                        min={priceRange.MIN_PRICE}
                        max={priceRange.MAX_PRICE}
                        step={10}
                        value={priceRange.maxRange}
                        onChange={(e) => priceRange.handleMaxChange(Number(e.target.value))}
                    />
                </div>

                {/* Manual inputs */}
                <div className="w-full flex items-center gap-section mb-2">
                    <div className="flex flex-col">
                        <label htmlFor="min">Min</label>
                        <input
                            type="number"
                            name="min"
                            id="min"
                            value={priceRange.minInput}
                            onChange={priceRange.handleMinInputChange}
                            // onBlur={priceRange.commitMinInput}
                            onKeyDown={priceRange.handleEnterCommit}
                            className="w-full h-10 bg-white border border-gray-300 rounded-card p-2.5"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="max">Max</label>
                        <input
                            type="number"
                            name="max"
                            id="max"
                            value={priceRange.maxInput}
                            onChange={priceRange.handleMaxInputChange}
                            // onBlur={priceRange.commitMaxInput}
                            onKeyDown={priceRange.handleEnterCommit}
                            className="w-full h-10 bg-white border border-gray-300 rounded-card p-2.5"
                        />
                    </div>
                </div>

                <Button
                    variant="white"
                    size="full"
                    onClick={priceRange.applyPriceRange}
                >
                    Apply
                </Button>
            </FilterItem>

            {/* Condition */}
            <FilterItem
                title="Condition"
                state={isConditionFilterOpen}
                onClick={() => toggleFilter('condition')}
                seeAll
            >
                {filterConditionData.map((item) => (
                    <CheckboxBtn
                        key={`${item.id}`}
                        item={item}
                        selectedIds={productFilters.conditionIds}
                        onClick={() => onClickFiltersHandlers.updateCondition(item.id)}
                        variant="radio"
                    />
                ))}
            </FilterItem>


            {/* Ratings Filter */}
            <FilterItem
                title="Ratings"
                state={isRatingsFilterOpen}
                onClick={() => toggleFilter('ratings')}
            >
                {filterRatingsData.map((item) => (
                    <CheckboxBtn
                        key={`${item.id}`}
                        item={item}
                        selectedIds={onClickFiltersHandlers.selectedRatingIds}
                        onClick={() => onClickFiltersHandlers.updateRatings(item.rating!)}
                    />
                ))}
            </FilterItem>
        </div>
    )
}

export default ShopFilters