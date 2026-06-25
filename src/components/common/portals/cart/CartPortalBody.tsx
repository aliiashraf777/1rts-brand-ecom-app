import MiniProductCard from "@/components/shop/products/MiniProductCard";
import { NavLink } from "react-router";
import Button from "../../btns/Button";
import type { AddItemPayloadTy, IProductItem } from "@/types/productTypes";

type Props = {
  variant: "cart" | "favs";
  data: IProductItem[];
  viewLink?: string;
  clearClick?: () => void;
  removeFromClick: (id: string) => void;
  addToClick: (item: AddItemPayloadTy) => void;
  crossAddToClick: (item: AddItemPayloadTy) => void;
  deleteFromClick: (id: string) => void;
  placeOrder: (item: IProductItem[]) => void
};

const CartPortalBody = ({
  variant,
  data,
  viewLink = "",
  clearClick,
  removeFromClick,
  addToClick,
  crossAddToClick,
  deleteFromClick,
  placeOrder,
}: Props) => {
  return (
    <>
      <div className={`w-full flex flex-col`}>
        {data.length > 0 ? (
          <div className="w-full">
            {data.map((item) => (
              <MiniProductCard
                key={item.id}
                variant={variant}
                item={item}
                removeFromClick={removeFromClick}
                addToClick={addToClick}
                crossAddToClick={crossAddToClick}
                deleteFromClick={deleteFromClick}
              />
            ))}
          </div>
        ) : (
          <div className="w-full h-[85vh] grid place-items-center heading-h1 md:text-5xl text-gray-200 capitalize text-center">
            <p>{variant === "cart" ? "Empty Cart" : "Empty Favorites"}</p>
          </div>
        )}
      </div>

      {/* footer */}
      {data.length > 0 && (
        <div className="flex flex-col gap-2 p-4 mb-10">
          <NavLink to={viewLink}>
            <Button variant="gradient" size="full">
              {variant === "cart" ? "View Cart" : "View Favorites"}
            </Button>
          </NavLink>

          <Button variant="white" size="full" onClick={placeOrder}>
            place order
          </Button>

          <Button variant="white" size="full" onClick={clearClick}>
            {variant === "cart" ? "Clear Cart" : "Clear Favorites"}
          </Button>
        </div>
      )}
    </>
  );
};

export default CartPortalBody;
