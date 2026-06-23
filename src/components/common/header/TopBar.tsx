import { Menu } from "lucide-react"
import { logo } from "@/assets"
import SearchBar from "./SearchBar"
import { topIconsData } from "@/data/navigationData"
import { Link } from "react-router"
import { useMobileMenuContext } from "@/context/MobileMenuContext"
import HeroLoginCard from "../../home/HeroLoginCard"
import { useEffect, useState } from "react"
import { useCartPortalContext } from "@/context/CartPortalContext"
import { useFavsPortalContext } from "@/context/FavsPortalContext"
import { useAppSelector } from "@/redux/features/storeHooks"
import { selectFavsTotalQty } from "@/redux/features/favs/favsSelectors"
import { selectCartTotalQty } from "@/redux/features/cart/cartSelectors"
import { useComparePortalContext } from "@/context/ComparePortalContext"

type Props = {
    className?: string,
    disabled?: boolean,
}

const TopBar = ({ disabled, className }: Props) => {

    const { openMobileMenu } = useMobileMenuContext();
    const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

    const { cartOpen } = useCartPortalContext();
    const { favsOpen } = useFavsPortalContext();
    const { compareOpen } = useComparePortalContext();

    const favsTotalQty = useAppSelector(selectFavsTotalQty);
    const cartsTotalQty = useAppSelector(selectCartTotalQty);

    // on scroll header stick
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const handleProfileLoginClick = (text: string): void => {

        text === 'Profile' &&
            setIsLoginOpen((prev) => !prev)

        text === 'Cart' &&
            cartOpen();

        text === 'Wishlist' &&
            favsOpen();

        text === 'Compare' &&
            compareOpen();
    }

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false);
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div
            className={`topbar page-padding border-b border-gray-300  bg-white ${isScrolled ? 'scrolled' : ''}
                `}
        >
            <div className={`container-custom py-2.5 lg:py-section borderx border-blue-600 flex justify-between items-center gap-2.5 ${className || ''}`}
            >

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
                            <span className="text-[20px] group-hover:scale-110 transition relative">
                                {data.icon}

                                {/* icons badges */}
                                {(
                                    data.text === 'Wishlist' ||
                                    data.text === 'Cart'
                                ) &&
                                    <div className="absolute -top-2.5 -right-2.5">
                                        <div className="w-5 h-5 bg-primary/85 text-white txt-tiny grid place-items-center rounded-full">
                                            {data.text === 'Wishlist'
                                                ? (<>{favsTotalQty}</>)
                                                : (<>{cartsTotalQty}</>)
                                            }
                                        </div>
                                    </div>
                                }

                                {(
                                    data.text === 'Compare'
                                ) &&
                                    <div className="absolute -top-2.5 -right-2.5">
                                        <div className="w-5 h-5 bg-primary/85 text-white txt-tiny grid place-items-center rounded-full">
                                            {favsTotalQty + cartsTotalQty}
                                        </div>
                                    </div>
                                }
                            </span>
                            <p className="max-sm:hidden txt-tiny">
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