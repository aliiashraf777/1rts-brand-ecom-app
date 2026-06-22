import { productsData, type IproductsDataItem } from "@/data/productsData"
import StarsDynamicRatings from "./StarsDynamicRatings"
import { AddCartHeartBtn } from "../common/btns/Button"
import { Link } from "react-router"
import { ProductGridActionBtns } from "../common/btns/ProductActionBtns"
import { useCartActions } from "@/redux/features/cart/useCartActions"
import { useFavsActions } from "@/redux/features/favs/useFavsActions"

type Props = {
  filteredProductsH: IproductsDataItem[],
}

const ShopGridProducts = ({ filteredProductsH }: Props) => {

  const { addToCart } = useCartActions();
  const { addToFavs } = useFavsActions();

  return (
    <div className="w-full mb-section-30">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-section">
        {/* {productsData.slice(0, 9).map((item, idx) => ( */}
        {filteredProductsH.slice(1, 10).map((item, idx) => (
          <div
            key={`${item.title}-${idx}`}
            className="brand-card group transition-all duration-300 ease-out hover:-translate-y-1 group"
          >
            {/* img */}
            <div
              className="flex items-center justify-center aspect-squarex h-[230px] w-[230px]x border-b border-gray-200 relative">
              <img
                src={item.image}
                alt={item.title}
                className="object-contain transition-all duration-300 ease-out group-hover:scale-105"
              />

              <ProductGridActionBtns
                addToFav={() => addToFavs({
                  id: item.id,
                  title: item.title,
                  image: item.image,
                  price: item.price,
                })}
              // quickView={}
              />
            </div>

            {/* textBox */}
            <div className="px-section py-4.5 relative">

              {/* price */}
              <div className="flex items-center gap-2 mb-2">
                <h4 className="heading-h4">
                  ${item.price}
                </h4>
                {item.oldPrice &&
                  <p className="txt-body-medium line-through text-gray-500">
                    ${item?.oldPrice}
                  </p>
                }
              </div>

              {/* ratings & details */}
              <div className="flex items-center mb-2.5">
                <StarsDynamicRatings
                  rating={Number(item.ratings)}
                />

                <p className="txt-small text-card-orange md:txt-base md:text-card-orange pl-2">
                  {item.ratings}
                </p>
              </div>

              {/* title */}
              <Link
                to={item.detailsLink}
                className="txt-body text-gray-800 capitalize w-[200px]"
              >
                {item.title}
              </Link>

              {/* add to wishlist btn */}
              <ProductGridActionBtns
                variant="single"
                addToCart={() => addToCart({
                  id: item.id,
                  title: item.title,
                  image: item.image,
                  price: item.price
                })}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShopGridProducts