type Props = {}

const Header = (props: Props) => {
  return (
    <header className="w-full page-padding bg-white">
      <div className="container-custom">
        Header
      </div>
    </header>
  )
}

export default Header


export const HeaderCart = (props: CartPrps) => {
  return (
    <header className="w-full page-padding bg-white">
      <div className="container-custom">
        Header Cart
      </div>
    </header>
  )
}