import {
    type Image,
    type NavLink,
    type WhatWeOffer,
    type ContactOptions,
    type UsefulLinks,
} from "./contentTypes";

const navLinksData = [
    {
        href: "#club-information",
        text: "Club Information",
    },
    {
        href: "#what-we-offer",
        text: "What We Offer",
    },
    {
        href: "#gallery",
        text: "Gallery",
    },
    {
        href: "#contact-us",
        text: "Contact Us",
    },
];

const NavLinksContent: NavLink[] = navLinksData.map((item, index) => ({
    ...item,
    id: index + 1,
}));

const whatWeOfferData = [
    {
        image: "/hbcc-photos/social-action-shot.jpg",
        alt: "Two concurrent chess games taking place side by side with several people of varying ages playing or watching the games. There is a chess clock on the table in the foreground.",
        title: "Membership",
        description: (
            <>
                <p>
                    While membership is required for competitive chess, you’re
                    welcome to come along, play some social games, enjoy a drink
                    and a chat and see how you find things, with no obligations.
                </p>
                <p>
                    If you decide to become a member, we charge an annual
                    membership fee which runs from{" "}
                    <em>September 1st to August 31st</em>–{" "}
                    <strong>
                        £30 for adults (reduced to £20 for members of the Trades
                        Club)
                    </strong>
                    .
                </p>
            </>
        ),
    },
    {
        image: "/hbcc-photos/social-action-shot.jpg",
        alt: "Two concurrent chess games taking place side by side with several people of varying ages playing or watching the games. There is a chess clock on the table in the foreground.",
        title: "Membership",
        description: (
            <>
                <p>
                    While membership is required for competitive chess, you’re
                    welcome to come along, play some social games, enjoy a drink
                    and a chat and see how you find things, with no obligations.
                </p>
                <p>
                    If you decide to become a member, we charge an annual
                    membership fee which runs from{" "}
                    <em>September 1st to August 31st</em>–{" "}
                    <strong>
                        £30 for adults (reduced to £20 for members of the Trades
                        Club)
                    </strong>
                    .
                </p>
            </>
        ),
    },
];

const WhatWeOfferContent: WhatWeOffer[] = whatWeOfferData.map(
    (item, index) => ({ ...item, id: index + 1 })
);

const galleryData = [
    {
        image: "/hbcc-photos/board-close-up-colour.jpg",
        alt: "A table with a chess board and pieces set up for a game. There is a chess clock, extra Queen pieces, and a scoresheet. In the background but out of focus is a similarly set up table.",
    },
    {
        image: "/hbcc-photos/move-close-up.jpg",
        alt: "A man playing as Black in a game of chess, making his move with a Black pawn.",
    },
    {
        image: "/hbcc-photos/trades-club-inside.jpg",
        alt: "A black door close up depicting the words Trades Club.",
    },
    {
        image: "/hbcc-photos/wide-shot.jpg",
        alt: "Ten people playing chess across five tables. Each player is either thinking, making a move, or writing down a move they just made.",
    },
    {
        image: "/hbcc-photos/player-thinking.jpg",
        alt: "A man and a woman playing chess. The woman is looking at the board and calculating.",
    },
    {
        image: "/hbcc-photos/scratching-face.jpg",
        alt: "A man with a pen in hand, scratching his face while he thinks on his next move.",
    },
];

const GalleryContent: Image[] = galleryData.map((item, index) => ({
    ...item,
    id: index + 1,
}));

const contactOptionsData = [
    { option: "Join the Club" },
    { option: "Question" },
    { option: "Other" },
];

const ContactOptionsContent: ContactOptions[] = contactOptionsData.map(
    (item, index) => ({ ...item, id: index + 1 })
);

const usefulLinksData = [
    {
        href: "https://www.englishchess.org.uk/",
        name: "ECF",
        description: "Link to the English Chess Federation homepage",
    },
    {
        href: "https://rating.englishchess.org.uk/v2/new/list_players.php?club_code=8HBB",
        name: "ECF Ratings",
        description:
            "Link to the English Chess Federation rating database for Hebden Bridge Chess Club players",
    },
    {
        href: "https://ecf.justgo.com/",
        name: "ECF Member Portal",
        description: "Link to the English Chess Federation member portal",
    },
    {
        href: "https://www.youtube.com/@PowerPlayChess",
        name: "Power Play YouTube",
        description: "Link to the Power Play YouTube channel",
    },
    {
        href: "https://thetradesclub.com/",
        name: "Trades Club",
        description: "Link to the Trades Club website",
    },
];

const UsefulLinksContent: UsefulLinks[] = usefulLinksData.map(
    (item, index) => ({ ...item, id: index + 1 })
);

export {
    NavLinksContent,
    WhatWeOfferContent,
    GalleryContent,
    ContactOptionsContent,
    UsefulLinksContent,
};
