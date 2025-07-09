interface NavLink {
    id: number;
    href: string;
    text: string;
}

interface ClubInformation {
    id: number;
    title: string;
    description: string;
}

interface WhatWeOffer {
    id: number;
    image: string;
    alt: string;
    title: string;
    description: string;
}

interface Image {
    id: number;
    image: string;
    alt: string;
    title?: string;
    description?: string;
}

interface ContactOptions {
    id: number;
    option: string;
}

interface UsefulLinks {
    id: number;
    href: string;
    name: string;
    description: string;
}

export type {
    NavLink,
    ClubInformation,
    WhatWeOffer,
    Image,
    ContactOptions,
    UsefulLinks,
};
