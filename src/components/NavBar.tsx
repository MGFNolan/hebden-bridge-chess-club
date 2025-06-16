import { NavLinks } from '../utils/content';

import LogoIcon from './Icons/LogoIcon.tsx';

export default function NavBar() {
    return (
        <nav className="nav">
            <div className="nav__group">
                <a href="/" className="nav__group__logo">
                    <LogoIcon />
                </a>

                <ul className="nav__links">
                    {NavLinks.map((link) => (
                        <li key={link.id} className="nav__link__individual">
                            <a href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
