import { motion } from "motion/react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="hero"
            aria-label="Hero section: Welcome message and contact information"
        >
            <div className="hero__bg">
                <div className="container hero__text">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: {
                                type: "spring",
                                visualDuration: 0.6,
                                bounce: 0.5,
                            },
                        }}
                        className="hero__text__title"
                    >
                        <span className="hero__text__title__hebden-bridge">
                            Hebden Bridge
                        </span>{" "}
                        <br />{" "}
                        <span className="hero__text__title__chess-club">
                            Chess Club
                        </span>
                    </motion.h1>
                    <p className="hero__text__lede">
                        No matter whether you’re new to chess, an online player
                        who wants to try playing over the board, a lapsed player
                        who is returning to the game, or an experienced wood
                        pusher, you are most welcome to join us at Hebden Bridge
                        Trades Club on a Monday night from 19:30. <br />
                        <br />
                        We’re there most weeks. Anyone{" "}
                        <strong>over the age of 16</strong> and of{" "}
                        <strong>any level of playing ability</strong> is welcome
                        to join us for a game!
                    </p>
                    <button
                        onClick={() => {
                            const target = document.getElementById("contact");
                            target?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="btn--primary"
                        aria-label="Scroll to contact section"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
}
