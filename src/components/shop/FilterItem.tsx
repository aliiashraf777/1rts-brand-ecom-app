import { ChevronDown } from "lucide-react";

type Props = {
    title: string,
    className?: string,
    state: boolean,
    onClick?: () => void,
    children: React.ReactNode,
    bodyClass?: string,
    seeAll?: boolean,
    seeAllOnClick?: () => void
}

const FilterItem = ({ title, className, state, onClick, children, bodyClass, seeAll, seeAllOnClick }: Props) => {
    return (
        <div className="w-full border-t border-gray-300">
            {/* filter title */}
            <button
                type="button"
                aria-label="toggle_filter"
                className={`w-full flex items-center justify-between py-3.5 px-2 cursor-pointer transition-all duration-300 ease-out hover:bg-gray-100 ${className || ""}`}
                onClick={onClick}
            >
                <p className="txt-body-medium">
                    {title}
                </p>

                <ChevronDown
                    className={`text-gray-500 ${!state ? "rotate-180" : ""}`}
                />
            </button>

            {/* filter body */}
            <div className={`w-full mb-section ${state ? 'block' : 'hidden'} ${bodyClass || ""}`}>
                {children}

                {seeAll &&
                    <button
                        type="button"
                        onClick={seeAllOnClick}
                        className="w-full py-2.5 px-2 txt-base text-primary flex items-center transition-all duration-300 ease-out cursor-pointer hover:bg-gray-200"
                    >
                        See all
                    </button>
                }
            </div>
        </div>
    )
}

export default FilterItem