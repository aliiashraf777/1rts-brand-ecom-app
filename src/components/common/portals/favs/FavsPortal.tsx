import { useFavsPortalContext } from "@/context/FavsPortalContext"
import { createPortal } from "react-dom"
import PortalsHead from "../PortalsHead";
import CartPortalBody from "../cart/CartPortalBody";
import { useAppSelector } from "@/redux/features/storeHooks";
import { selectFavsItemsList } from "@/redux/features/favs/favsSelectors";
import { useFavsActions } from "@/redux/features/favs/useFavsActions";

type Props = {}

const FavsPortal = (props: Props) => {

    const { isFavsPortalOpen, favsClose } = useFavsPortalContext();
    const favsItemsList = useAppSelector(selectFavsItemsList);
    const { addToFavs, removeFromFavs, deleteFromFavs, emptyFavs } = useFavsActions();

    return createPortal(
        <div
            aria-hidden={!isFavsPortalOpen}
            onClick={favsClose}
            className={`fixed top-0 right-0 z-50 bg-black/25 backdrop-blur-xs w-screen md:w-[460px] h-screen transition-opacity duration-300 ease-out
                ${isFavsPortalOpen ? "opacity-100" : "opacity-0 pointer-events-none"}    
            `}
        >
            <aside
                role="dialog"
                aria-modal="true"
                onClick={(e) => e.stopPropagation()}
                className={`fixed right-0 top-0 h-screen w-screen md:w-[400px] bg-white shadow-card-lg overflow-y-scroll scrollbar-none transition-transform duration-300 ease-out 
                    ${isFavsPortalOpen ? "translate-x-0" : "translate-x-full"}    
                `}
            >
                {/* head */}
                <PortalsHead
                    arrowClick={() => favsClose()}
                    title="Wishlist items"
                />

                <CartPortalBody
                    variant="favs"
                    data={favsItemsList}
                    viewLink="/favorites"
                    clearClick={emptyFavs}
                    removeFromClick={removeFromFavs}
                    addToClick={addToFavs}
                    deleteFromClick={deleteFromFavs}
                />

            </aside>
        </div>,
        document.body
    )
}

export default FavsPortal