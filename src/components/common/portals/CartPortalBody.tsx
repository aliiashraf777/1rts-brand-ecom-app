import MiniProductCard from "@/components/shop/MiniProductCard";
import { selectCartItemsList } from "@/redux/features/cartSelectors";
import { useAppSelector } from "@/redux/features/storeHooks";
import { NavLink } from "react-router";
import Button from "../Button";
import { useCartActions } from "@/redux/features/useCartActions";

type Props = {}

const CartPortalBody = (props: Props) => {

    const cartItemsList = useAppSelector(selectCartItemsList);
    const { emptyCart } = useCartActions();

    return (<>
        {/* body */}
        <div
            className={`w-full flex flex-col"}`}
        >
            {cartItemsList.length > 0
                ? (<div className="w-full">
                    {
                        cartItemsList.map((item) => (
                            <MiniProductCard
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                qty={item.qty}
                                totalPrice={item.totalPrice}
                            />
                        ))
                    }
                </div>)
                : (
                    <div className="w-full h-[85vh] grid place-items-center heading-h1 text-5xl text-gray-200 capitalize text-center">
                        <p>Empty Cart</p>
                    </div>
                )
            }
        </div>

        {/* footer */}
        {cartItemsList.length > 0 && (
            <div className="flex flex-col gap-2 p-4">
                <NavLink
                    to="/cart"
                >
                    <Button
                        variant="gradient"
                        size="full"
                    >
                        View Cart
                    </Button>

                </NavLink>

                <Button
                    variant="white"
                    size="full"
                    onClick={() => emptyCart()}
                >
                    Clear Cart
                </Button>
            </div>
        )}
    </>)
}

export default CartPortalBody