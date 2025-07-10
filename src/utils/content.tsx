import {
    type ClubInformation,
    type Image,
    type NavLink,
    type WhatWeOffer,
    type ContactOptions,
    type UsefulLinks,
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
        href: "#gallery",
        text: "Gallery",
    },
    {
        id: 4,
        href: "#contact-us",
        text: "Contact Us",
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

const ContactOptionsContent: ContactOptions[] = [
    { id: 1, option: "Join the Club" },
    { id: 2, option: "Question" },
    { id: 3, option: "Other" },
];

const UsefulLinksContent: UsefulLinks[] = [
    {
        id: 1,
        href: "https://www.englishchess.org.uk/",
        name: "ECF",
        description: "Link to the English Chess Federation homepage",
    },
    {
        id: 2,
        href: "https://rating.englishchess.org.uk/v2/new/list_players.php?club_code=8HBB",
        name: "ECF Ratings",
        description:
            "Link to the English Chess Federation rating database for Hebden Bridge Chess Club players",
    },
    {
        id: 3,
        href: "https://ecf.justgo.com/",
        name: "ECF Member Portal",
        description: "Link to the English Chess Federation member portal",
    },
    {
        id: 4,
        href: "https://www.youtube.com/@PowerPlayChess",
        name: "Power Play YouTube",
        description: "Link to the Power Play YouTube channel",
    },
];

export {
    NavLinksContent,
    WhatWeOfferContent,
    GalleryContent,
    ContactOptionsContent,
    UsefulLinksContent,
};
