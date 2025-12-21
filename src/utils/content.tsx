import {
    type NavLink,
    type WhatWeOffer,
    type ContactOptions,
    type UsefulLinks,
} from "./contentTypes";

import membershipImg from "../assets/what-we-offer/membership.jpg";
import leagueChessImg from "../assets/what-we-offer/league-chess.jpg";
import onlineChessImg from "../assets/what-we-offer/online-chess.jpg";
import socialChessImg from "../assets/what-we-offer/social-chess.jpg";
import juniorChessImg from "../assets/what-we-offer/junior-chess.jpg";
import safeSpaceImg from "../assets/what-we-offer/a-safe-space.jpg";

const navLinksData = [
    {
        href: "#join-us-for-a-game",
        text: "Join us for a Game",
    },
    {
        href: "#what-we-offer",
        text: "What we offer",
    },
    {
        href: "#gallery",
        text: "Gallery",
    },
    {
        href: "#contact-us",
        text: "Contact us",
    },
];

const NavLinksContent: NavLink[] = navLinksData.map((item, index) => ({
    ...item,
    id: index + 1,
}));

const whatWeOfferData = [
    {
        image: membershipImg,
        alt: "The Trades Club sign attached to the Trades Club building. There are leaves and branches of a tree in the background.",
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
                    <em>September 1st to August 31st</em> –{" "}
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
        image: leagueChessImg,
        alt: "Two players playing a game of chess at a table. There is a chess clock on the table in the foreground, and pieces that have been exchanged off the board.",
        title: "League Chess",
        description: (
            <>
                <p>
                    If it's competitive chess you're after, then you've come to
                    the right place! This season we have four teams (comprising
                    players of mixed abilities) in the{" "}
                    <em>Calderdale Chess League</em>. Our B team were league
                    champions for 2024-25.
                </p>
                <p>
                    We have a strong pedigree in the local league having won the
                    title ten times since 2000-01. We are also the current
                    holders of the Calderdale Team Lightning title.
                </p>
            </>
        ),
    },
    {
        image: onlineChessImg,
        alt: "Two people playing chess. One is in focus, calculating their next move. Their drinks and scoresheets are next to them.",
        title: "Online Chess",
        description: (
            <>
                <p>
                    We take part in <em>online events</em> and have three teams
                    competing in the <em>4NCL Online</em> (Four Nations Chess
                    League) competition. Players of all abilities can take part.
                    Our first team play in League 1 having progressed through
                    the lower divisions – winning the Division 5 title in 2021,
                    Division 3 in 2022 and Division 2 in 2023.
                </p>
                <p>
                    We also have a chess club page on the{" "}
                    <a
                        href="https://lichess.org/team/hebden-bridge-online-cc"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                    >
                        Lichess website
                    </a>{" "}
                    so come and join our community there too.
                </p>
            </>
        ),
    },
    {
        image: socialChessImg,
        alt: "A group of four people debating a position on the chess board.",
        title: "Social Chess",
        description: (
            <>
                <p>
                    If you aren’t yet ready to take the plunge into competitive
                    chess, then that’s no problem.{" "}
                    <em>Social chess is always available</em> to anyone who
                    wants to come along, find a dance partner, and just have
                    fun. If you’ve never played before, we’ll find someone to
                    show you the basics.
                </p>
                <p>
                    <em>We organise all sorts of activities</em> in the summer
                    months including mentoring, lectures from experienced
                    players and more!
                </p>
            </>
        ),
    },
    {
        image: juniorChessImg,
        alt: "A room of people playing chess games. In the foreground is a young player pressing the clock after her move.",
        title: "Junior Chess",
        description: (
            <>
                <p>
                    We’ve established a new Junior Chess Club for all ages under
                    16. The club has its own coach and meets every{" "}
                    <strong>Wednesday from 16:15 to 17:45</strong> at{" "}
                    <em>Hebden Bridge Town Hall</em>. Please use the contact
                    form at the bottom of the page to enquire and find out more
                    information.
                </p>
            </>
        ),
    },
    {
        image: safeSpaceImg,
        alt: "In the foreground, two players discuss a position on the board with the chess board, the chess clock, and their drinks in view. In the background, another player makes a move in their own game.",
        title: "A Safe Space",
        description: (
            <>
                <p>
                    Our membership is <em>growing and increasingly diverse</em>.
                    Everyone is friendly and supportive.
                </p>
                <p>
                    Whoever you are, you’re very welcome at the Hebden Bridge
                    Chess Club.
                </p>
            </>
        ),
    },
];

const WhatWeOfferContent: WhatWeOffer[] = whatWeOfferData.map(
    (item, index) => ({ ...item, id: index + 1 })
);

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
    ContactOptionsContent,
    UsefulLinksContent,
};
