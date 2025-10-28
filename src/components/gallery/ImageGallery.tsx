import { useRef, useState } from "react";
import ImageModal from "./ImageModal";
import { type Image } from "../../utils/contentTypes.tsx";

export default function ImageGallery({ images }: { images: Image[] }) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [announcement, setAnnouncement] = useState<string>("");

    const lastFocusedElement = useRef<HTMLButtonElement | null>(null);

    const handleImageClick = (index: number, buttonRef: HTMLButtonElement) => {
        lastFocusedElement.current = buttonRef;
        setSelectedIndex(index);
    };

    const handleCloseModal = () => {
        setSelectedIndex(null);
        setTimeout(() => {
            lastFocusedElement.current?.focus();
        }, 0);
    };

    return (
        <section
            id="gallery"
            className="gallery"
            aria-labelledby="gallery-title"
        >
            <div className="container">
                <h2 className="gallery__title" id="gallery-title">
                    Image Gallery
                </h2>

                <div
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                    className="gallery__announcement"
                >
                    {announcement}
                </div>

                <div className="gallery__grid">
                    {images.map((image, index) => (
                        <div key={image.id} className="gallery__item">
                            <figure>
                                <button
                                    onClick={(e) =>
                                        handleImageClick(index, e.currentTarget)
                                    }
                                    className="gallery__thumbnail"
                                    aria-label={`View larger version of ${image.alt}`}
                                >
                                    <img
                                        src={image.image}
                                        alt="" // Alt text is on the button, so this can be empty
                                        loading="lazy"
                                        className="gallery__thumbnail-image"
                                        aria-hidden="true"
                                    />
                                </button>
                                <figcaption className="gallery__caption">
                                    {image.alt}
                                </figcaption>
                            </figure>
                        </div>
                    ))}
                </div>

                {selectedIndex !== null && (
                    <ImageModal
                        images={images}
                        initialIndex={selectedIndex}
                        onClose={handleCloseModal}
                        onAnnouncement={setAnnouncement}
                    />
                )}
            </div>
        </section>
    );
}
