import type { IOrdersItem } from "@/redux/features/orders/ordersSlice";
import type { IProductItem } from "@/types/productTypes";
import { ShoppingBag } from "lucide-react";
import { NavLink } from "react-router";
import Button from "../../btns/Button";
import OrderCard from "./OrderCard";

type Props = {
  data: IOrdersItem[];
  viewLink?: string;
  onReOrder: (item: IProductItem[]) => void;
};

const OrdersPortalBody = ({
  data,
  viewLink = "/dashboard",
  onReOrder,
}: Props) => {

  if (data.length === 0) {
    return (
      <div className="w-full h-[85vh] flex flex-col gap-4 items-center justify-center text-gray-300">
        <ShoppingBag strokeWidth={1} />
        <p className="heading-4 text-gray-300 capitalize">No orders yet</p>
        <NavLink to="/shop">
          <Button variant="gradient" size="normal">
            Shop Now
          </Button>
        </NavLink>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col pb-10">

      {/* order count summary */}
      <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
        <p className="txt-small tet-gray-500">
          {data.length} {data.length === 1 ? "order" : "orders"} placed
        </p>
      </div>

      {/* orders list - newset first */}
      <div className="flex flex-col divide-x divide-gray-100">
        {/* {data.reverse().map((order) => ( */}
        {[...data].reverse().map((order) => (
          <OrderCard
            key={order.orderId}
            order={order}
            onReOrder={onReOrder}
          />
        ))}
      </div>

      {/* footer */}
      <div className="p-4 mt-2">
        <NavLink to={viewLink}>
          <Button variant="gradient" size="full">
            View All Orders
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default OrdersPortalBody;
