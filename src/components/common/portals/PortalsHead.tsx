import { ArrowLeft } from "lucide-react"

type Props = {
    arrowClick?: () => void,
    title?: string,
}

const PortalsHead = ({ arrowClick, title }: Props) => {
    return (<>
        <div className="flex items-center gap-4 p-4 heading-h5">
            <ArrowLeft
                className="cursor-pointer"
                onClick={arrowClick}
            />

            <p>{title}</p>

            <button className="">clear all</button>
        </div>

        <div className="flex">
            <div className={`flex-1 h-0.5 bg-gray-100`}
            ></div>
        </div>
    </>)
}

export default PortalsHead