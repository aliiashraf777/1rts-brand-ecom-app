import { flag1, flag2, flag3, flag4, flag5, flag6, flag7, flag8, flag9, flag10, flag0, heroBanner, computerBg, machineryBg, sportsBg, petBg, interiorBg, heroBg, } from '@/assets';
import type { IlangCurrencyItem, ImobileMenuItem, InavMenuItem, IsearchCategoriesItem, IshipToFlagsItem, ItopIconsItem } from '@/types/menuTypes';
import { ArrowRight, Building, Globe, Headset, Heart, House, List, MessageSquareText, PillBottle, SeparatorVertical, ShoppingCart, User } from 'lucide-react';


export const searchCategoriesData: IsearchCategoriesItem[] = [
    {
        id: 'cat0',
        text: 'All Category',
        label: 'All Category',
        link: '/',
        bgImg: heroBanner,
        items: '12,911'
    },
    {
        id: 'cat1',
        text: 'Automobiles',
        label: 'Automobiles',
        link: '/',
        bgImg: heroBanner,
        items: '10,231'
    },
    {
        id: 'cat2',
        text: 'Clothes and wear',
        label: 'Clothes and wear',
        link: '/',
        bgImg: heroBg,
        items: '11,211'
    },
    {
        id: 'cat3',
        text: 'Home interiors',
        label: 'Home interiors',
        link: '/',
        bgImg: interiorBg,
        items: '12,911'
    },
    {
        id: 'cat4',
        text: 'Computer and tech',
        label: 'Computer and tech',
        link: '/',
        bgImg: computerBg,
        items: '13,901'
    },
    {
        id: 'cat5',
        text: 'Tools, equipment',
        label: 'Tools, equipment',
        link: '/',
        bgImg: heroBanner,
        items: '12,911'
    },
    {
        id: 'cat6',
        text: 'Sports and outdoor',
        label: 'Sports and outdoor',
        link: '/',
        bgImg: sportsBg,
        items: '9,911'
    },
    {
        id: 'cat7',
        text: 'Animal and pets',
        label: 'Animal and pets',
        link: '/',
        bgImg: petBg,
        items: '5,011'
    },
    {
        id: 'cat8',
        text: 'Machinery tools',
        label: 'Machinery tools',
        link: '/',
        bgImg: heroBg,
        items: '7,939'
    },
    {
        id: 'cat9',
        text: 'More category',
        label: 'More category',
        link: '/',
        bgImg: heroBg,
        items: '12,911'
    },
]

export const topIconsData: ItopIconsItem[] = [
    {
        icon: <User />,
        text: 'Profile',
    },
    {
        icon: <SeparatorVertical />,
        text: 'Compare',
    },
    {
        icon: <Heart />,
        text: 'Wishlist',
    },
    {
        icon: <ShoppingCart />,
        text: 'Cart',
    },
]

export const navMenuData: InavMenuItem[] = [
    {
        text: 'All category',
        link: '/categories',
    },
    {
        text: 'Shop',
        link: '/shop',
    },
    {
        text: 'About',
        link: '/about',
    },
    {
        text: 'Contact',
        link: '/contact',
    },
    {
        text: 'Help',
        link: '/help',
    },
]

export const langCurrencyData: IlangCurrencyItem[] = [
    {
        language: 'English',
        currency: 'US Dollar',
        currencyCode: 'USD',
    },
    { language: 'German', currency: 'Euro', currencyCode: 'EUR' },
    { language: 'French', currency: 'Euro', currencyCode: 'EUR' },
    { language: 'Chinese', currency: 'Chinese Yuan', currencyCode: 'CNY' },
    { language: 'Japanese', currency: 'Japanese Yen', currencyCode: 'JPY' },
    { language: 'Arabic', currency: 'Saudi Riyal', currencyCode: 'SAR' },
    { language: 'Spanish', currency: 'Euro', currencyCode: 'EUR' },
    { language: 'Russian', currency: 'Russian Ruble', currencyCode: 'RUB' },
]

export const shipToFlagsData: IshipToFlagsItem[] = [
    {
        text: 'Ship to',
        flag: flag0,
        emojiFlagCode: 'GER',
        country: 'Germany',
        website: 'shopname.ae',
    },
    {
        text: 'Ship to',
        flag: flag1,
        emojiFlagCode: 'UAE',
        country: 'United Arab Emirates',
        website: 'shopname.ae',
    },
    {
        text: 'Ship to',
        flag: flag2,
        emojiFlagCode: 'AU',
        country: 'Australia',
        website: 'shopname.au',
    },
    {
        text: 'Ship to',
        flag: flag3,
        emojiFlagCode: 'US',
        country: 'United States',
        website: 'shopname.us',
    },
    {
        text: 'Ship to',
        flag: flag4,
        emojiFlagCode: 'RU',
        country: 'Russia',
        website: 'shopname.ru',
    },
    {
        text: 'Ship to',
        flag: flag5,
        emojiFlagCode: 'IT',
        country: 'Italy',
        website: 'shopname.it',
    },
    {
        text: 'Ship to',
        flag: flag6,
        emojiFlagCode: 'DK',
        country: 'Denmark',
        website: 'shopname.dk',
    },
    {
        text: 'Ship to',
        flag: flag7,
        emojiFlagCode: 'FR',
        country: 'France',
        website: 'shopname.fr',
    },
    {
        text: 'Ship to',
        flag: flag8,
        emojiFlagCode: 'UAE',
        country: 'United Arab Emirates',
        website: 'shopname.ae',
    },
    {
        text: 'Ship to',
        flag: flag9,
        emojiFlagCode: 'CN',
        country: 'China',
        website: 'shopname.cn',
    },
    {
        text: 'Ship to',
        flag: flag10,
        emojiFlagCode: 'GB',
        country: 'Great Britain',
        website: 'shopname.uk',
    },
]

export const mobileMenuData: ImobileMenuItem[] = [
    {
        icon: House,
        text: 'Home',
        link: '/',
    },
    {
        icon: List,
        text: 'Categories',
        link: '/',
    },
    {
        icon: Heart,
        text: 'Wishlist',
        link: '/',
    },
    {
        icon: PillBottle,
        text: 'My orders',
        link: '/',
    },
    {
        icon: Globe,
        text: 'English | US',
        link: '/',
    },
    {
        icon: Headset,
        text: 'Contact us',
        link: '/',
    },
    {
        icon: Building,
        text: 'About',
        link: '/',
    },
    {
        icon: ArrowRight,
        text: 'User agreement',
        link: '/',
    },
    {
        icon: ArrowRight,
        text: 'Partnership',
        link: '/',
    },
    {
        icon: ArrowRight,
        text: 'Privacy policy',
        link: '/',
    },
]