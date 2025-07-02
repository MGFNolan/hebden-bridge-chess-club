import {
    type ClubInformation,
    type Image,
    type NavLink,
    type WhatWeOffer,
} from "./contentTypes";

const NavLinksContent: NavLink[] = [
    {
        id: 1,
        href: "#club-information",
        text: "Club Information",
    },
    {
        id: 2,
        href: "#what-we-offer",
        text: "What We Offer",
    },
    {
        id: 3,
        href: "#club-history",
        text: "Club History",
    },
    {
        id: 4,
        href: "#gallery",
        text: "Gallery",
    },
    {
        id: 5,
        href: "#contact",
        text: "Contact Us",
    },
];

const ClubInformationContent: ClubInformation[] = [
    {
        id: 1,
        title: "Juniors",
        description:
            "Unfortunately, we do not currently have a junior chess club. Since the pandemic we have made several attempts to re-establish a separate junior club with its own coach, so far without success. However, we are still trying to get something organised. If you would like to register your interest in a junior club with us, please email us at hebdenbridgechessclub@gmail.com and we'll let you know of any change in circumstances.",
    },
    {
        id: 2,
        title: "League Chess",
        description: `If it's competitive chess you're after, then you've come to the right place! Last season we had four teams participating in the Calderdale Chess League and our B team became league champions for 2024-25. The club also won League 1 in 2022-23, 2021-22 and in 2018-19 and we are current holders of the Calderdale Chess Team Lightning title. We also take part in online events and have three teams in the 4 Nations Chess League (4NCL) Online competition. Our first team won the Division 2 title in season 7, Division 3 in seasons 6 and 5, and the Division 5 title in season 4.`,
    },
    {
        id: 3,
        title: "Social Chess",
        description:
            "If you aren’t yet ready to take the plunge into competitive chess, then that’s no problem. We run a range of run and educational activities over the summer months and social chess is always available to anyone that wants a game right through the year. You’ll have the opportunity to play against a range of opponents and get tips from some of our more experienced players if you so wish.",
    },
];

const WhatWeOfferContent: WhatWeOffer[] = [
    {
        id: 1,
        image: "/hbcc-photos/social-action-shot.jpg",
        alt: "Two concurrent chess games taking place side by side with several people of varying ages playing or watching the games. There is a chess clock on the table in the foreground.",
        title: "Social Chess",
        description:
            "Just turn up, find a dancing partner, and play some chess! All levels are welcome, even if you've never played before.",
    },
    {
        id: 2,
        image: "/hbcc-photos/social-thinking.jpg",
        alt: "Two chess boards and four players of varying ages deep in thought as they analyse a chess position.",
        title: "Summer Programme",
        description:
            "We have all sorts of fun going on in the summer months, from internal competitions, to chess variants, to lectures.",
    },
    {
        id: 3,
        image: "/hbcc-photos/wide-shot-bw.jpg",
        alt: "Ten people sat two to a table playing chess games",
        title: "A Safe Space",
        description:
            "Everyone is welcome at the club. Whoever you are, we would love to have you and play some chess!",
    },
    {
        id: 4,
        image: "/hbcc-photos/games-from-corner.jpg",
        alt: "One woman playing chess in the foreground with her opponent out of view. In the background are two other games being played with one person stood observing, and a group huddled around another chess board discussing a position.",
        title: "Calderdale League",
        description:
            "We partake in the Calderdale Chess League, and players of all abilities are welcome to take part.",
    },
    {
        id: 5,
        image: "/hbcc-photos/player-close-up.jpg",
        alt: "A chess player thinking about their chess position, with other games and players out of focus in the background.",
        title: "Online Chess",
        description:
            "We also partake in the 4NCL online congresses, and players of all abilities are welcome to take part.",
    },
    {
        id: 6,
        image: "/hbcc-photos/game-with-observer.jpg",
        alt: "Two players sat playing a game of chess against each other, deep in thought. One other person is observing the game stood up. On the table between the players is a chess board, chess clock, notation sheets, and their drinks.",
        title: "Membership",
        description:
            "While membership is required for competitive chess, you're welcome to come along and see how you find things with no obligations.",
    },
];

const GalleryContent: Image[] = [
    {
        id: 1,
        image: "/hbcc-photos/board-close-up-colour.jpg",
        alt: "A table with a chess board and pieces set up for a game. There is a chess clock, extra Queen pieces, and a scoresheet. In the background but out of focus is a similarly set up table.",
    },
    {
        id: 2,
        image: "/hbcc-photos/move-close-up.jpg",
        alt: "A man playing as Black in a game of chess, making his move with a Black pawn.",
    },
    {
        id: 3,
        image: "/hbcc-photos/trades-club-inside.jpg",
        alt: "A black door close up depicting the words Trades Club.",
    },
    {
        id: 4,
        image: "/hbcc-photos/wide-shot.jpg",
        alt: "Ten people playing chess across five tables. Each player is either thinking, making a move, or writing down a move they just made.",
    },
    {
        id: 5,
        image: "/hbcc-photos/player-thinking.jpg",
        alt: "A man and a woman playing chess. The woman is looking at the board and calculating.",
    },
    {
        id: 6,
        image: "/hbcc-photos/scratching-face.jpg",
        alt: "A man with a pen in hand, scratching his face while he thinks on his next move.",
    },
];

export {
    NavLinksContent,
    ClubInformationContent,
    WhatWeOfferContent,
    GalleryContent,
};
