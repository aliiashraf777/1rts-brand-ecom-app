import MiniProductCard from "@/components/shop/products/MiniProductCard";
import { Navigate, NavLink, useNavigate } from "react-router";
import Button from "../../btns/Button";
import type { AddItemPayloadTy, IProductItem } from "@/types/productTypes";
import { ShoppingBag } from "lucide-react";

type Props = {
  variant: "cart" | "favs";
  data: IProductItem[];
  viewLink?: string;
  clearClick?: () => void;
  removeFromClick: (id: string) => void;
  addToClick: (item: AddItemPayloadTy) => void;
  crossAddToClick: (item: AddItemPayloadTy) => void;
  deleteFromClick: (id: string) => void;
  placeOrder: () => void
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

  const navigate = useNavigate()

  if (data.length === 0) {
    return (
      <div className="w-full h-[85vh] flex flex-col gap-4 items-center justify-center text-gray-300 heading-h2 md:text-5xl capitalize text-center">
        <ShoppingBag />
        <p className="text-gray-200">
          {variant === "cart" ? "Empty Cart" : "Empty Favorites"}
        </p>

        <NavLink
          to={"/shop"}
        >
          <Button
            variant="gradient"
            size="normal"
          >
            Shop Now
          </Button>
        </NavLink>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col pb-10">
      <div className="w-full flex flex-col">
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
      </div>

      {/* footer */}
      <div className="flex-1 flex flex-col gap-2 p-4 mb-10">

        <div className="w-full flex gap-2">
          <Button variant="gradient" size="full"
            onClick={() => navigate(viewLink)}
          >
            {variant === "cart" ? "View Cart" : "View Favorites"}
          </Button>

          <Button variant="white" size="full" onClick={clearClick}>
            {variant === "cart" ? "Clear Cart" : "Clear Favorites"}
          </Button>
        </div>

        <Button variant="white" size="full" onClick={placeOrder}>
          place order
        </Button>
      </div>
    </div>
  );
};

export default CartPortalBody;
