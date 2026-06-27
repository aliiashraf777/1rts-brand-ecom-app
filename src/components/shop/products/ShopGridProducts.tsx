import { type IproductsDataItem } from "@/data/productsData";
import StarsDynamicRatings from "./StarsDynamicRatings";
import { Link } from "react-router";
import { ProductGridActionBtns } from "../../common/btns/ProductActionBtns";
import { useCartActions } from "@/redux/features/cart/useCartActions";
import { useFavsActions } from "@/redux/features/favs/useFavsActions";
import GridProductCard from "./GridProductCard";

type Props = {
  filteredProductsH: IproductsDataItem[];
};

const ShopGridProducts = ({ filteredProductsH }: Props) => {

  return (
    <div className="w-full mb-section-30">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-section">
        {/* {productsData.slice(0, 9).map((item, idx) => ( */}
        {filteredProductsH.slice(1, 10).map((item) => (
          <GridProductCard
            key={`${item.title}`}
            item={item}
            basePath=""
          />
        ))}
      </div>
    </div>
  );
};

export default ShopGridProducts;
