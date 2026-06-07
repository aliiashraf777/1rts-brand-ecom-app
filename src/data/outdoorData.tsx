import { gadget1, gadget2, gadget3, gadget4, gadget5, gadget6, gadget7, gadget8, outdoor1, outdoor2, outdoor3, outdoor4, outdoor5, outdoor6, outdoor7, outdoor8 } from "@/assets"

export interface IProductCategoriesItem {
    link: string,
    title: string,
    image: string,
    price: string,
}

export interface IoutdoorDataItem {
    link: string,
    title: string,
    image: string,
    price: string
}

// export const outdoorData: IoutdoorDataItem[] = [
export const outdoorData: IProductCategoriesItem[] = [
    {
        link: '/',
        title: 'Soft chairs',
        image: outdoor1,
        price: '100',
    },
    {
        link: '/',
        title: 'Sofa & chair',
        image: outdoor2,
        price: '100',
    },
    {
        link: '/',
        title: 'Kitchen dishes',
        image: outdoor3,
        price: '19',
    },
    {
        link: '/',
        title: 'Smart watches',
        image: outdoor4,
        price: '19',
    },
    {
        link: '/',
        title: 'Kitchen mixer',
        image: outdoor5,
        price: '100',
    },
    {
        link: '/',
        title: 'Blenders',
        image: outdoor6,
        price: '39',
    },
    {
        link: '/',
        title: 'Home appliance',
        image: outdoor7,
        price: '39',
    },
    {
        link: '/',
        title: 'Coffee maker',
        image: outdoor8,
        price: '10',
    },
]

// export const gadgetsData: IoutdoorDataItem[] = [
export const gadgetsData: IProductCategoriesItem[] = [
    {
        link: '/',
        title: 'Smart watches',
        image: gadget1,
        price: '100',
    },
    {
        link: '/',
        title: 'Cameras',
        image: gadget2,
        price: '19',
    },
    {
        link: '/',
        title: 'Headphones',
        image: gadget3,
        price: '39',
    },
    {
        link: '/',
        title: 'Smart watches',
        image: gadget4,
        price: '35',
    },
    {
        link: '/',
        title: 'Gaming Set',
        image: gadget5,
        price: '100',
    },
    {
        link: '/',
        title: 'Laptops & PC',
        image: gadget6,
        price: '39',
    },
    {
        link: '/',
        title: 'Smart phones',
        image: gadget7,
        price: '19',
    },
    {
        link: '/',
        title: 'Electirc kattle',
        image: gadget8,
        price: '100',
    },
]