import { deal1, deal2, deal3, deal4, deal5 } from "@/assets";


export interface IdealsDataItem {
    link: string,
    image: string,
    title: string,
    discount: string,
}

export const dealsData: IdealsDataItem[] = [
    {
        link: '/',
        image: deal1,
        title: 'Smart watches',
        discount: '-25%'
    },
    {
        link: '/',
        image: deal2,
        title: 'Laptops',
        discount: '-15%'
    },
    {
        link: '/',
        image: deal3,
        title: 'GoPro cameras',
        discount: '-45%'
    },
    {
        link: '/',
        image: deal4,
        title: 'Headphones',
        discount: '-25%'
    },
    {
        link: '/',
        image: deal5,
        title: 'Canon cameras',
        discount: '-35%'
    },
]