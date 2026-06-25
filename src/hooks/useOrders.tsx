import type { IProductItem } from "@/types/productTypes";
import { useMemo } from "react";

type Props = {
  cartItemsList: IProductItem[];
  orderAddedFromCart: () => void;
};

const useOrders = ({ cartItemsList, orderAddedFromCart }: Props) => {
  const ordersList: IProductItem[] = [];

  return useMemo(() => {
    const onPlaceOrder = () => {
      cartItemsList.forEach((item) => {
        const itm = cartItemsList.find((i) => i === item);

        if (itm) {
          ordersList.push({
            id: itm.id,
            title: itm.title,
            image: itm.image,
            price: itm.price,
            qty: itm.qty,
            totalPrice: itm.totalPrice,
          });
          orderAddedFromCart();
        }
      });
    };

    return { ordersList, onPlaceOrder };
  }, [cartItemsList]);
};

export default useOrders;
