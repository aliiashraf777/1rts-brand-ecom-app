import type { IOrdersItem } from "@/redux/features/orders/ordersSlice";
import type { IProductItem } from "@/types/productTypes";
import { ShoppingBag } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import Button from "../../btns/Button";
import OrderCard from "./OrderCard";

type Props = {
  data: IOrdersItem[];
  viewLink?: string;
  onReOrder: (item: IProductItem[]) => void;
  clearClick?: () => void;
  deleteFromOrder: (orderId: string) => void;
};

const OrdersPortalBody = ({
  data,
  viewLink = "/dashboard",
  onReOrder,
  clearClick,
  deleteFromOrder,
}: Props) => {

  const navigate = useNavigate();

  if (data.length === 0) {
    return (
      <div className="w-full h-[85vh] flex flex-col gap-4 items-center justify-center text-gray-300 heading-h2 md:text-5xl capitalize text-center">
        <ShoppingBag />
        <p className="text-gray-200">No orders yet</p>
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
      <div className="flex flex-col divide-y divide-gray-100">
        {/* {data.reverse().map((order) => ( */}
        {[...data].reverse().map((order) => (
          <OrderCard
            key={order.orderId}
            order={order}
            onReOrder={onReOrder}
            deleteFromOrder={() => deleteFromOrder(order.orderId)}
          />
        ))}
      </div>

      {/* footer */}
      <div className="flex flex-col gap-2 p-4 mt-2">
        <Button variant="gradient" size="full"
          onClick={() => navigate(viewLink)}
        >
          View All Orders
        </Button>

        <Button
          variant="white"
          size="full"
          onClick={clearClick}
          className="border border-gray-300"
        >
          Clear Orders
        </Button>
      </div>
    </div>
  );
};

export default OrdersPortalBody;
