import { product1, product10, product2, product3, product4, product5, product6, product7, product8, product9 } from "@/assets";

export interface IproductsDataItem {
    image: string,
    title: string,
    price: string,
    oldPrice?: string,
    desc: string,
    ratings: string,
    detailsLink: string,
    orders: string,
}

export const productsData: IproductsDataItem[] = [
    {
        image: product1,
        title: 'T-shirts with multiple colors, for men',
        price: '10.30',
        oldPrice: "15.00",
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
        ratings: '4.5',
        detailsLink: '/',
        orders: '150'
    },
    {
        image: product2,
        title: "Jeans shorts for men blue color",
        price: '10.30',
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
        ratings: '4.3',
        detailsLink: '/',
        orders: '120'
    },
    {
        image: product3,
        title: "Brown winter coat medium size",
        price: '12.50',
        oldPrice: "15.00",
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
        ratings: '4.5',
        detailsLink: '/',
        orders: '250'
    },
    {
        image: product4,
        title: "Jeans bag for travel for men",
        price: "34.00",
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
        ratings: "4.5",
        detailsLink: "/",
        orders: '110'
    },
    {
        image: product5,
        title: "Leather wallet",
        price: "34.00",
        oldPrice: "15.00",
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
        ratings: "4.5",
        detailsLink: "/",
        orders: '159'
    },
    {
        image: product6,
        title: "Canon camera black, 100x zoom",
        price: "9.99",
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
        ratings: "4",
        detailsLink: "/",
        orders: '179'
    },
    {
        image: product7,
        title: "Headset for gaming with mic",
        price: "8.99",
        oldPrice: "15.00",
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
        ratings: "4.5",
        detailsLink: "/",
        orders: '257'
    },
    {
        image: product8,
        title: "Smartwatch silver color modern",
        price: "10.30",
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
        ratings: "4.5",
        detailsLink: "/",
        orders: '150'
    },
    {
        image: product9,
        title: "Blue wallet for men leather metarfial",
        price: "10.30",
        oldPrice: "15.00",
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
        ratings: "4.5",
        detailsLink: "/",
        orders: '350'
    },
    {
        image: product10,
        title: "Jeans bag for travel for men",
        price: "80.95",
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
        ratings: "4.5",
        detailsLink: "/",
        orders: '156'
    },
]