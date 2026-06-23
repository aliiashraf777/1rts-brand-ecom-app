import MobileSidebar from "./MobileSidebar"
import NavBar from "./NavBar"
import CartPortal from "../portals/cart/CartPortal"
import FavsPortal from "../portals/favs/FavsPortal"
import TopBar from "./TopBar"
import ComparePortal from "../portals/compare/ComparePortal"

type Props = {}

const Header = (props: Props) => {

  return (
    <header className={`header w-full bg-white
    `}>
      <TopBar />
      <NavBar />

      <MobileSidebar />

      <CartPortal />

      <FavsPortal />

      <ComparePortal />

    </header>
  )
}

export default Header



export const HeaderCart = () => {

  return (
    <header className="w-full bg-white">
      <TopBar disabled />
    </header>
  )
}