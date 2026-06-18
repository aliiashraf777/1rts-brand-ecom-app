import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router"
import MainLayout from "../layouts/MainLayout"
import { Cart, Home, Login, NotFound, Register, Shop, SingleProductDetail } from "../pages"
import CartLayout from "../layouts/CartLayout"

type Props = {}

const AppRoutes = (props: Props) => {

    const router = createBrowserRouter([
        {
            path: "/",
            Component: MainLayout,
            children: [
                {
                    index: true,
                    Component: Home,
                },
                {
                    path: "shop",
                    Component: Shop,
                    handle: { crumb: () => "Shop" },
                },
                {
                    path: "shop/:id",
                    Component: SingleProductDetail,
                    handle: { crumb: (data: any) => data?.product?.name ?? "Product" }
                },
                {
                    path: "*",
                    Component: NotFound,
                },

            ]
        },
        {
            Component: CartLayout,
            children: [
                {
                    index: true,
                    path: "cart",
                    Component: Cart,
                    handle: {crumb: () => "Cart"},
                },
                {
                    path: "login",
                    Component: Login,
                },
                {
                    path: 'register',
                    Component: Register,
                }
            ]
        }
    ])

    return (<>
        {/* <Routes>
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
        </Routes> */}

        <RouterProvider router={router} />
    </>)
}

export default AppRoutes