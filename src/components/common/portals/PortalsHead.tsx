import { ArrowLeft } from "lucide-react"
import { LinkClickBtn } from "../btns/Button"

type Props = {
    arrowClick?: () => void,
    title?: string,
    clearClick?: () => void,
}

const PortalsHead = ({ arrowClick, title, clearClick }: Props) => {
    return (<>
        <div className="flex items-center justify-between gap-4 p-4 heading-h5 bg-gray-50">
            <div className="flex items-center gap-4">
                <ArrowLeft
                    className="cursor-pointer"
                    onClick={arrowClick}
                />

                <p>{title}</p>
            </div>

            <LinkClickBtn
                onClick={clearClick}
            >
                Clear all
            </LinkClickBtn>
        </div>

        <div className="flex">
            <div className={`flex-1 h-px bg-gray-100`}
            ></div>
        </div>
    </>)
}

export default PortalsHead