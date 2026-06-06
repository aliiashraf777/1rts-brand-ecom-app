

type Props = {
    bgClass?: string,
    children: React.ReactNode,
}

const HeroInfoCard = ({ bgClass, children }: Props) => {
    return (
        <div className={`w-full p-4 pb-[22px] rounded-card txt-base text-white whitespace-pre-line ${bgClass || ''}`}>
            {children}
        </div>
    )
}

export default HeroInfoCard