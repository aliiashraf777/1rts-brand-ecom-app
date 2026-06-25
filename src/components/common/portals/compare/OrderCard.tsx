import type { IOrdersItem } from "@/redux/features/orders/ordersSlice";
import type { IProductItem } from "@/types/productTypes";
import { ChevronDown, RotateCcw } from "lucide-react";
import { useState } from "react";
import OrderItemsList from "./OrderItemsList";

type OrderCardProps = {
    order: IOrdersItem;
    onReOrder: (item: IProductItem[]) => void;
};

const OrderCard = ({ order, onReOrder }: OrderCardProps) => {
    const [isOrderExpanded, setIsOrderExpanded] = useState(false);

    const formattedDate = new Date(order.placedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    const formattedTime = new Date(order.placedAt).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return <div className="flex flex-col gap-3 p-4">

        {/* order header */}
        <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col gap-0.5">
                {/* order id */}
                <p className="txt-tiny text-gray-400 font-mono">
                    #{order.orderId.slice(0, 8).toUpperCase()}
                </p>

                {/* date + time */}
                <p className="txt-small text-gray-600">
                    {formattedDate} · {formattedTime}
                </p>

                {/* item count */}
                <p className="txt-tiny text-gray-400">
                    {order.items.length} {order.items.length === 1 ? "item" : "items"}
                </p>
            </div>

            {/* total + reorder */}
            <div className="flex flex-col items-end gap-2 shrink-0">
                <p className="txt-body-title text-text-primary">
                    ${order.total.toFixed(2)}
                </p>

                <button
                    type="button"
                    onClick={() => onReOrder(order.items)}
                    className="flex items-center gap-1 txt-tiny text-primary border border-primary rounded-card px-2 py-1 hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"
                >
                    <RotateCcw size={12} />
                    Reorder
                </button>
            </div>
        </div>

        {/* expand orders toggler */}
        <button
            type="button"
            onClick={() => setIsOrderExpanded((prev) => !prev)}
            className="w-max flex items-center gap-1 txt-tiny text-gray-400 hover:text-gray-600 transition-colors duration-300 ease-out cursor-poitner"
        >
            <ChevronDown
                className={`w-4 h-4 ${isOrderExpanded ? "rotate-180" : ''}`}
            />
            {isOrderExpanded ? "Hide items" : "Show items"}
        </button>

        {/* items-list expandable */}
        {isOrderExpanded && (
            <div className="flex flex-col gap-2 pl-1">
                {order.items.map((item) => (
                    <OrderItemsList
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
        )}
    </div>;
};

export default OrderCard;
