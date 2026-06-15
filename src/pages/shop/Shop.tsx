import Button from "@/components/common/Button"
import SectionContainer from "@/components/common/SectionContainer"
import AppliedFiltersChips from "@/components/shop/AppliedFiltersChips"
import BreadCrumb from "@/components/shop/BreadCrumb"
import ClearAllFilters from "@/components/shop/ClearAllFilters"
import ShopFilters from "@/components/shop/ShopFilters"
import ShopGridProducts from "@/components/shop/ShopGridProducts"
import ShopListProducts from "@/components/shop/ShopListProducts"
import { searchCategoriesData } from "@/data/navigationData"
import { productsData } from "@/data/productsData"
import { filterBrandsData, filterConditionData, filterFeaturesData, filterRatingsData } from "@/data/shopFiltersData"
import { X } from "lucide-react"
import { useMemo, useState } from "react"


export type ProductFiltersTy = {
  categoryIds: string[],
  brandIds: string[],
  featureIds: string[],
  conditionIds: string[],
  ratings: string[],
  minPrice: number,
  maxPrice: number,
};

export const initialFilters: ProductFiltersTy = {
  categoryIds: [],
  brandIds: [],
  featureIds: [],
  conditionIds: [],
  ratings: [],
  minPrice: 0,
  maxPrice: 1000,
};

// helper for clear all buttons
export const hasActiveFilters = (filters: ProductFiltersTy) =>
  filters.categoryIds.length > 0 ||
  filters.brandIds.length > 0 ||
  filters.featureIds.length > 0 ||
  filters.conditionIds.length > 0 ||
  filters.ratings.length > 0 ||
  filters.minPrice !== initialFilters.minPrice ||
  filters.maxPrice !== initialFilters.maxPrice;

export type AppliedFiltersChipsTy = {
  key: string,
  label: string,
  onRemove: () => void,
}


const Shop = () => {

  // filters state
  const [productFilters, setProductFilters] = useState(initialFilters);

  const MIN_PRICE = 0
  const MAX_PRICE = 100
  const MIN_GAP = 10

  const clamp = (value: number, min: number, max: number) =>
    Math.min(max, Math.max(min, value))

  const [minRange, setMinRange] = useState(0)
  const [maxRange, setMaxRange] = useState(100)
  const [minInput, setMinInput] = useState("0")
  const [maxInput, setMaxInput] = useState("100")

  // min max thumb position
  const minPercent = ((minRange - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;
  const maxPercent = ((maxRange - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;


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

  const priceRange = {
    minRange,
    maxRange,
    minInput,
    maxInput,
    MIN_PRICE,
    MAX_PRICE,
    MIN_GAP,
    minPercent,
    maxPercent,
    handleMinChange,
    handleMaxChange,
    handleMinInputChange,
    handleMaxInputChange,
    commitMinInput,
    commitMaxInput,
    handleEnterCommit,
    applyPriceRange,
  }

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
    .filter((d) => productFilters.ratings.includes(String(d.rating!)))
    .map((d) => d.id)

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

  const onClickFiltersHandlers = {
    updateCategory,
    updateBrand,
    updateFeature,
    updateCondition,
    selectedRatingIds,
    updateRatings,
    updatePriceRange,
  }

  const filteredProducts = useMemo(() => (
    productsData.filter((product) => {

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

      const productPrice = Number(product.price);
      const productRating = Number(product.ratings);

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

  // reset all filters
  const clearAllFilters = () => {
    setProductFilters(initialFilters);
    setMinRange(MIN_PRICE);
    setMaxRange(MAX_PRICE);
    setMinInput(String(MIN_PRICE));
    setMaxInput(String(MAX_PRICE))
  }

  // active filters chips array
  const appliedFiltersChips: AppliedFiltersChipsTy[] = useMemo(() => {
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
          updatePriceRange(initialFilters.minPrice, initialFilters.maxPrice)
          setMinRange(MIN_PRICE)
          setMaxRange(MAX_PRICE)
          setMinInput(String(MIN_PRICE))
          setMaxInput(String(MAX_PRICE))
        }
      })
    }

    return chips;
  }, [productFilters]);

  return (
    <div className="w-full">

      <BreadCrumb />

      <SectionContainer>
        <div className="flex gap-4">

          {/* filters */}
          <ShopFilters
            productFilters={productFilters}
            setProductFilters={setProductFilters}
            priceRange={priceRange}
            clearAllFilters={clearAllFilters}
            onClickFiltersHandlers={onClickFiltersHandlers}
          />

          {/* right side */}
          <div className="flex-1 min-w-0 p-2.5 md:p-0">

            {/* top filters bar */}
            <div className="w-full bg-white p-2 border border-gray-300 rounded-card mb-section">
              top filters bar
            </div>

            {/* appliedFiltersChips */}
            <AppliedFiltersChips
              appliedFiltersChips={appliedFiltersChips}
              productFilters={productFilters}
              clearAllFilters={clearAllFilters}
            />

            {/* products grid/list layout */}
            <ShopGridProducts
              filteredProducts={filteredProducts}
            />
            <ShopListProducts
              filteredProducts={filteredProducts}
            />


          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

export default Shop