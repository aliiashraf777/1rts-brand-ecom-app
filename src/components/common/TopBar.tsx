import { Menu } from "lucide-react"
import { logo } from "@/assets"
import SearchBar from "./SearchBar"
import { topIconsData } from "@/data/navigationData"
import { Link } from "react-router"

type Props = {
    className?: string,
    disabled?: boolean,
    onOpenMobile: () => void
}

const TopBar = ({ disabled, className, onOpenMobile }: Props) => {
    return (
        <div className="page-padding border-b border-gray-300">
            <div className={`container-custom py-2.5 lg:py-section borderx border-blue-600 flex justify-between items-center gap-2.5 ${className || ''}`}>

                {/* hamBurger + logo */}
                <div className="flex items-center gap-section lg:gap-0">
                    <button
                        type="button"
                        aria-label="Open menu"
                        onClick={onOpenMobile}
                        className="flex items-center justify-center focus:outline-none"
                    >
                        <Menu
                            className="md:hidden w-6 h-6 cursor-pointer"
                        />
                    </button>

                    <Link to={'/'}>
                        <img
                            src={logo} alt="logo"
                            className="w-[116px] md:w-[150px] hover:scale-105 transition duration-300"
                        />
                    </Link>
                </div>

                {/* search bar */}
                {!disabled &&
                    <SearchBar />
                }

                {/* topbar icons */}
                <div className="flex justify-between items-center max-sm:gap-2.5 sm:gap-4 md:gap-section">
                    {
                        topIconsData.map((data, idx) => (
                            <div
                                key={idx}
                                role="button"
                                aria-label={data.text}
                                className="flex flex-col gap-1.5 justify-center items-center text-gray group cursor-pointer"
                            >
                                <span className="txt-[20px] group-hover:scale-110 transition">
                                    {data.icon}
                                </span>
                                <p className="max-sm:hidden txt-small">
                                    {data.text}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TopBar