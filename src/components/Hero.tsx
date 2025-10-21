import { motion, useReducedMotion } from "motion/react";

export default function Hero() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="hero"
            className="hero"
            aria-label="Hero section with a welcome message"
        >
            <div className="hero__bg">
                <div className="container hero__text">
                    <motion.h1
                        initial={
                            shouldReduceMotion
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0 }
                        }
                        animate={{ opacity: 1, scale: 1 }}
                        transition={
                            shouldReduceMotion
                                ? { duration: 0 }
                                : {
                                      duration: 0.6,
                                      scale: {
                                          type: "spring",
                                          visualDuration: 1,
                                          bounce: 0.5,
                                      },
                                  }
                        }
                        className="hero__text__title"
                    >
                        Hebden Bridge Chess Club
                    </motion.h1>
                </div>
            </div>
        </section>
    );
}
