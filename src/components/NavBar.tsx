import { NavLinks } from '../utils/content';

import LogoIconBlack from './Icons/LogoIconBlack.tsx';

export default function NavBar() {
    return (
        <nav className="nav">
            <div className="nav__logo">
                <a href="/">
                    <LogoIconBlack />
                    <span>Hebden Bridge Chess Club</span>
                </a>

                <ul>
                    {NavLinks.map((link) => (
                        <li key={link.id} className="nav__link">
                            <a href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
