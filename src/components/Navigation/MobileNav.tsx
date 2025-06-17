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
            className="fixed top-0 right-0 bottom-0 left-0 hidden justify-end bg-white/30 pl-30"
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
                className="flex h-full w-full max-w-96 min-w-65 flex-col items-start gap-y-18 bg-white p-6 pl-7"
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
                    className="flex flex-col gap-y-8"
                >
                    {NavLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`group relative flex flex-col font-medium transition-all duration-300 ease-in-out ${
                                activeLinkId === link.id ? 'gap-y-6' : 'gap-y-0'
                            }`}
                            onClick={() =>
                                setActiveLinkId(
                                    activeLinkId === link.id ? -1 : link.id
                                )
                            }
                        >
                            <div className="flex cursor-pointer items-center gap-x-1.75">
                                <a
                                    href="#"
                                    className={`text-grey-600 ${
                                        activeLinkId === link.id
                                            ? 'text-grey-1000'
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
