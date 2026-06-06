import { avatar } from "@/assets";
import { useMobileMenuContext } from "@/context/MobileMenuContext";
import { mobileMenuData } from "@/data/navigationData";
import type { ImobileMenuItem } from "@/types/menuTypes";
import { X } from "lucide-react";
import { useEffect } from "react"
import { createPortal } from "react-dom";
import { Link } from "react-router";


const MobileSidebar = () => {

    const { isMobileMenuOpen, closeMobileMenu } = useMobileMenuContext();

    useEffect(() => {
        if (!isMobileMenuOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeMobileMenu();
        };

        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };

    }, [isMobileMenuOpen, closeMobileMenu]);


    // Check point
    // if (!isMobileMenuOpen) return null

    return createPortal(
        <div
            onClick={closeMobileMenu}
            aria-hidden='true'
            className={`fixed inset-0 z-50 bg-black/25 backdrop-blur-xs w-screen md:w-[360px] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        >
            <aside
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal='true'
                className={`fixed left-0 top-0 h-full w-[280px] bg-white shadow-card-lg overflow-y-scroll scrollbar-none transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >

                {/* header */}
                <div className="relative w-full h-[115px]x bg-gray-100 p-section">
                    <button
                        type="button"
                        aria-label="Close Menu"
                        onClick={closeMobileMenu}
                        className="absolute top-5 right-5 cursor-pointer bg-gray-300 p-1"
                    >
                        <X
                            className="w-6 h-6 text-white"
                        />
                    </button>

                    <img
                        src={avatar}
                        alt="loginAvatar"
                        className="w-11 h-11 mb-2.5"
                    />

                    <p className="txt-base">
                        Sign in | Register
                    </p>
                </div>

                {/* body wrapper */}
                <div className="bg-white p-2.5">

                    <div
                        className="w-full flex flex-col borderx"
                    >
                        {mobileMenuData.slice(0, 4).map((item) =>
                            renderItem(item)
                        )}

                        <hr
                            className="border-none outline-none bg-gray-300 h-px my-2.5"
                        />

                        {/* 2nd */}

                        {mobileMenuData.slice(4, 7).map((item) =>
                            renderItem(item)
                        )}

                        <hr
                            className="border-none outline-none bg-gray-300 h-px my-2.5"
                        />

                        {/* 3rd */}

                        {mobileMenuData.slice(7,).map((item) =>
                            renderItem(item, true)
                        )}
                    </div>
                </div>

            </aside>
        </div >,
        document.body
    );
};

export default MobileSidebar


const renderItem = (item: ImobileMenuItem, hideIcon = false) => {
    const Icon = item.icon;

    return (
        <Link
            key={item.text}
            to={item.link}
            className="flex items-center gap-4 p-4 hover:bg-gray-100"
        >
            {Icon ? (
                <Icon
                    className={`h-5 w-5 shrink-0 text-gray-500 ${hideIcon ? "opacity-0" : ""}`}
                />
            ) : (
                <span className="h-5 w-5 shrink-0" />
            )}

            <p className="txt-base">{item.text}</p>
        </Link>
    );
};