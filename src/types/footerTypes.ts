import type { IconType } from "react-icons";


export interface IfooterSocialItem {
    link: string,
    icon: IconType,
}

export interface IfItem {
    link: string,
    text: string,
}

export interface IfooterItem {
    heading: string,
    fItem: IfItem[],
}