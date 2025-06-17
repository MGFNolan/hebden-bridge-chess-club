import { motion } from 'motion/react';

import { NavLinks } from '../../utils/content';
import { useMenuContext } from '../../context/MobileMenuContext';
import { useState } from 'react';
import Close from '../Icons/Close';

export default function MobileNav() {
    const { menuOpened } = useMenuContext();
    const [activeLinkId, setActiveLinkId] = useState<number>(-1);

    return (
        <motion.div
            animate={menuOpened ? 'visible' : 'hidden'}
            variants={{
                hidden: {
                    opacity: 0,
                    display: 'none',
                },
                visible: {
                    opacity: 1,
                    display: 'flex',
                },
            }}
            className="mobile-nav-wrapper"
        >
            <motion.nav
                animate={menuOpened ? 'visible' : 'hidden'}
                variants={{
                    hidden: {
                        opacity: 0,
                        x: '100%',
                    },
                    visible: {
                        opacity: 1,
                        x: '0%',
                    },
                }}
                transition={{
                    duration: 0.35,
                    ease: 'easeInOut',
                }}
                className="mobile-nav"
            >
                <Close />
                <motion.ul
                    animate={menuOpened ? 'visible' : 'hidden'}
                    variants={{
                        hidden: {
                            opacity: 0,
                            x: '100%',
                        },
                        visible: {
                            opacity: 1,
                            x: '0%',
                        },
                    }}
                    transition={{
                        ease: 'easeOut',
                        delay: 0.05,
                    }}
                    className="mobile-nav__links"
                >
                    {NavLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`mobile-nav__link-individual ${
                                activeLinkId === link.id ? 'gap-y-6' : 'gap-y-0'
                            }`}
                            onClick={() =>
                                setActiveLinkId(
                                    activeLinkId === link.id ? -1 : link.id
                                )
                            }
                        >
                            <div className="mobile-nav__link-individual__wrapper">
                                <a
                                    href={link.href}
                                    className={`text-orange-500 ${
                                        activeLinkId === link.id
                                            ? 'text-orange-600'
                                            : ''
                                    }`}
                                >
                                    {link.text}
                                </a>
                            </div>
                        </li>
                    ))}
                </motion.ul>
            </motion.nav>
        </motion.div>
    );
}
