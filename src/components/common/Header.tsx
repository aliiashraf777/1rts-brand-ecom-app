import MobileSidebar from "./MobileSidebar"
import NavBar from "./NavBar"
import TopBar from "./TopBar"

type Props = {}

const Header = (props: Props) => {

  return (
    <header className="w-full bg-white">
      <TopBar />
      <NavBar />

      <MobileSidebar />

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