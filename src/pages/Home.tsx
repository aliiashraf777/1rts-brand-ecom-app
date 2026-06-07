import { gadgetsBg, outdoorBg } from "@/assets"
import Deals from "@/components/home/Deals"
import OutdoorCategories from "@/components/home/OutdoorCategories"
import { gadgetsData, outdoorData } from "@/data/outdoorData"
import Hero from "@/screens/Hero"


type Props = {}

const Home = (props: Props) => {
    return (
        <div className="w-full">
            <Hero />

            <Deals />

            <OutdoorCategories
                heading="Home and outdoor"
                headingMain={`Home and \n outdoor`}
                btnLink="/"
                data={outdoorData}
                categoryBg={outdoorBg}
            />

            <OutdoorCategories
                heading="Electronics & Gadgets"
                headingMain={`Consume \n electronics and \n gadgets`}
                btnLink="/"
                data={gadgetsData}
                categoryBg={gadgetsBg}
            />
        </div>
    )
}

export default Home