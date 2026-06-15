import type { LucideIcon } from "lucide-react";

export type searchCategoriesTy = string[]

export interface IsearchCategoriesItem {
    id: string,
    text: string,
    label: string,
    link: string,
    bgImg: string,
    items: string,
}

export interface ItopIconsItem {
    icon: React.ReactNode,
    text: string,
}

export interface InavMenuItem {
    link: string,
    text: string,
}

export interface IlangCurrencyItem {
    language: string,
    currency: string,
    currencyCode: string,
}

export interface IshipToFlagsItem {
    text: string,
    flag: string,
    emojiFlagCode: string,
    country: string,
    website: string,
}

export interface ImobileMenuItem {
    icon?: LucideIcon,
    text: string,
    link: string,
}