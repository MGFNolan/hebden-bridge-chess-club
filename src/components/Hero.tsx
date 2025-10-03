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
                        <span className="hero__text__title__welcome">
                            Welcome to
                        </span>{" "}
                        <br />{" "}
                        <span className="hero__text__title__hebden-bridge">
                            Hebden Bridge
                        </span>{" "}
                        <br />{" "}
                        <span className="hero__text__title__chess-club">
                            Chess Club
                        </span>
                    </motion.h1>
                </div>
            </div>
        </section>
    );
}
