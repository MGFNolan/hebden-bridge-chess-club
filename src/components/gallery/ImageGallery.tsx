import { useRef, useState, useEffect } from "react";
import ImageModal from "./ImageModal";
import { AnimatePresence, motion } from "framer-motion";
import useQueryGalleryImages from "../../hooks/useQueryGalleryImages.tsx";
import Loader from "../Loader.tsx";
import Error from "../Error.tsx";

const INITIAL_VISIBLE_IMAGES = 12;

export default function ImageGallery() {
    const { galleryImages, error, isLoading } = useQueryGalleryImages();

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [showAll, setShowAll] = useState(false);

    const lastFocusedElement = useRef<HTMLButtonElement | null>(null);

    const visibleImages = showAll
        ? galleryImages
        : galleryImages?.slice(0, INITIAL_VISIBLE_IMAGES);

    const handleImageClick = (index: number, buttonRef: HTMLButtonElement) => {
        lastFocusedElement.current = buttonRef;
        setSelectedIndex(index);
    };

    const handleModalIndexChange = (newIndex: number) => {
        setSelectedIndex(newIndex);
    };

    const handleLoadAll = () => {
        setShowAll(true);
    };

    const handleCloseModal = () => {
        setSelectedIndex(null);
        setTimeout(() => {
            lastFocusedElement.current?.focus();
        }, 0);
    };

    useEffect(() => {
        if (
            galleryImages &&
            selectedIndex !== null &&
            selectedIndex >= INITIAL_VISIBLE_IMAGES &&
            !showAll
        ) {
            setShowAll(true);
        }
    }, [selectedIndex, showAll, galleryImages]);

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <section
            id="gallery"
            className="gallery container"
            aria-labelledby="gallery-title"
        >
            <h2 className="gallery__title" id="gallery-title">
                Image Gallery
            </h2>

            <AnimatePresence>
                <motion.div
                    className="gallery__grid"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } },
                    }}
                >
                    {isLoading && !error && <Loader />}
                    {visibleImages?.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className="gallery__item"
                            variants={itemVariants}
                            layout
                        >
                            <figure>
                                <button
                                    onClick={(e) =>
                                        handleImageClick(index, e.currentTarget)
                                    }
                                    className="gallery__thumbnail"
                                    aria-label={`View larger version of ${image.img_alt}`}
                                >
                                    <img
                                        src={image.img_url}
                                        alt={image.img_alt}
                                        loading="lazy"
                                        className="gallery__thumbnail-image"
                                        aria-hidden="true"
                                    />
                                </button>
                                <figcaption className="gallery__caption">
                                    {image.img_alt}
                                </figcaption>
                            </figure>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>

            {galleryImages &&
                !showAll &&
                galleryImages.length > INITIAL_VISIBLE_IMAGES && (
                    <div className="gallery__load-more-container">
                        <button
                            onClick={handleLoadAll}
                            className="gallery__load-more-button btn--primary"
                        >
                            Load All
                        </button>
                    </div>
                )}

            {selectedIndex !== null && galleryImages && (
                <ImageModal
                    images={galleryImages}
                    initialIndex={selectedIndex}
                    onClose={handleCloseModal}
                    onIndexChange={handleModalIndexChange}
                />
            )}

            {!isLoading && error && (
                <Error>
                    It looks like something went wrong while loading our recent
                    news.
                </Error>
            )}
        </section>
    );
}
