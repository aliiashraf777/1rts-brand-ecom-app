import { type IproductsDataItem } from "@/data/productsData";
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
            key={`${item.id}`}
            item={item}
            basePath="/shop"
          />
        ))}
      </div>
    </div>
  );
};

export default ShopGridProducts;
