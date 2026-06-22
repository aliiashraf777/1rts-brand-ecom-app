import { HeaderCart } from "../components/common/header/Header"
import BaseLayout from "./BaseLayout"

type Props = {}

const CartLayout = (props: Props) => {
    return (
        <BaseLayout header={<HeaderCart />} />
    )
}

export default CartLayout