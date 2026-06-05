import { flag1, flag2, flag3, flag4, flag5, flag6, flag7, flag8, flag9, flag10, flag0, } from '@/assets';
import type { IlangCurrencyItem, ImobileMenuItem, InavMenuItem, IshipToFlagsItem, ItopIconsItem, searchCategoriesTy } from '@/types/menuTypes';
import { ArrowRight, Building, Globe, Headset, Heart, House, List, MessageSquareText, PillBottle, ShoppingCart, User } from 'lucide-react';

export const searchCategoriesData: searchCategoriesTy = [
    'All Category',
    'Clothes and wear',
    'Home interiors',
    'Computer and tech',
    'Tools, equipment',
    'Sports and outdoor',
    'Animal and pets',
    'Machinery tools',
    'More category',
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
        country: 'Germany'
    },
    {
        text: 'Ship to',
        flag: flag1,
        emojiFlagCode: 'UAE',
        country: 'United Arab Emirates'
    },
    {
        text: 'Ship to',
        flag: flag2,
        emojiFlagCode: 'AU',
        country: 'Australia'
    },
    {
        text: 'Ship to',
        flag: flag3,
        emojiFlagCode: 'US',
        country: 'United States'
    },
    {
        text: 'Ship to',
        flag: flag4,
        emojiFlagCode: 'RU',
        country: 'Russia'
    },
    {
        text: 'Ship to',
        flag: flag5,
        emojiFlagCode: 'IT',
        country: 'Italy'
    },
    {
        text: 'Ship to',
        flag: flag6,
        emojiFlagCode: 'DK',
        country: 'Denmark'
    },
    {
        text: 'Ship to',
        flag: flag7,
        emojiFlagCode: 'FR',
        country: 'France'
    },
    {
        text: 'Ship to',
        flag: flag8,
        emojiFlagCode: 'UAE',
        country: 'United Arab Emirates'
    },
    {
        text: 'Ship to',
        flag: flag9,
        emojiFlagCode: 'CN',
        country: 'China'
    },
    {
        text: 'Ship to',
        flag: flag10,
        emojiFlagCode: 'GB',
        country: 'Great Britain'
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