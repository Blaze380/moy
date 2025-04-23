import { Instagram, LucideIcon } from "lucide-react";

const social: SocialNetworksType = {
    instagram: {
        link: "https://instagram.com/moy.agency",
        icon: Instagram,
    },
    facebook:{
        link:"https://google.com",
    }
}
export const contacts = {
    phone: "+25844189947",
    email: "moy.agency@moz.agency",
    address: undefined,
    social: social,
}


export type SocialNetworksType = {
    instagram?: {
        link: string;
        icon?: LucideIcon;
    },
    facebook?: {
        link: string;
        icon?: LucideIcon;
    },
    linkedin?: {
        link?: string;
        icon?: LucideIcon;
    }
}