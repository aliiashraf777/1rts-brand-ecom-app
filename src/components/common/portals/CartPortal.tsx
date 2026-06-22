import { useCartPortalContext } from "@/context/CartPortalContext";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import CartPortalBody from "./CartPortalBody";

type Props = {}

const CartPortal = (props: Props) => {

    const { isCartPortalOpen, cartClose } = useCartPortalContext();

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
            aria-hidden='true'
            onClick={cartClose}
            className={`fixed top-0 right-0 z-50 bg-black/25 w-screen md:w-[460px] h-screen transition-opacity duration-300 ease-out 
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
                <div className="flex items-center gap-4 p-4 heading-h5">
                    <ArrowLeft
                        className="cursor-pointer"
                        onClick={() => cartClose()}
                    />

                    <p>Shopping cart</p>
                </div>

                <div className="flex">
                    <div className={`flex-1 h-0.5 bg-gray-100`}
                    ></div>
                </div>

                {/* body */}
                <CartPortalBody />
            </aside>
        </div>,
        document.body
    );
};

export default CartPortal