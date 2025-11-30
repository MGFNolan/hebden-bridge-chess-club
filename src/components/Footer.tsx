import { SiChessdotcom, SiLichess } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { IoInformationCircle } from "react-icons/io5";
import { UsefulLinksContent } from "../utils/content";
import LogoIcon from "./Icons/LogoIcon";

const socialLinks = [
    {
        id: "chesscom",
        href: "https://www.chess.com/club/hebden-bridge-chess-club",
        label: "Visit Hebden Bridge Chess Club on chess.com",
        Icon: SiChessdotcom,
    },
    {
        id: "lichess",
        href: "https://lichess.org/team/hebden-bridge-online-cc",
        label: "Visit Hebden Bridge Chess Club on lichess.org",
        Icon: SiLichess,
    },
];

export default function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="container footer__content">
                <div className="footer__location">
                    <h2>Where to Find Us</h2>
                    <div className="footer__location-content">
                        <FaLocationDot aria-hidden="true" />
                        <address>
                            The Trades Club <br /> Holme Street <br /> Hebden
                            Bridge <br /> HX7 8EE
                        </address>
                    </div>
                </div>
                <div className="footer__center-column">
                    <div className="footer__logo">
                        <LogoIcon aria-hidden="true" />
                    </div>

                    <div className="footer__socials">
                        {socialLinks.map(({ id, href, label, Icon }) => (
                            <a
                                key={id}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                    <p className="footer__copyright">
                        © 2025 Hebden Bridge Chess Club |{" "}
                        <a
                            href="https://github.com/MGFNolan"
                            target="_blank"
                            aria-label="Visit MGFNolan's profile on GitHub"
                            rel="noopener noreferrer nofollow"
                        >
                            Website built by MGFNolan
                        </a>
                    </p>
                </div>
                <div className="footer__useful-links">
                    <h2>Useful Links</h2>
                    <div className="footer__useful-links-content">
                        <IoInformationCircle aria-hidden="true" />
                        <ul>
                            {UsefulLinksContent.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={link.href}
                                        aria-label={link.description}
                                        target="_blank"
                                        rel="noopener noreferrer nofollow"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
