import type { IProductCategoriesItem } from "@/data/outdoorData"
import { Link } from "react-router"
import Button from "./btns/Button"

type Props = {
    categoryBg: string,
    headingMain: string,
    btnLink: string,
    data: IProductCategoriesItem[],
}

const OutdoorDesk = ({ categoryBg, headingMain, btnLink, data }: Props) => {
    return (
        <div className="hidden md:flex">

            {/* heading box */}
            <div className="w-[280px] h-[257px] shrink-0 relative">
                <div className="bg-[#FFE8BA] w-full h-full">
                    <img
                        src={categoryBg}
                        alt=""
                        className="w-full h-full object-contain"
                    />
                </div>

                <div className="absolute top-[20px] left-[20px]">
                    <h2 className="heading-h4 whitespace-pre-line">
                        {headingMain}
                    </h2>

                    <Button variant="white" className="mt-section">
                        <Link
                            to={btnLink}
                        >
                            Source now
                        </Link>
                    </Button>
                </div>
            </div>

            {/* categories cards grid */}
            <div className="flex-1 min-w-0">
                <div className="grid grid-cols-4 grid-rows-2">
                    {data.map((item, idx) => {

                        const isLastColumn = (idx + 1) % 4 === 0;
                        const isBottomColumn = idx >= 4

                        return (
                            <Link
                                key={`${item.title}-${item.price}`}
                                to={item.link}
                                className={`relative px-4 py-section h-[129px] border-gray-300 
                                    ${isLastColumn ? 'border-r-0' : 'border-r'}
                                    ${isBottomColumn ? 'border-b-0' : 'border-b'} group
                                `}
                            >
                                <h3 className="txt-base pb-2.5">
                                    {item.title}
                                </h3>
                                <p className="whitespace-pre-line txt-tiny">
                                    From {`\n`}
                                    USD ${item.price}
                                </p>

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-[82px] h-[82px] absolute bottom-0 right-0 object-contain group-hover:-translate-y-1 transition-all duration-300 ease-out"
                                />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default OutdoorDesk