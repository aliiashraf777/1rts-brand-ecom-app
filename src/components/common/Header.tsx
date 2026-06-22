import MobileSidebar from "./MobileSidebar"
import NavBar from "./NavBar"
import CartPortal from "./portals/CartPortal"
import TopBar from "./TopBar"

type Props = {}

const Header = (props: Props) => {

  return (
    <header className={`header w-full bg-white
    `}>
      <TopBar />
      <NavBar />

      <MobileSidebar />
      <CartPortal />

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