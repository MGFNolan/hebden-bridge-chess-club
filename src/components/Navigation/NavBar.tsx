import { NavLinksContent } from "../../utils/content";
import Hamburger from "./../Icons/Hamburger.tsx";
import LogoIcon from "./../Icons/LogoIcon.tsx";

export default function NavBar() {
    let prevScrollPos = window.pageYOffset;

    window.onscroll = () => {
        const currentScrollPos = window.pageYOffset;
        const navbar = document.getElementById("navbar");

        if (navbar) {
            // Transition opacity instead of top
            navbar.style.transition = "opacity 0.5s ease";

            if (prevScrollPos > currentScrollPos) {
                navbar.style.opacity = "1";
            } else {
                navbar.style.opacity = "0";
            }
        }

        prevScrollPos = currentScrollPos;
    };

    return (
        <nav className="nav" aria-label="Main navigation" id="navbar">
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
