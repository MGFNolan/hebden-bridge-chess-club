import { SiChessdotcom, SiLichess } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { IoInformationCircle } from "react-icons/io5";
import { UsefulLinksContent } from "../utils/content";
import LogoIcon from "./Icons/LogoIcon";

export default function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="container footer__content">
                <div className="footer__left">
                    <h2>Where to Find Us</h2>
                    <div className="footer__left__content">
                        <FaLocationDot aria-hidden="true" />
                        <p>
                            The Trades Club <br /> Holme Street <br /> Hebden
                            Bridge <br /> HX7 8EE
                        </p>
                    </div>
                </div>
                <div className="footer__middle">
                    <div className="footer__content__logo">
                        <LogoIcon aria-hidden="true" />
                    </div>

                    <div className="footer__content__icons">
                        <a
                            href="https://www.chess.com/club/hebden-bridge-chess-club"
                            aria-label="Visit Hebden Bridge Chess Club on chess.com (opens in new tab)"
                            rel="noopener noreferrer nofollow"
                        >
                            <SiChessdotcom />
                        </a>
                        <a
                            href="https://lichess.org/team/hebden-bridge-online-cc"
                            aria-label="Visit Hebden Bridge Chess Club on lichess.org (opens in new tab)"
                            rel="noopener noreferrer nofollow"
                        >
                            <SiLichess />
                        </a>
                    </div>
                    <div className="footer__content__text">
                        <p>
                            © 2025 Hebden Bridge Chess Club |{" "}
                            <a
                                href="https://github.com/MGFNolan"
                                target="_blank"
                                aria-label="Visit MGFNolan's profile on GitHub (opens in new tab)"
                                rel="noopener noreferrer nofollow"
                            >
                                Website built by MGFNolan
                            </a>
                        </p>
                    </div>
                </div>
                <div className="footer__right">
                    <div>
                        {" "}
                        <h2>Useful Links</h2>
                        <div className="footer__right__content">
                            <IoInformationCircle aria-hidden="true" />
                            <ul>
                                {UsefulLinksContent.map((link) => (
                                    <li key={link.id}>
                                        {" "}
                                        <a
                                            href={link.href}
                                            aria-label={`${link.description} (opens in new tab)`}
                                            target="_blank"
                                            rel="noopener noreferrer nofollow"
                                        >
                                            {link.name}
                                        </a>{" "}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
