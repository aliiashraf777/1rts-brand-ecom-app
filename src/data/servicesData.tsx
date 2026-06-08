import { service1, service2, service3, service4 } from "@/assets";
import { PillBottle, Search, SendHorizontal, ShieldPlus, type LucideIcon } from "lucide-react";

export interface IservicesDataItem {
    title: string,
    image: string,
    icon: LucideIcon,
    categoryLink: string,
}

export const servicesData: IservicesDataItem[] = [
    {
        title: `Source from \n industry Hubs`,
        image: service1,
        icon: Search,
        categoryLink: "/",
    },
    {
        title: `Customize your \n products`,
        image: service2,
        icon: PillBottle,
        categoryLink: "/",
    },
    {
        title: `Source from \n industry Hubs`,
        image: service3,
        icon: SendHorizontal,
        categoryLink: "/",
    },
    {
        title: `Product monitoring \n and inspection`,
        image: service4,
        icon: ShieldPlus,
        categoryLink: "/",
    },
]