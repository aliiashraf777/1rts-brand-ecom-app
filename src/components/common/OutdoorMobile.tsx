import type { IProductCategoriesItem } from "@/data/outdoorData"
import { Link } from "react-router"
import { ArrowRight } from "lucide-react"

type Props = {
    heading: string,
    btnLink: string,
    data: IProductCategoriesItem[],
}

const OutdoorMobile = ({ heading, btnLink, data }: Props) => {
    return (
        <div className="flex lg:hidden flex-col">
            <div className="p-4 border-b border-gray-300">
                <h5 className="heading-h5">{heading}</h5>
            </div>

            {/* product cards */}
            <div className="flex overflow-x-auto border-b border-gray-300">
                {data.map((item, idx) => (
                    <Link
                        to={item.link}
                        key={`${item.title}-${item.price}`}
                        className="min-w-[180px] flex flex-col gap-1 items-center border-r border-gray-300 p-section pt-2"
                    >
                        <div className="w-[98px] h-[98px] p-2">
                            <img
                                src={item.image}
                                alt="item_img"
                                className="object-contain"
                            />
                        </div>
                        <p className="txt-small">
                            {item.title}
                        </p>
                        <p className="txt-small text-gray-500">
                            From USD {item.price}
                        </p>
                    </Link>
                ))}
            </div>

            <div className="p-4 border-b border-gray-300">
                <Link
                    to={btnLink}
                    className="flex items-center gap-2.5 txt-body-medium text-primary"
                >
                    <span>Source now</span>
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </div>
    )
}

export default OutdoorMobile