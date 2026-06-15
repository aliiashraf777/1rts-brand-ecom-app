import React, { useState } from "react"
import FilterItem from "./FilterItem"
import { searchCategoriesData } from "@/data/navigationData";
import { filterBrandsData, filterConditionData, filterFeaturesData, filterRatingsData, } from "@/data/shopFiltersData";
import CheckboxBtn from "./CheckboxBtn";
import Button from "../common/Button";
import type { ProductFiltersTy } from "@/pages/shop/Shop";

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
    const updateCategory = (categoryId: string) => {
        setProductFilters((prev) => ({
            ...prev,
            categoryId: [categoryId],
        }))
    };

    const updateBrand = (brandId: string) => {
        setProductFilters((prev) => ({
            ...prev,
            brandIds: [brandId],
        }))
    };

    const updateFeature = (featureId: string) => {
        setProductFilters((prev) => ({
            ...prev,
            featureIds: [featureId],
        }))
    };

    const updateCondition = (conditionId: string) => {
        setProductFilters((prev) => ({
            ...prev,
            conditionId,
        }));
    };

    const updateRatings = (rating: number) => {
        setProductFilters((prev) => ({
            ...prev,
            rating,
        }));
    };

    const updatePriceRange = (minPrice: number, maxPrice: number) => {
        setProductFilters((prev) => ({
            ...prev,
            minPrice,
            maxPrice,
        }));
    };


    return (
        <div className="hidden lg:block w-[240px] shrink-0">

            {/* category filter */}
            <FilterItem
                title="Category"
                state={isCategoryFilterOpen}
                onClick={() => toggleFilter('category')}
                seeAll
            >
                {searchCategoriesData.slice(0, 5).map((item, idx) => (
                    <button
                        key={`${item.text}-${idx}`}
                        type="button"
                        onClick={() => updateCategory(item.id)}
                        className={`w-full py-2.5 px-2 txt-base text-gray-600 flex items-center transition-all duration-300 ease-out cursor-pointer hover:bg-gray-200 
                            ${productFilters.categoryId[0] === item.id ? 'text-primary' : ''}
                        `}
                    >
                        {item.text}
                    </button>
                ))}
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
                        selectedId={productFilters.brandIds[0] ?? ""}
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
                        selectedId={productFilters.featureIds[0] ?? ""}
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
                        selectedId={productFilters.conditionId ?? ""}
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
                        selectedId={productFilters.rating === item.rating
                            ? item.id
                            : ""
                        }
                        onClick={() => updateRatings(item.rating!)}
                    />
                ))}
            </FilterItem>
        </div>
    )
}

export default ShopFilters