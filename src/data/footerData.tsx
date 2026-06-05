import type { IfooterItem, IfooterSocialItem } from "@/types/footerTypes";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";



export const footerSocials: IfooterSocialItem[] = [
    {
        link: '/',
        icon: FaFacebookF,
    },
    {
        link: '/',
        icon: FaInstagram,
    },
    {
        link: '/',
        icon: FaLinkedinIn,
    },
    {
        link: '/',
        icon: FaYoutube,
    },
    {
        link: '/',
        icon: FaXTwitter,
    },
]

export const footerData: IfooterItem[] = [
    {
        heading: 'About',
        fItem: [
            {
                link: '/',
                text: 'About Us',
            },
            {
                link: '/',
                text: 'Blogs',
            },
            {
                link: '/',
                text: 'Categories',
            },
            {
                link: '/',
                text: 'Blogs',
            },
        ]
    },
    {
        heading: 'Partnership',
        fItem: [
            {
                link: '/',
                text: 'About Us',
            },
            {
                link: '/',
                text: 'Blogs',
            },
            {
                link: '/',
                text: 'Categories',
            },
            {
                link: '/',
                text: 'Blogs',
            },
        ]
    },
    {
        heading: 'Information',
        fItem: [
            {
                link: '/',
                text: 'Help Center',
            },
            {
                link: '/',
                text: 'Refund',
            },
            {
                link: '/',
                text: 'Shipping',
            },
            {
                link: '/',
                text: 'Contact',
            },
        ]
    },
    {
        heading: 'For Users',
        fItem: [
            {
                link: '/',
                text: 'Login',
            },
            {
                link: '/',
                text: 'Register',
            },
            {
                link: '/',
                text: 'Settings',
            },
            {
                link: '/',
                text: 'My Orders',
            },
        ]
    },
]