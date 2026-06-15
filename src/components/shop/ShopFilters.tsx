import React, { useState } from "react"
import FilterItem from "./FilterItem"
import { searchCategoriesData } from "@/data/navigationData";
import { filterBrandsData, filterConditionData, filterFeaturesData, filterRatingsData, } from "@/data/shopFiltersData";
import CheckboxBtn from "./CheckboxBtn";
import Button from "../common/Button";
import { hasActiveFilters, initialFilters, type ProductFiltersTy } from "@/pages/shop/Shop";
import ClearAllFilters from "./ClearAllFilters";

type Props = {
    productFilters: ProductFiltersTy,
    setProductFilters: React.Dispatch<React.SetStateAction<ProductFiltersTy>>,
}

const ShopFilters = ({ productFilters, setProductFilters }: Props) => {

    const [isCategoryFilterOpen, setIsCategoryFilterOpen] = useState<boolean>(true);

    // brands toggle state
    const [isBrandsFilterOpen, setIsBrandsFilterOpen] = useState<boolean>(true);

    // features toggle state
    const [isFeaturesFilterOpen, setIsFeaturesFilterOpen] = useState(true);

    // price toggle state
    const [isPriceFilterOpen, setIsPriceFilterOpen] = useState<boolean>(true)

    // condition toggle state
    const [isConditionFilterOpen, setIsConditionFilterOpen] = useState<boolean>(true);

    // ratings toggle state
    const [isRatingsFilterOpen, setIsRatingsFilterOpen] = useState(true)

    // see all toggle state
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

    const MIN_PRICE = 0
    const MAX_PRICE = 100
    const MIN_GAP = 10

    const clamp = (value: number, min: number, max: number) =>
        Math.min(max, Math.max(min, value))

    const [minRange, setMinRange] = useState(0)
    const [maxRange, setMaxRange] = useState(100)
    const [minInput, setMinInput] = useState("0")
    const [maxInput, setMaxInput] = useState("100")


    const handleMinChange = (raw: number) => {
        const nextMin = clamp(raw, MIN_PRICE, maxRange - MIN_GAP)
        setMinRange(nextMin)
        setMinInput(String(nextMin))
    }

    const handleMaxChange = (raw: number) => {
        const nextMax = clamp(raw, minRange + MIN_GAP, MAX_PRICE)
        setMaxRange(nextMax)
        setMaxInput(String(nextMax))
    }

    // typing only
    const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinInput(e.target.value)
    }

    const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxInput(e.target.value)
    }

    // Commit on blur / Enter / Apply:
    const commitMinInput = () => {
        const value = Number(minInput);
        if (!Number.isNaN(value))
            handleMinChange(value)
    }

    const commitMaxInput = () => {
        const value = Number(maxInput);
        if (!Number.isNaN(value))
            handleMaxChange(value);
    }

    // enter commit
    const handleEnterCommit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter')
            // e.currentTarget.blur();
            applyPriceRange()
    }

    // on apply button click
    const applyPriceRange = () => {
        const rawMin = Number(minInput)
        const rawMax = Number(maxInput)

        let nextMin = minRange;
        let nextMax = maxRange;

        if (!Number.isNaN(rawMin)) {
            nextMin = clamp(rawMin, MIN_PRICE, MAX_PRICE - MIN_GAP)
            setMinRange(nextMin)
            setMinInput(String(nextMin))
        }

        if (!Number.isNaN(rawMax)) {
            nextMax = clamp(rawMax, MIN_PRICE + MIN_GAP, MAX_PRICE)
            setMaxRange(nextMax)
            setMaxInput(String(nextMax))
        }

        updatePriceRange(nextMin, nextMax);
    }

    // min max thumb position
    const minPercent = ((minRange - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100
    const maxPercent = ((maxRange - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100


    // filters onClick update methods
    const toggleInArrayT = <T,>(arr: T[], value: T): T[] => (
        arr.includes(value)
            ? arr.filter((v) => v !== value)
            : [...arr, value]
    );

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

    const selectedRatingIds = filterRatingsData
        .filter((d) => productFilters.ratings.includes(d.rating!))
        .map((d) => d.id)

    const updateRatings = (rating: number) => {
        setProductFilters((prev) => ({
            ...prev,
            ratings: toggleInArrayT(prev.ratings, rating)
        }));
    };

    const updatePriceRange = (minPrice: number, maxPrice: number) => {
        setProductFilters((prev) => ({
            ...prev,
            minPrice,
            maxPrice,
        }));
    };

    // reset all filters
    const clearAllFilters = () => {
        setProductFilters(initialFilters);
        setMinRange(MIN_PRICE);
        setMaxRange(MAX_PRICE);
        setMinInput(String(MIN_PRICE));
        setMaxInput(String(MAX_PRICE))
    }


    return (
        <div className="hidden lg:block w-[240px] shrink-0">

            {/* resetBtn */}
            <ClearAllFilters
                productFilters={productFilters}
                onClick={clearAllFilters}
                variant="onlyBtn"
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
                        onClick={() => updateCategory(item.id)}
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
                            onClick={() => updateCategory(item.id)}
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
                        onClick={() => updateBrand(item.id)}
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
                        onClick={() => updateFeature(item.id)}
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
                            left: `${minPercent}%`,
                            width: `${maxPercent - minPercent}%`
                        }}
                    />
                </div>

                {/* range input */}
                <div className="price-range relative mb-section h-4">
                    <input
                        type="range"
                        min={MIN_PRICE}
                        max={MAX_PRICE}
                        step={10}
                        value={minRange}
                        onChange={(e) => handleMinChange(Number(e.target.value))}
                    />

                    <input
                        type="range"
                        min={MIN_PRICE}
                        max={MAX_PRICE}
                        step={10}
                        value={maxRange}
                        onChange={(e) => handleMaxChange(Number(e.target.value))}
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
                            value={minInput}
                            onChange={handleMinInputChange}
                            // onBlur={commitMinInput}
                            onKeyDown={handleEnterCommit}
                            className="w-full h-10 bg-white border border-gray-300 rounded-card p-2.5"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="max">Max</label>
                        <input
                            type="number"
                            name="max"
                            id="max"
                            value={maxInput}
                            onChange={handleMaxInputChange}
                            // onBlur={commitMaxInput}
                            onKeyDown={handleEnterCommit}
                            className="w-full h-10 bg-white border border-gray-300 rounded-card p-2.5"
                        />
                    </div>
                </div>

                <Button
                    variant="white"
                    size="full"
                    onClick={applyPriceRange}
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
                        onClick={() => updateCondition(item.id)}
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
                        selectedIds={selectedRatingIds}
                        onClick={() => updateRatings(item.rating!)}
                    />
                ))}
            </FilterItem>
        </div>
    )
}

export default ShopFilters