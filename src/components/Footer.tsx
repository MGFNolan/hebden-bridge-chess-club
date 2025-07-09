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
                    <h3>Where to Find Us</h3>
                    <div className="footer__left__content">
                        <FaLocationDot />
                        <p>
                            The Trades Club <br /> Holme Street <br /> Hebden
                            Bridge <br /> HX7 8EE
                        </p>
                    </div>
                </div>
                <div className="footer__middle">
                    <div className="footer__content__logo">
                        <LogoIcon />
                    </div>

                    <div className="footer__content__icons">
                        <a href="https://www.chess.com/club/hebden-bridge-chess-club">
                            <SiChessdotcom />
                        </a>
                        <a href="">
                            <SiLichess />
                        </a>
                    </div>
                    <div className="footer__content__text">
                        <p>
                            © 2025 Hebden Bridge Chess Club |{" "}
                            <a
                                href="https://github.com/MGFNolan"
                                target="_blank"
                            >
                                Website built by MGFNolan
                            </a>
                        </p>
                    </div>
                </div>
                <div className="footer__right">
                    <div>
                        {" "}
                        <h3>Useful Links</h3>
                        <div className="footer__right__content">
                            <IoInformationCircle />
                            <ul>
                                {UsefulLinksContent.map((link) => (
                                    <li key={link.id}>
                                        {" "}
                                        <a
                                            href={link.href}
                                            aria-label={link.description}
                                            target="_blank"
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
