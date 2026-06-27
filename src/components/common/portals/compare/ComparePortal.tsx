import { useComparePortalContext } from "@/context/ComparePortalContext";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import PortalsHead from "../PortalsHead";
import CartPortalBody from "../cart/CartPortalBody";
import { useAppSelector } from "@/redux/features/storeHooks";
import { selectCartItemsList } from "@/redux/features/cart/cartSelectors";
import { useCartActions } from "@/redux/features/cart/useCartActions";
import { selectFavsItemsList } from "@/redux/features/favs/favsSelectors";
import { useFavsActions } from "@/redux/features/favs/useFavsActions";
import { selectOrdersItemsList } from "@/redux/features/orders/ordersSelectors";
import { useOrdersActions } from "@/redux/features/orders/useOrdersActions";
import OrdersPortalBody from "./OrdersPortalBody";
import type { IProductItem } from "@/types/productTypes";

type Props = {};

const ComparePortal = (props: Props) => {
  const { isComparePortalOpen, compareClose } = useComparePortalContext();

  const cartItemsList = useAppSelector(selectCartItemsList);
  const { addToCart, removeFromCart, deleteFromCart, emptyCart } =
    useCartActions();

  const favsItemsList = useAppSelector(selectFavsItemsList);
  const { addToFavs, removeFromFavs, deleteFromFavs, emptyFavs } =
    useFavsActions();

  // orders slice
  const ordersItemsList = useAppSelector(selectOrdersItemsList);
  const { placeCartOrder, placeFavsOrder, deleteFromOrder, emptyOrderHistory } = useOrdersActions();

  // onReOrder = place a new order from past order's items.
  // then add these orders back to cart, so they appear in cart tab for reorder
  const onReOrder = (items: IProductItem[]) => {
    items.forEach((item) =>
      addToCart({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
      }),
    );
  };

  // active tab
  const [activeTab, setActiveTab] = useState("Cart");

  useEffect(() => {
    if (!isComparePortalOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") compareClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isComparePortalOpen, compareClose]);

  // tabsData
  interface ITabsDataItem {
    id: string;
    title: string;
    inItemsQty: number;
  }

  const tabsData: ITabsDataItem[] = [
    {
      id: "tab1",
      title: "Cart",
      inItemsQty: cartItemsList.length,
    },
    {
      id: "tab2",
      title: "Favorites",
      inItemsQty: favsItemsList.length,
    },
    {
      id: "tab3",
      title: "Orders",
      inItemsQty: ordersItemsList.length,
    },
  ];

  return createPortal(
    <div
      aria-hidden={!isComparePortalOpen}
      onClick={() => compareClose()}
      className={`w-screen md:w-[510px] h-screen fixed top-0 right-0 z-50 bg-black/25 backdrop-blur-xs transition-opacity duration-300 ease-out ${isComparePortalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
    >
      <aside
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className={`w-screen md:w-[450px] h-screen fixed top-0 right-0 bg-white shadow-card-lg overflow-y-scroll scrollbar-none transition-transform duration-300 ease-out ${isComparePortalOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* header default */}
        <PortalsHead
          arrowClick={() => compareClose()}
          title="Compare List"
        // clearClick={emptyOrderHistory}
        />

        {/* header tabs */}
        <div className="flex justify-between items-center gap-2 py-4">
          {tabsData.map((item) => {
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.title)}
                className={`flex flex-1 justify-center items-center gap-2 txt-base cursor-pointer
                  ${activeTab === item.title ? "text-primary" : "text-gray-500"
                  }`}
              >
                <p>{item.title}</p>

                <span className="w-6 h-6 rounded-full grid place-items-center txt-tiny text-white bg-primary">
                  {item.inItemsQty}
                </span>
              </button>
            );
          })}
        </div>

        {/* header divider lines */}
        <div className="flex px-4x">
          <div
            className={`flex-1 h-px bg-gray-100 ${activeTab === "Cart" ? "bg-primary/50" : ""}`}
          ></div>

          <div
            className={`flex-1 h-px bg-gray-100 ${activeTab === "Favorites" ? "bg-primary/50" : ""}`}
          ></div>
          <div
            className={`flex-1 h-px bg-gray-100 ${activeTab === "Orders" ? "bg-primary/50" : ""}`}
          ></div>
        </div>

        {/* portal body */}
        {activeTab === "Cart" && (
          <CartPortalBody
            variant="cart"
            data={cartItemsList}
            viewLink="/cart"
            clearClick={emptyCart}
            removeFromClick={removeFromCart}
            addToClick={addToCart}
            crossAddToClick={addToFavs}
            deleteFromClick={deleteFromCart}
            placeOrder={() => placeCartOrder(cartItemsList)}
          />
        )}

        {activeTab === "Favorites" && (
          <CartPortalBody
            variant="favs"
            data={favsItemsList}
            viewLink="/favorites"
            clearClick={emptyFavs}
            removeFromClick={removeFromFavs}
            addToClick={addToFavs}
            crossAddToClick={addToCart}
            deleteFromClick={deleteFromFavs}
            placeOrder={() => placeFavsOrder(favsItemsList)}
          />
        )}

        {activeTab === "Orders" && (
          <OrdersPortalBody
            data={ordersItemsList}
            viewLink="/dashboard"
            onReOrder={onReOrder}
            clearClick={emptyOrderHistory}
            deleteFromOrder={deleteFromOrder}
          />
        )}
      </aside>
    </div>,
    document.body,
  );
};

export default ComparePortal;
