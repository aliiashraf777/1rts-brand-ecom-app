import Deals from "@/components/home/Deals"
import OutdoorCategories from "@/components/home/OutdoorCategories"
import Hero from "@/screens/Hero"


type Props = {}

const Home = (props: Props) => {
    return (
        <div className="w-full">
            <Hero />

            <Deals />

            <OutdoorCategories />
        </div>
    )
}

export default Home