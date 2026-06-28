import { ProductGridActionBtns } from "@/components/common/btns/ProductActionBtns"
import { Link } from "react-router"
import StarsDynamicRatings from "./StarsDynamicRatings"
import { useCartActions } from "@/redux/features/cart/useCartActions"
import { useFavsActions } from "@/redux/features/favs/useFavsActions"
import type { IproductsDataItem } from "@/data/productsData"

type Props = {
  item: IproductsDataItem;
  basePath: string,
}

const GridProductCard = ({ item, basePath }: Props) => {

  const { addToCart } = useCartActions();
  const { addToFavs } = useFavsActions();

  const isHomePage = location.pathname === "/";
  const isShopPage = location.pathname === "/shop";
  const isProductDetailPage = location.pathname.startsWith("/product-details/")

  const productLink = isShopPage || isProductDetailPage
    ? `/shop/product-details/${item.id}`
    : `/product-details/${item.id}`;

  const productDynamicLink = `${basePath}/product-details/${item.id}`;

  return (
    <div
      className="brand-card group transition-all duration-300 ease-out hover:-translate-y-1 group"
    >
      {/* img */}
      <div className="flex items-center justify-center aspect-squarex h-[230px] w-[230px]x border-b border-gray-200 relative">
        <img
          src={item.image}
          alt={item.title}
          className="object-contain transition-all duration-300 ease-out group-hover:scale-105"
        />

        <ProductGridActionBtns
          addToFav={() =>
            addToFavs({
              id: item.id,
              title: item.title,
              image: item.image,
              price: item.price,
            })
          }
        // quickView={}
        />
      </div>

      {/* textBox */}
      <div className="px-section py-4.5 relative">
        {/* price */}
        <div className="flex items-center gap-2 mb-2">
          <h4 className="heading-h4">${item.price}</h4>
          {item.oldPrice && (
            <p className="txt-body-medium line-through text-gray-500">
              ${item?.oldPrice}
            </p>
          )}
        </div>

        {/* ratings & details */}
        <div className="flex items-center mb-2.5">
          <StarsDynamicRatings rating={Number(item.ratings)} />

          <p className="txt-small text-card-orange md:txt-base md:text-card-orange pl-2">
            {item.ratings}
          </p>
        </div>

        {/* title */}
        <Link
          // to={item.detailsLink}
          to={productDynamicLink}
          className="txt-body text-gray-800 capitalize w-[200px]"
        >
          {item.title}
        </Link>

        {/* add to wishlist btn */}
        <ProductGridActionBtns
          variant="single"
          addToCart={() =>
            addToCart({
              id: item.id,
              title: item.title,
              image: item.image,
              price: item.price,
            })
          }
        />
      </div>
    </div>
  )
}

export default GridProductCard