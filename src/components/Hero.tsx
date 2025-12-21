import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import heroImageHq from "/hbcc-hero-image.jpg";
import heroImageLq from "/hbcc-hero-image-sm.jpeg";

export default function Hero() {
    const shouldReduceMotion = useReducedMotion();
    const [imageSrc, setImageSrc] = useState(heroImageLq);

    useEffect(() => {
        const img = new Image();
        img.src = heroImageHq;
        img.onload = () => {
            setImageSrc(heroImageHq);
        };

        // Cleanup function to prevent setting state on an unmounted component
        return () => {
            img.onload = null;
        };
    }, []);

    return (
        <section
            id="hero"
            className="hero"
            aria-label="Hero section with a welcome message"
        >
            <div className="hero__background">
                <img
                    src={imageSrc}
                    alt="A chess board with pieces set up in a park in Hebden Bridge"
                    className="hero__background-image"
                />
                <div className="container hero__content">
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
                        className="hero__title"
                    >
                        Hebden Bridge Chess Club
                    </motion.h1>
                </div>
            </div>
        </section>
    );
}
