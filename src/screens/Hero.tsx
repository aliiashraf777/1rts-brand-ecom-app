import SectionContainer from "@/components/common/SectionContainer"
import HeroCategories from "@/components/home/HeroCategories"
import HeroInfoCard from "@/components/home/HeroInfoCard"
import HeroLoginCard from "@/components/home/HeroLoginCard"

type Props = {}

interface heroInfoCardsItem {
    text: string,
    bgColor: string,
}

export const heroInfoCardsData: heroInfoCardsItem[] = [
    {
        text: `Get US $10 off \n with a new \n supplier`,
        bgColor: 'bg-card-orange',
    },
    {
        text: `Send quotes with \n supplier \n preferences`,
        bgColor: 'bg-card-sea-green',
    },
]

const Hero = (props: Props) => {
    return (
        <SectionContainer>
            <div className="bg-white lg:p-section flex gap-section rounded-card lg:border border-gray-300 mt-section mb-section-30">
                {/* Categories */}
                <HeroCategories />

                {/* info boxes */}
                <div className="hidden lg:flex flex-col gap-2.5 w-[200px] shrink-0">
                    <HeroLoginCard />

                    <div className="flex flex-col gap-2.5">
                        {heroInfoCardsData.map((item, idx) => (
                            <HeroInfoCard
                                key={`${item.text}-${idx}`}
                                bgClass={item.bgColor}
                            >
                                {item.text}
                            </HeroInfoCard>
                        ))}
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}

export default Hero