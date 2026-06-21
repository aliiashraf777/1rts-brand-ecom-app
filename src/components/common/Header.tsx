import { useEffect, useState } from "react"
import MobileSidebar from "./MobileSidebar"
import NavBar from "./NavBar"
import TopBar from "./TopBar"

type Props = {}

const Header = (props: Props) => {

  // on scroll header stick
  // const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // const handleScroll = () => {
  //   if (window.scrollY > 100) {
  //     setIsScrolled(true)
  //   } else {
  //     setIsScrolled(false);
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener('scroll', handleScroll);

  //   return () => {
  //     document.removeEventListener('scroll', handleScroll);
  //   }
  // }, [])

  return (
    <header className={`header w-full bg-white
    `}>
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