import { useCartPortalContext } from "@/context/CartPortalContext";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import CartPortalBody from "./CartPortalBody";
import PortalsHead from "../PortalsHead";
import { useAppSelector } from "@/redux/features/storeHooks";
import { selectCartItemsList } from "@/redux/features/cart/cartSelectors";
import { useCartActions } from "@/redux/features/cart/useCartActions";

type Props = {}

const CartPortal = (props: Props) => {

    const { isCartPortalOpen, cartClose } = useCartPortalContext();
    const cartItemsList = useAppSelector(selectCartItemsList);
    const { addToCart, removeFromCart, deleteFromCart, emptyCart } = useCartActions();

    useEffect(() => {
        if (!isCartPortalOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') cartClose();
        }

        document.addEventListener('keydown', onKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };

    }, [isCartPortalOpen, cartClose])

    return createPortal(
        <div
            aria-hidden={!isCartPortalOpen}
            onClick={cartClose}
            className={`fixed top-0 right-0 z-50 bg-black/25 backdrop-blur-xs w-screen md:w-[460px] h-screen transition-opacity duration-300 ease-out 
                ${isCartPortalOpen ? "opacity-100" : "pointer-events-none opacity-0"}
            `}
        >
            <aside
                role="dialog"
                aria-modal='true'
                onClick={(e) => e.stopPropagation()}
                className={`fixed right-0 top-0 h-screen w-screen md:w-[400px] bg-white shadow-card-lg overflow-y-scroll scrollbar-none transition-transform duration-300 ease-out
                    ${isCartPortalOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                {/* header */}
                <PortalsHead
                    arrowClick={() => cartClose()}
                    title="Shopping cart"
                />

                {/* body */}
                <CartPortalBody
                    variant="cart"
                    data={cartItemsList}
                    viewLink="/cart"
                    clearClick={emptyCart}
                    removeFromClick={removeFromCart}
                    addToClick={addToCart}
                    deleteFromClick={deleteFromCart}
                />
            </aside>
        </div>,
        document.body
    );
};

export default CartPortal