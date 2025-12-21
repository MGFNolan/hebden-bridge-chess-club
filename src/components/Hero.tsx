import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import heroImageHq from "/hbcc-hero-image.jpg";
import heroImageLq from "/hbcc-hero-image-sm.jpeg";

export default function Hero() {
    const shouldReduceMotion = useReducedMotion();
    const [imageSrc, setImageSrc] = useState(heroImageLq);
    const heroRef = useRef<HTMLElement>(null);

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

    useEffect(() => {
        if (heroRef.current) {
            // Set the height statically to the window's inner height on load
            heroRef.current.style.height = `${window.innerHeight}px`;
        }
    }, []);

    return (
        <section
            id="hero"
            className="hero"
            aria-label="Hero section"
            ref={heroRef}
        >
            <div className="hero__background">
                <div
                    className="hero__background-image"
                    style={{ backgroundImage: `url(${imageSrc})` }}
                    role="img"
                    aria-label="A chess board with pieces set up in a park in Hebden Bridge"
                ></div>
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
