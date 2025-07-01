import { NavLinksContent } from "../../utils/content";
import Hamburger from "./../Icons/Hamburger.tsx";
import LogoIcon from "./../Icons/LogoIcon.tsx";

export default function NavBar() {
    return (
        <nav className="nav" aria-label="Main navigation">
            <div className="nav__group">
                <a href="/" className="nav__group__logo" aria-label="Home">
                    <LogoIcon />
                </a>

                <ul className="nav__links">
                    {NavLinksContent.map((link) => (
                        <li key={link.id} className="nav__link-individual">
                            <a
                                href={link.href}
                                aria-current={
                                    location.pathname === link.href
                                        ? "page"
                                        : undefined
                                }
                            >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
                <Hamburger />
            </div>
        </nav>
    );
}
