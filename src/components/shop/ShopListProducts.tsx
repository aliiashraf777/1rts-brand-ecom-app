import { productsData, type IproductsDataItem } from "@/data/productsData"
import { AddCartHeartBtn, LinkBtn } from "../common/Button"
import StarsDynamicRatings from "./StarsDynamicRatings"

type Props = {
    filteredProducts: IproductsDataItem[],
}

const ShopListProducts = ({ filteredProducts }: Props) => {
    return (
        <div className="w-full mb-section-30">
            <div className="flex flex-col gap-2.5">
                {/* {productsData.slice(1, 8).map((item, idx) => { */}
                {filteredProducts.slice(1, 8).map((item, idx) => {
                    return (
                        <div
                            key={`${item.title}-${idx}`}
                            className="w-full bg-white border border-gray-300 rounded-card flex relative group p-2.5"
                        >
                            {/* image */}
                            <div className="flex w-[100px] h-[100px] md:w-[210px] md:h-[210px] shrink-0 justify-center items-center self-center md:self-auto">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full md:w-auto md:h-auto object-contain transition-all duration-300 ease-out group-hover:scale-105"
                                />
                            </div>

                            {/* context */}
                            <div className="flex flex-col pl-2.5 pt-0 md:pt-4 pb-0 md:pb-5">
                                <p className="txt-small md:txt-body-title capitalize pb-1 md:pb-4">
                                    {item.title}
                                </p>

                                <div className="flex items-center gap-2">
                                    <h4 className="txt-body-medium md:heading-h4">
                                        ${item.price}
                                    </h4>
                                    {item.oldPrice &&
                                        <p className="txt-body-medium line-through text-gray-500">
                                            ${item?.oldPrice}
                                        </p>
                                    }
                                </div>

                                {/* ratings & details */}
                                <div className="flex items-center gap-1 md:gap-2.5 mb-1.5 md:mb-3 flex-wrap">
                                    <div className="flex">
                                        <StarsDynamicRatings
                                            rating={Number(item.ratings)}
                                        />

                                        <p className="txt-small text-card-orange md:txt-base md:text-card-orange pl-2">
                                            {item.ratings}
                                        </p>
                                    </div>

                                    {/* period */}
                                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>

                                    <p className="txt-small md:text-base text-gray-500">
                                        {item.orders} orders
                                    </p>

                                    {/* period */}
                                    <div className="hidden md:blcok w-1.5 h-1.5 bg-gray-300 rounded-full"></div>

                                    <p className="txt-small md:text-base text-brand-green">
                                        Free shipping
                                    </p>
                                </div>

                                {/* description & cta */}
                                <div className="flex flex-col gap-0.5 md:gap-2.5">
                                    <p className="hidden lg:inline-block max-w-[550px] txt-body text-gray-600">
                                        {item.desc}
                                    </p>

                                    <LinkBtn
                                        to={item.detailsLink}
                                        className=""
                                    >
                                        View details
                                    </LinkBtn>
                                </div>
                            </div>

                            {/* add to wishlist btn */}
                            <AddCartHeartBtn
                                className="absolute right-2.5 md:right-5 bottom-2.5 sm:top-5"
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ShopListProducts