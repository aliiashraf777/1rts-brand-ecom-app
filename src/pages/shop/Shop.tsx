import SectionContainer from "@/components/common/SectionContainer"
import AppliedFiltersChips from "@/components/shop/AppliedFiltersChips"
import BreadCrumb from "@/components/shop/BreadCrumb"
import ShopFilters from "@/components/shop/ShopFilters"
import ShopGridProducts from "@/components/shop/ShopGridProducts"
import ShopListProducts from "@/components/shop/ShopListProducts"
import useFilteredProducts from "@/hooks/useFilteredProducts"
import useFiltersChips from "@/hooks/useFiltersChips"
import usePriceRange from "@/hooks/usePriceRange"
import useProductFilters from "@/hooks/useProductFilters"


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

  const priceRangeH = usePriceRange();

  const { productFilters, setProductFilters, filtersHandlers, clearAllFilters } = useProductFilters();

  const filteredProductsH = useFilteredProducts(productFilters);

  const appliedFiltersChipsH = useFiltersChips(productFilters, setProductFilters, priceRangeH.reset);

  return (
    <div className="w-full">

      <BreadCrumb />

      <SectionContainer>
        <div className="flex gap-4">

          {/* filters */}
          <ShopFilters
            productFilters={productFilters}
            setProductFilters={setProductFilters}
            priceRangeH={{
              ...priceRangeH,
              applyPriceRange: () => priceRangeH.applyPriceRange(filtersHandlers.updatePriceRange)
            }}
            clearAllFilters={() => clearAllFilters(priceRangeH.reset)}
            onClickFiltersHandlers={filtersHandlers}
          />

          {/* right side */}
          <div className="flex-1 min-w-0 p-2.5 md:p-0">

            {/* top filters bar */}
            <div className="w-full bg-white p-2 border border-gray-300 rounded-card mb-section">
              12,911 items in <strong>Mobile accessory</strong>
            </div>

            {/* appliedFiltersChips */}
            <AppliedFiltersChips
              appliedFiltersChipsH={appliedFiltersChipsH}
              productFilters={productFilters}
              clearAllFilters={() => clearAllFilters(priceRangeH.reset)}
            />

            {/* products grid/list layout */}
            <ShopGridProducts
              filteredProductsH={filteredProductsH}
            />
            <ShopListProducts
              filteredProductsH={filteredProductsH}
            />

          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

export default Shop