import { NavLinks } from '../utils/content';

import LogoIcon from './Icons/LogoIcon.tsx';

export default function NavBar() {
    return (
        <nav className="nav">
            <div className="nav__logo">
                <a href="/" className="nav__logo__link">
                    <LogoIcon />
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
