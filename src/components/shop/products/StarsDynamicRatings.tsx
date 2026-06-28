import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

type Props = {
    rating: number,
    className?: string
}

const StarsDynamicRatings = ({ rating, className }: Props) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<IoMdStar key={i} className={`w-4 md:w-5 h-4 md:h-5 text-card-orange ${className || ""}`} />)
        } else if (rating >= i - 0.5) {
            stars.push(<IoMdStarHalf key={i} className={`w-4 md:w-5 h-4 md:h-5 text-card-orange ${className || ""}`} />)
        } else {
            stars.push(<IoMdStarOutline key={i} className={`w-4 md:w-5 h-4 md:h-5 text-gray-400 ${className || ""}`} />)
        }
    }

    return (
        <div className="flex items-center">
            {stars}
        </div>
    )
}

export default StarsDynamicRatings