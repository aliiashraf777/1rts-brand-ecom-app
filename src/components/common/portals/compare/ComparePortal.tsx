import { useComparePortalContext } from "@/context/ComparePortalContext"
import { useEffect, useState } from "react";
import { createPortal } from "react-dom"
import PortalsHead from "../PortalsHead";
import CartPortalBody from "../cart/CartPortalBody";
import { useAppSelector } from "@/redux/features/storeHooks";
import { selectCartItemsList, selectCartTotalQty } from "@/redux/features/cart/cartSelectors";
import { useCartActions } from "@/redux/features/cart/useCartActions";
import { selectFavsItemsList, selectFavsTotalQty } from "@/redux/features/favs/favsSelectors";
import { useFavsActions } from "@/redux/features/favs/useFavsActions";
import type { IProductItem } from "@/types/productTypes";

type Props = {}

const ComparePortal = (props: Props) => {

    const { isComparePortalOpen, compareClose } = useComparePortalContext();

    const cartItemsList = useAppSelector(selectCartItemsList);
    const { addToCart, removeFromCart, deleteFromCart, emptyCart } = useCartActions();
    const cartTotalQty = useAppSelector(selectCartTotalQty)

    const favsItemsList = useAppSelector(selectFavsItemsList);
    const { addToFavs, removeFromFavs, deleteFromFavs, emptyFavs } = useFavsActions();
    const favsTotalQty = useAppSelector(selectFavsTotalQty);


    // active tab
    const [activeTab, setActiveTab] = useState('Cart');

    useEffect(() => {

        if (!isComparePortalOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') compareClose();
        }

        document.addEventListener('keydown', onKeyDown)
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKeyDown)
            document.body.style.overflow = "";
        }

    }, [isComparePortalOpen, compareClose])


    // tabsData
    interface ITabsDataItem {
        title: string,
        inItemsQty: number,
    }

    const tabsData: ITabsDataItem[] = [
        {
            title: "Cart",
            inItemsQty: cartTotalQty,
        },
        {
            title: "Favorites",
            inItemsQty: favsTotalQty,
        },
        {
            title: "Orders",
            inItemsQty: 0,
        },
    ]

    return createPortal(
        <div
            aria-hidden={!isComparePortalOpen}
            onClick={() => compareClose()}
            className={`w-screen md:w-[510px] h-screen fixed top-0 right-0 z-50 bg-black/25 backdrop-blur-xs transition-opacity duration-300 ease-out
                ${isComparePortalOpen ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }
            `}
        >
            <aside
                role="dialog"
                aria-modal="true"
                onClick={(e) => e.stopPropagation()}
                className={`w-screen md:w-[450px] h-screen fixed top-0 right-0 bg-white shadow-card-lg overflow-y-scroll scrollbar-none transition-transform duration-300 ease-out
                    ${isComparePortalOpen ? "translate-x-0"
                        : "translate-x-full"
                    }
                `}
            >
                {/* header default */}
                <PortalsHead
                    arrowClick={() => compareClose()}
                    title="Compare Shopping List"
                />

                {/* header tabs */}
                <div className="flex justify-between items-center gap-2 p-4">
                    {tabsData.map((item) => {
                        return (
                            <button
                                onClick={() => setActiveTab(item.title)}
                                className={`flex flex-1 justify-center items-center gap-2 txt-base cursor-pointer
                                    ${activeTab === item.title
                                        ? "text-primary" : "text-gray-500"}
                                `}
                            >
                                <p>
                                    {item.title}
                                </p>

                                <span className="w-6 h-6 rounded-full grid place-items-center txt-tiny text-white bg-primary">
                                    {item.inItemsQty}
                                </span>
                            </button>
                        )
                    })}
                </div>

                {/* header divider lines */}
                <div className="flex px-4">
                    <div
                        className={`flex-1 h-0.5 bg-gray-100 ${activeTab === 'Cart' ? "bg-primary/50" : ""}`}
                    ></div>

                    <div
                        className={`flex-1 h-0.5 bg-gray-100 ${activeTab === 'Favorites' ? "bg-primary/50" : ""}`}
                    ></div>
                    <div
                        className={`flex-1 h-0.5 bg-gray-100 ${activeTab === 'Orders' ? "bg-primary/50" : ""}`}
                    ></div>

                </div>


                {/* portal body */}
                {activeTab === 'Cart' && (
                    <CartPortalBody
                        variant="cart"
                        data={cartItemsList}
                        viewLink="/cart"
                        clearClick={emptyCart}
                        removeFromClick={removeFromCart}
                        addToClick={addToCart}
                        crossAddToClick={addToFavs}
                        deleteFromClick={deleteFromCart}
                    />
                )}

                {activeTab === 'Favorites' && (
                    <CartPortalBody
                        variant="favs"
                        data={favsItemsList}
                        viewLink="/favorites"
                        clearClick={emptyFavs}
                        removeFromClick={removeFromFavs}
                        addToClick={addToFavs}
                        crossAddToClick={addToCart}
                        deleteFromClick={deleteFromFavs}
                    />
                )}


            </aside>
        </div>,
        document.body
    )
}

export default ComparePortal