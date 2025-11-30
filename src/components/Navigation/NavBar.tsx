import { useEffect } from "react";
import { NavLinksContent } from "../../utils/content";
import Hamburger from "./../Icons/Hamburger.tsx";
import LogoIcon from "./../Icons/LogoIcon.tsx";

export default function NavBar() {
    useEffect(() => {
        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const navbar = document.getElementById("navbar");

            if (navbar) {
                if (prevScrollPos > currentScrollPos || currentScrollPos < 10) {
                    navbar.style.opacity = "1";
                } else {
                    navbar.style.opacity = "0";
                }
            }
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="nav" aria-label="Main navigation" id="navbar">
            <div className="nav__group">
                <a href="/" className="nav__logo" aria-label="Home">
                    <LogoIcon />
                </a>

                <ul className="nav__links">
                    {NavLinksContent.map((link) => (
                        <li key={link.id} className="nav__item">
                            <a
                                className="nav__link"
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
