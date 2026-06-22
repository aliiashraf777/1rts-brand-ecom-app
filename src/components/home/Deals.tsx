import { dealsData } from "@/data/dealsData"
import SectionContainer from "../common/section/SectionContainer"
import { Link } from "react-router"

type Props = {}

const Deals = (props: Props) => {
    return (
        <SectionContainer
            sectionClass="mb-section"
            className="bg-white md:rounded-card border border-gray-300"
        >
            <div className="w-full min-w-0 flex flex-col lg:flex-row">

                {/* countdown box */}
                <div className="w-full lg:w-[280px] shrink-0 flex flex-row lg:flex-col gap-5 justify-between lg:justify-normal p-4 md:p-section border-b sm:border-r border-gray-300">
                    <div className="">
                        <h4 className="heading-h5 sm:heading-h4">
                            Deals and offers
                        </h4>
                        <p className="txt-tiny sm:txt-base text-text-muted pb-5">
                            Hygiene equipments
                        </p>
                    </div>

                    <div className="">
                        countdown
                    </div>
                </div>

                {/* deals boxes list */}
                <div className="flex-1 min-w-0">
                    <div className="flex overflow-x-auto lg:grid lg:grid-cols-5 lg:overflow-x-visible lg:scrollbar-none">
                        {dealsData.map((item, idx) => (
                            <Link
                                key={`${item.title}-${idx}`}
                                to={item.link}
                                className="min-w-[180px] lg:min-w-0 flex flex-col items-center text-center p-section pt-2.5 border-r border-b lg:border-b-0 border-gray-300 last:border-0 group"
                            >
                                <div className="w-[98px] h-[98px] md:w-[140px] md:h-[140px] px-3 py-2.5 flex justify-center items-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="object-contain group-hover:scale-105 transition-all duration-300 ease-out"
                                    />
                                </div>

                                <p className="txt-tiny text-text-primary md:txt-body pb-2.5">
                                    {item.title}
                                </p>

                                <div className="rounded-full bg-discount-bg text-discount txt-small font-medium py-1.5 px-3">
                                    {item.discount}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}

export default Deals