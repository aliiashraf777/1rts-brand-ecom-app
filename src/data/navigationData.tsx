import { flag1, flag2, flag3, flag4, flag5, flag6, flag7, flag8, flag9, flag10, flag0, heroBanner, computerBg, machineryBg, sportsBg, petBg, interiorBg, heroBg, } from '@/assets';
import type { IlangCurrencyItem, ImobileMenuItem, InavMenuItem, IsearchCategoriesItem, IshipToFlagsItem, ItopIconsItem } from '@/types/menuTypes';
import { ArrowRight, Building, Globe, Headset, Heart, House, List, MessageSquareText, PillBottle, ShoppingCart, User } from 'lucide-react';


export const searchCategoriesData: IsearchCategoriesItem[] = [
    {
        text: 'All Category',
        link: '/',
        bgImg: heroBanner,
    },
    {
        text: 'Automobiles',
        link: '/',
        bgImg: heroBanner,
    },
    {
        text: 'Clothes and wear',
        link: '/',
        bgImg: heroBg,
    },
    {
        text: 'Home interiors',
        link: '/',
        bgImg: interiorBg,
    },
    {
        text: 'Computer and tech',
        link: '/',
        bgImg: computerBg,
    },
    {
        text: 'Tools, equipment',
        link: '/',
        bgImg: heroBanner,
    },
    {
        text: 'Sports and outdoor',
        link: '/',
        bgImg: sportsBg,
    },
    {
        text: 'Animal and pets',
        link: '/',
        bgImg: petBg,
    },
    {
        text: 'Machinery tools',
        link: '/',
        bgImg: heroBg,
    },
    {
        text: 'More category',
        link: '/',
        bgImg: heroBg,
    },
]

export const topIconsData: ItopIconsItem[] = [
    {
        icon: <User />,
        text: 'Profile',
    },
    {
        icon: <MessageSquareText />,
        text: 'Message',
    },
    {
        icon: <Heart />,
        text: 'Wishlist',
    },
    {
        icon: <ShoppingCart />,
        text: 'My cart',
    },
]

export const navMenuData: InavMenuItem[] = [
    {
        link: '/',
        text: 'All category',
    },
    {
        link: '/shop',
        text: 'Shop',
    },
    {
        link: '/',
        text: 'About',
    },
    {
        link: '/',
        text: 'Contact',
    },
    {
        link: '/',
        text: 'Help',
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