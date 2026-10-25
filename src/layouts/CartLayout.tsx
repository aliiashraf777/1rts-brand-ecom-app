import { HeaderCart } from "../components/common/header/Header"
import BaseLayout from "./BaseLayout"

const CartLayout = () => {
    return (
        <BaseLayout header={<HeaderCart />} />
    )
}

export default CartLayout