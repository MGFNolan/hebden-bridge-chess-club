import { motion } from "motion/react";

import { NavLinksContent } from "../../utils/content";
import { useMenuContext } from "../../context/MobileMenuContext";
import { useState } from "react";
import Close from "../Icons/CloseIcon";

export default function MobileNav() {
    const { menuOpened, setMenuOpened } = useMenuContext();
    const [activeLinkId, setActiveLinkId] = useState<number>(-1);

    return (
        <motion.div
            animate={menuOpened ? "visible" : "hidden"}
            variants={{
                hidden: {
                    opacity: 0,
                    display: "none",
                },
                visible: {
                    opacity: 1,
                    display: "flex",
                },
            }}
            className="mobile-nav-overlay"
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="mobile navigation menu"
        >
            <motion.nav
                animate={menuOpened ? "visible" : "hidden"}
                variants={{
                    hidden: {
                        opacity: 0,
                        x: "100%",
                    },
                    visible: {
                        opacity: 1,
                        x: "0%",
                    },
                }}
                transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                }}
                className="mobile-nav"
            >
                <Close
                    onClick={() => setMenuOpened(false)}
                    className="mobile-nav__close"
                />
                <motion.ul
                    animate={menuOpened ? "visible" : "hidden"}
                    variants={{
                        hidden: {
                            opacity: 0,
                            x: "100%",
                        },
                        visible: {
                            opacity: 1,
                            x: "0%",
                        },
                    }}
                    transition={{
                        ease: "easeOut",
                        delay: 0.05,
                    }}
                    className="mobile-nav__list"
                >
                    {NavLinksContent.map((link) => (
                        <li
                            key={link.id}
                            className={`mobile-nav__item ${
                                activeLinkId === link.id
                                    ? "mobile-nav__item--active"
                                    : ""
                            }`.trim()}
                            onClick={() => {
                                setActiveLinkId(
                                    activeLinkId === link.id ? -1 : link.id
                                );
                                setMenuOpened(false);
                            }}
                        >
                            <div className="mobile-nav__item-content">
                                <a
                                    href={link.href}
                                    className={`mobile-nav__link ${
                                        activeLinkId === link.id
                                            ? "mobile-nav__link--active"
                                            : ""
                                    }`}
                                    aria-current={
                                        activeLinkId === link.id
                                            ? "true"
                                            : undefined
                                    }
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
