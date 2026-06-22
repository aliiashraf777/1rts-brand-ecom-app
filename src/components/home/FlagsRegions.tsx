import { shipToFlagsData } from "@/data/navigationData"
import SectionContainer from "../common/section/SectionContainer"
import SectionHeading from "../common/section/SectionHeading"

type Props = {}

const FlagsRegions = (props: Props) => {
    return (
        <SectionContainer sectionClass="mb-[46px]">
            <div className="px-2.5 md:px-0">
                <SectionHeading
                    heading="Suppliers by region"
                />

                <div className="flex flex-wrap gap-[18px]">
                    {shipToFlagsData.slice(0, 10).map((item, idx) => (
                        <div
                            key={`${item.text}-${idx}`}
                            className="flex items-center gap-2 basis-fullx 
                            basis-[calc(50%-0.75rem)] 
                            sm:basis-[calc(33.333%-0.75rem)] 
                            md:basis-[calc(25%-1.125rem)] 
                            lg:basis-[calc(20%-1.125rem)]
                            group"
                        >
                            <img
                                src={item.flag}
                                alt={item.text}
                                className="group-hover:scale-110 transition-transform duration-300 ease-in-out"
                            />

                            <div className="flex flex-col">
                                <p className="txt-small pb-[-8px]">
                                    {item.text}
                                </p>

                                <p className="txt-tiny text-gray-500">
                                    {item.website}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </SectionContainer>
    )
}

export default FlagsRegions