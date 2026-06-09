import SectionContainer from "@/components/common/SectionContainer"
import BreadCrumb from "@/components/shop/BreadCrumb"
import ShopFilters from "@/components/shop/ShopFilters"
import ShopGridProducts from "@/components/shop/ShopGridProducts"
import ShopListProducts from "@/components/shop/ShopListProducts"

type Props = {}

const Shop = (props: Props) => {
  return (
    <div className="w-full">

      <BreadCrumb />

      <SectionContainer>
        <div className="flex gap-4">

          {/* filters */}
          <ShopFilters />

          {/* right side */}
          <div className="flex-1 min-w-0 p-2.5 md:p-0">

            {/* top filters bar */}
            <div className="w-full bg-white p-2 border border-gray-300 rounded-card mb-section">
              top filters bar
            </div>

            {/* products grid/list layout */}
            <ShopGridProducts />
            
            <ShopListProducts />


          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

export default Shop