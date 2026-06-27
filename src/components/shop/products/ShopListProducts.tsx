import { type IproductsDataItem } from "@/data/productsData";
import ListProductCard from "./ListProductCard";

type Props = {
  filteredProductsH: IproductsDataItem[];
  basePath: string
};

const ShopListProducts = ({ filteredProductsH, basePath }: Props) => {

  return (
    <div className="w-full mb-section-30">
      <div className="flex flex-col gap-2.5">
        {/* {productsData.slice(1, 8).map((item, idx) => { */}
        {filteredProductsH.slice(1, 8).map((item) => {
          return (
            <ListProductCard
              key={item.id}
              item={item}
              basePath={basePath}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShopListProducts;
