import { MiniProductActionBtns } from "../common/btns/ProductActionBtns";
import type { AddItemPayloadTy, IProductItem } from "@/types/productTypes";

type Props = {
    variant: 'cart' | 'favs'
    item: IProductItem,
    removeFromClick: (id: string) => void,
    addToClick: (item: AddItemPayloadTy) => void,
    deleteFromClick: (id: string) => void,
}

const MiniProductCard = ({
    variant, item, removeFromClick, addToClick, deleteFromClick }: Props
) => {

    const { id, title, image, price, qty, totalPrice } = item;

    return (
        <div className="w-full p-4 flex flex-col gap-5 border-b border-gray-200 relative">
            {/* image and title */}
            <div className="flex gap-2.5 group">

                <div className="w-[80px] h-[80px] grid place-items-center p-1 rounded-card border border-gray-200">
                    <img
                        src={image}
                        alt={title}
                        className="object-contain group-hover:scale-105 transition-all duration-300 ease-out"
                    />
                </div>

                <div className="flex flex-col gap-1 max-w-50">
                    <h3 className="txt-base max-w-[170px]">
                        {title}
                    </h3>
                    <p className="txt-tiny text-[13px]">
                        Size: medium, Color: blue, Seller: Artel Market
                    </p>
                </div>
            </div>

            {/* price & btns */}
            <div className="flex items-center justify-between gap-2">

                <div className="flex items-center border border-gray-300 rounded-card">
                    <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() => removeFromClick(id)}
                        className="w-[40px] h-[40px] txt-body-title text-2xl text-gray-500 grid place-items-center border-r border-gray-300 cursor-pointer"
                    >
                        -
                    </button>

                    <input
                        type="text"
                        name=""
                        id=""
                        readOnly
                        value={qty}
                        className="w-[70px] h-[40px] txt-body-title grid place-items-center border-r border-gray-300 outline-none focus:outline-none"
                    />

                    <button
                        type="button"
                        aria-label="increase quantity"
                        onClick={() => addToClick({ id, title, image, price })}
                        className="w-[40px] h-[40px] txt-body-title text-2xl text-gray-500 grid place-items-center cursor-pointer"
                    >
                        +
                    </button>
                </div>

                <h3 className="txt-body-title">
                    ${totalPrice.toFixed(2)}
                </h3>
            </div>

            {/* miniProductAction btns */}
            <MiniProductActionBtns
                variant={variant}
                item={item}
                removeFromClick={removeFromClick}
                addToClick={addToClick}
                deleteFromClick={deleteFromClick}
            />
        </div>
    )
}

export default MiniProductCard