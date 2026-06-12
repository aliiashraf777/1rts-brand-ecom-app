import React, { useState } from "react"
import FilterItem from "./FilterItem"
import { searchCategoriesData } from "@/data/navigationData";
import { filterBrandsData, filterConditionData, filterFeaturesData, filterRatingsData, type filterBrandItem } from "@/data/shopFiltersData";
import CheckboxBtn from "./CheckboxBtn";
import Button from "../common/Button";

type Props = {}

const ShopFilters = (props: Props) => {

    const [isCategoryFilterOpen, setIsCategoryFilterOpen] = useState<boolean>(true);
    const [selectedFilterCategory, setSelectedFilterCategory] = useState(searchCategoriesData[0])

    // brands filter state
    const [isBrandsFilterOpen, setIsBrandsFilterOpen] = useState<boolean>(true);
    const [selectedBrandsCategory, setSelectedBrandsCategory] = useState<filterBrandItem>(filterBrandsData[0]);

    // features filter state
    const [isFeaturesFilterOpen, setIsFeaturesFilterOpen] = useState(true);
    const [selectedFeature, setSelectedFeature] = useState(filterFeaturesData[0]);

    // price filter state
    const [isPriceFilterOpen, setIsPriceFilterOpen] = useState<boolean>(true)

    // condition filter state
    const [isConditionFilterOpen, setIsConditionFilterOpen] = useState<boolean>(true);
    const [selectedCondition, setSelectedCondition] = useState(filterConditionData[0]);

    // ratings filter state
    const [isRatingsFilterOpen, setIsRatingsFilterOpen] = useState(true)
    const [selectedRating, setSelectedRating] = useState(filterRatingsData[0]);

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
    const MAX_PRICE = 1000
    const MIN_GAP = 100

    const clamp = (value: number, min: number, max: number) =>
        Math.min(max, Math.max(min, value))

    const [minRange, setMinRange] = useState(300)
    const [maxRange, setMaxRange] = useState(700)
    const [minInput, setMinInput] = useState("300")
    const [maxInput, setMaxInput] = useState("700")


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
            e.currentTarget.blur();
    }

    // on apply button click
    const applyPriceRange = () => {
        const rawMin = Number(minInput)
        const rawMax = Number(maxInput)

        if (!Number.isNaN(rawMin)) {
            const nextMin = clamp(rawMin, MIN_PRICE, MAX_PRICE - MIN_GAP)
            setMinRange(nextMin)
            setMinInput(String(nextMin))
        }

        if (!Number.isNaN(rawMax)) {
            const nextMax = clamp(rawMax, MIN_PRICE + MIN_GAP, MAX_PRICE)
            setMaxRange(nextMax)
            setMaxInput(String(nextMax))
        }
    }

    // min max thumb position
    const minPercent = ((minRange - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100
    const maxPercent = ((maxRange - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100


    return (
        <div className="hidden lg:block w-[240px] shrink-0">
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
                        onClick={() => setSelectedFilterCategory(item)}
                        className={`w-full py-2.5 px-2 txt-base text-gray-600 flex items-center transition-all duration-300 ease-out cursor-pointer hover:bg-gray-200 
                            ${selectedFilterCategory === item ? 'text-primary' : ''}
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
                {filterBrandsData.map((item, idx) => (
                    <CheckboxBtn
                        key={`${item.brand}-${idx}`}
                        item={item}
                        text={item.brand}
                        selectedState={selectedBrandsCategory}
                        onClick={() => setSelectedBrandsCategory(item)}
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
                        key={`${item.feature}-${idx}`}
                        item={item}
                        text={item.feature}
                        selectedState={selectedFeature}
                        onClick={() => setSelectedFeature(item)}
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
                {filterConditionData.map((item, idx) => (
                    <CheckboxBtn
                        key={`${item.condition}-${idx}`}
                        item={item}
                        text={item.condition}
                        selectedState={selectedCondition}
                        onClick={() => setSelectedCondition(item)}
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
                {filterRatingsData.map((item, idx) => (
                    <CheckboxBtn
                        key={`${item.rating}-${idx}`}
                        item={item}
                        selectedState={selectedRating}
                        onClick={() => setSelectedRating(item)}
                        rating={item.rating}
                    />
                ))}
            </FilterItem>
        </div>
    )
}

export default ShopFilters