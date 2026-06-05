import { useState } from "react"
import MobileSidebar from "./MobileSidebar"
import NavBar from "./NavBar"
import TopBar from "./TopBar"

type Props = {}

const Header = (props: Props) => {

  // mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  const openMobileMenuFn = () => setIsMobileMenuOpen(true);
  const closeMobileMenuFn = () => setIsMobileMenuOpen(false);

  return (
    <header className="w-full bg-white">
      <TopBar
        onOpenMobile={openMobileMenuFn}
      />
      <NavBar
        onOpenMobile={openMobileMenuFn}
      />

      <MobileSidebar
        open={isMobileMenuOpen}
        onCloseMobile={closeMobileMenuFn}
      />

      {/* <HeaderCart
        onOpenMobile={openMobileMenuFn}
      /> */}
    </header>
  )
}

export default Header


type HeaderCartTy = {
  onOpenMobile: () => void
}

export const HeaderCart = ({ onOpenMobile }: HeaderCartTy) => {
  return (
    <header className="w-full bg-white">
      <TopBar
        onOpenMobile={onOpenMobile}
        disabled
      />
    </header>
  )
}