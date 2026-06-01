import { HeaderCart } from "../components/common/Header"
import BaseLayout from "./BaseLayout"

type Props = {}

const CartLayout = (props: Props) => {
    return (
        <BaseLayout header={<HeaderCart />} />
    )
}

export default CartLayout