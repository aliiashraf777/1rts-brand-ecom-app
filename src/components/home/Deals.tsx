import { dealsData } from "@/data/dealsData"
import SectionContainer from "../common/SectionContainer"
import { Link } from "react-router"

type Props = {}

const Deals = (props: Props) => {
    return (
        <SectionContainer
            sectionClass="mb-section"
            className="bg-white rounded-card border border-gray-300"
        >
            <div className="w-full min-w-0 flex flex-col lg:flex-row">

                {/* countdown box */}
                <div className="w-full lg:w-[280px] shrink-0 flex flex-row lg:flex-col gap-5 justify-between lg:justify-normal p-section border-b sm:border-r border-gray-300">
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
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {dealsData.map((item, idx) => (
                            <Link
                                key={`${item.title}-${idx}`}
                                to={item.link}
                                className="p-section border-r border-b lg:border-b-0 border-gray-300 last:border-0 flex min-w-0 flex-col items-center"
                            >
                                <div className="w-[140px] h-[140px] flex justify-center items-start borderx">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="object-contain borderx"
                                    />
                                </div>

                                <p className="txt-body pb-2.5">
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