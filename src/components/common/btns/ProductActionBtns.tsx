import { AddCartHeartBtn } from "./Button"
import type { AddItemPayloadTy, IProductItem } from "@/types/productTypes"

type Props = {
    addToCart?: () => void,
    addToFav?: () => void,
    quickView?: () => void,
}

const ProductActionBtns = ({ addToCart, addToFav, quickView }: Props) => {
    return (
        <>
            <div className="hidden md:flex flex-col gap-3 absolute right-2.5 md:right-5 bottom-2.5 sm:top-5 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
                <AddCartHeartBtn
                    onClick={addToFav}
                />

                <AddCartHeartBtn
                    variant="cart"
                    onClick={addToCart}
                />

                <AddCartHeartBtn
                    variant="eye"
                    onClick={quickView}
                />

            </div>

            {/* mobile cart btns */}
            <div className="md:hidden flex flex-col gap-3 absolute right-2.5 md:right-5 bottom-2.5 sm:top-5">
                <AddCartHeartBtn
                    onClick={addToCart}
                    variant="cart"
                />
            </div>
        </>
    )
}

export default ProductActionBtns



// -----------------------------
export type GridTypes = {
    addToCart?: () => void,
    addToFav?: () => void,
    quickView?: () => void,
    variant?: 'full' | 'single',
    className?: string,
}

export const ProductGridActionBtns = ({ addToCart, addToFav, quickView, variant = 'full', className }: GridTypes) => {
    return (
        <div
            className={`flex gap-3 ${variant === 'full' ? 'absolute bottom-2.5 lg:opacity-0 lg:translate-y-2' : 'absolute right-5 top-5'} group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out 
                ${className || ""}`}
        >
            {variant === 'full'
                ? (<>
                    <AddCartHeartBtn
                        onClick={addToFav}
                    />

                    <AddCartHeartBtn
                        variant="eye"
                        onClick={quickView}
                    /> </>)
                :
                <AddCartHeartBtn
                    variant="cart"
                    onClick={addToCart}
                />
            }
        </div>
    )
}


// -----------------------------
// mini Products action btns
type MiniProductBtnsProp = {
    variant: 'cart' | 'favs'
    item: IProductItem,
    removeFromClick: (id: string) => void,
    addToClick: (item: AddItemPayloadTy) => void,
    crossAddToClick: (item: AddItemPayloadTy) => void,
    deleteFromClick: (id: string) => void,
}

export const MiniProductActionBtns = ({
    variant, item, removeFromClick, addToClick, crossAddToClick, deleteFromClick

}: MiniProductBtnsProp) => {

    const { id, title, image, price, qty, totalPrice } = item;

    return (
        <div
            className="flex flex-col gap-2
            absolute right-4"
        >
            {/* delete same in both variants */}
            <AddCartHeartBtn
                variant="del"
                onClick={() => deleteFromClick(id)}
            />

            {/* cross-add: cart portal shows heart (→ favs), favs portal shows cart (→ cart) */}

            <AddCartHeartBtn
                variant={variant === "cart" ? "heart" : "cart"}
                onClick={() => crossAddToClick({ id, title, image, price })}
            />

        </div>
    )
}