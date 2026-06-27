import type { IProductItem } from "@/types/productTypes"

type Props = {
    item: IProductItem;
}

const OrderItemsList = ({ item }: Props) => {
    return (
        <div className="flex items-center gap-2.5 py-1.5">

            {/* image */}
            <div className="w-[48px] h-[48px] shrink-0 rounded-card border border-gray-100 grid place-items-center p-1">
                <img
                    src={item.image}
                    alt={item.title}
                    className="object-contain"
                />
            </div>

            {/* name + qty */}
            <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                <p className="txt-small text-text-primary truncate">
                    {item.title}
                </p>
                <p className="txt-tiny text-gray-400">
                    Qty: {item.qty}
                </p>
            </div>

            {/* line total */}
            <div className="txt-small text-text-primary shrink-0">
                ${item.totalPrice.toFixed(2)}
            </div>

        </div>
    )
}

export default OrderItemsList