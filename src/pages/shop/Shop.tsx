import SectionContainer from "@/components/common/SectionContainer"
import BreadCrumb from "@/components/shop/BreadCrumb"
import ShopFilters from "@/components/shop/ShopFilters"
import ShopGridProducts from "@/components/shop/ShopGridProducts"
import ShopListProducts from "@/components/shop/ShopListProducts"
import { productsData } from "@/data/productsData"
import { useMemo, useState } from "react"


export type ProductFiltersTy = {
  categoryId: string[],
  brandIds: string[],
  featureIds: string[],
  conditionId: string | null,
  rating: number | null,
  minPrice: number,
  maxPrice: number,
};

const initialFilters: ProductFiltersTy = {
  categoryId: [],
  brandIds: [],
  featureIds: [],
  conditionId: null,
  rating: null,
  minPrice: 0,
  maxPrice: 1000,
};

type Props = {}

const Shop = (props: Props) => {

  // filters state
  const [productFilters, setProductsFilters] = useState(initialFilters);

  const filteredProducts = useMemo(() => (
    productsData.filter((product) => {

      const matchedCategory =
        productFilters.categoryId.length === 0 ||
        (product.categoryId?.some((catId) => productFilters.categoryId.includes(catId)) ?? false)

      const matchedBrand =
        productFilters.brandIds.length === 0 ||
        (product.brandId && productFilters.brandIds.includes(product.brandId));

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
        !productFilters.conditionId ||
        product.conditionId === productFilters.conditionId;

      const matchedRatings =
        !productFilters.rating ||
        productRating >= productFilters.rating;

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

  return (
    <div className="w-full">

      <BreadCrumb />

      <SectionContainer>
        <div className="flex gap-4">

          {/* filters */}
          <ShopFilters
            productFilters={productFilters}
            setProductFilters={setProductsFilters}
          />

          {/* right side */}
          <div className="flex-1 min-w-0 p-2.5 md:p-0">

            {/* top filters bar */}
            <div className="w-full bg-white p-2 border border-gray-300 rounded-card mb-section">
              top filters bar
            </div>

            {/* products grid/list layout */}
            <ShopListProducts
              filteredProducts={filteredProducts}
            />

            <ShopGridProducts
              filteredProducts={filteredProducts}
            />

          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

export default Shop