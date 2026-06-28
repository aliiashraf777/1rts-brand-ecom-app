import { navMenuData } from "@/data/navigationData"
import { Menu } from "lucide-react"
import { NavLink } from "react-router"
import { CurrencySelector, FlagsSelector } from "./DropdownSelectors"
import { useMobileMenuContext } from "@/context/MobileMenuContext"
import SectionContainer from "../section/SectionContainer"

type Props = {
  className?: string,
}

const NavBar = ({ className }: Props) => {

  const { openMobileMenu } = useMobileMenuContext();

  return (
    <nav className="hidden lg:block border-b border-gray-300">
      <SectionContainer className={`py-3 flex justify-between items-center gap-2.5 ${className || ''}`}>

        {/* nav */}
        <div className="flex gap-1">
          {/* menu toggler */}
          <button
            type="button"
            aria-label="Open menu"
            // onClick={onOpenMobile}
            onClick={openMobileMenu}
            className="flex items-center justify-center"
          >
            <Menu
              className="w-6 h-6 cursor-pointer hover:text-primary transition duration-300"
            />
          </button>

          <ul className="flex items-center gap-7">
            {
              navMenuData.map((nav) => (
                <li
                  key={`${nav.link}-${nav.text}`}
                  className="txt-body-title hover:text-primary cursor-pointer transition-all duration-300"
                >
                  <NavLink
                    to={nav.link}
                    className={({ isActive }) => isActive ? 'text-primary' : ''}
                  >
                    {nav.text}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>

        {/* dropdowns selectors*/}
        <div className="flex justify-between items-center gap-section-30">

          {/* currency */}
          <CurrencySelector />

          {/* flags */}
          <FlagsSelector />

        </div>
        {/* dropdowns end */}
      </SectionContainer>
    </nav>
  )
}

export default NavBar