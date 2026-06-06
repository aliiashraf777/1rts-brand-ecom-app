import { Menu } from "lucide-react"
import { logo } from "@/assets"
import SearchBar from "./SearchBar"
import { topIconsData } from "@/data/navigationData"
import { Link } from "react-router"
import { useMobileMenuContext } from "@/context/MobileMenuContext"
import HeroLoginCard from "../home/HeroLoginCard"
import { useState } from "react"

type Props = {
    className?: string,
    disabled?: boolean,
}

const TopBar = ({ disabled, className }: Props) => {

    const { openMobileMenu } = useMobileMenuContext();
    const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false)

    const handleProfileLoginClick = (text: string): void => {
        if (text === 'Profile') {
            setIsLoginOpen((prev) => !prev)
        }
    }

    return (
        <div className="page-padding border-b border-gray-300">
            <div className={`container-custom py-2.5 lg:py-section borderx border-blue-600 flex justify-between items-center gap-2.5 ${className || ''}`}>

                {/* hamBurger + logo */}
                <div className="flex items-center gap-section lg:gap-0">
                    <button
                        type="button"
                        aria-label="Open menu"
                        onClick={openMobileMenu}
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
                <div className="flex justify-between items-center max-sm:gap-2.5 sm:gap-4 md:gap-section relative">
                    {topIconsData.map((data, idx) => (
                        <button
                            key={idx}
                            role="button"
                            aria-label={data.text}
                            onClick={() => handleProfileLoginClick(data.text)}
                            className="flex flex-col gap-1.5 justify-center items-center text-gray group cursor-pointer"
                        >
                            <span className="text-[20px] group-hover:scale-110 transition">
                                {data.icon}
                            </span>
                            <p className="max-sm:hidden txt-small">
                                {data.text}
                            </p>
                        </button>
                    ))}

                    <div
                        className={`w-max h-max absolute top-full left-0 -translate-x-1/2 mt-2 z-20 transition-all duration-300 ease-out ${isLoginOpen
                            ? 'pointer-events-auto opacity-100 translate-y-0'
                            : 'pointer-events-none opacity-0 -translate-y-2'}`}
                    >
                        <HeroLoginCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar