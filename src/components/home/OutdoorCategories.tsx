import { outdoorData, type IProductCategoriesItem } from "@/data/outdoorData"
import OutdoorDesk from "../common/OutdoorDesk"
import OutdoorMobile from "../common/OutdoorMobile"
import SectionContainer from "../common/SectionContainer"

type Props = {
    heading: string,
    headingMain: string,
    btnLink: string,
    data: IProductCategoriesItem[],
    categoryBg: string,
}

const OutdoorCategories = ({ heading, headingMain, btnLink, data, categoryBg }: Props) => {
    return (
        <SectionContainer
            sectionClass="mb-section"
            className="bg-white md:border border-gray-300 md:rounded-card"
        >
            <OutdoorMobile
                heading={heading}
                btnLink={btnLink}
                data={data}
            />

            <OutdoorDesk
                categoryBg={categoryBg}
                headingMain={headingMain}
                btnLink={btnLink}
                data={data}
            />
        </SectionContainer>
    )
}

export default OutdoorCategories