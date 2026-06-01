import { Route, Routes } from "react-router"
import MainLayout from "../layouts/MainLayout"
import { Cart, Home, Login, NotFound, Register, Shop, SingleProductDetail } from "../pages"
import CartLayout from "../layouts/CartLayout"

type Props = {}

const AppRoutes = (props: Props) => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="shop/:id" element={<SingleProductDetail />} />

                <Route path="*" element={<NotFound />} />
            </Route>
            <Route element={<CartLayout />}>
                <Route path="/cart" element={<Cart />} />

                <Route path="/login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes