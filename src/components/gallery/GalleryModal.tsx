import { useState, useEffect, useRef, useCallback } from "react";
import { type Image } from "../../utils/contentTypes.tsx";
import CloseIcon from "../Icons/CloseIcon.tsx";

interface ImageModalProps {
    images: Image[];
    initialIndex: number;
    onClose: () => void;
    onIndexChange?: (index: number) => void;
    onAnnouncement?: (message: string) => void;
}

export default function ImageModal({
    images,
    initialIndex,
    onClose,
    onIndexChange,
    onAnnouncement,
}: ImageModalProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const modalRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const currentImage = images[currentIndex];
    const isFirstImage = currentIndex === 0;
    const isLastImage = currentIndex === images.length - 1;

    const announceImageChange = useCallback(
        (index: number) => {
            if (!onAnnouncement) return;
            const image = images[index];
            const position = `Image ${index + 1} of ${images.length}`;
            onAnnouncement(`${position}: ${image.img_alt}`);
        },
        [images, onAnnouncement]
    );

    const goToPrevious = useCallback(() => {
        if (!isFirstImage) {
            const newIndex = currentIndex - 1;
            onIndexChange?.(newIndex);
            setCurrentIndex(newIndex);
            announceImageChange(newIndex);
        }
    }, [isFirstImage, currentIndex, announceImageChange, onIndexChange]);

    const goToNext = useCallback(() => {
        if (!isLastImage) {
            const newIndex = currentIndex + 1;
            onIndexChange?.(newIndex);
            setCurrentIndex(newIndex);
            announceImageChange(newIndex);
        }
    }, [isLastImage, currentIndex, announceImageChange, onIndexChange]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case "Escape":
                    onClose();
                    break;
                case "ArrowLeft":
                    e.preventDefault();
                    goToPrevious();
                    break;
                case "ArrowRight":
                    e.preventDefault();
                    goToNext();
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose, goToPrevious, goToNext]);

    useEffect(() => {
        closeButtonRef.current?.focus();
        announceImageChange(currentIndex);
    }, [currentIndex, announceImageChange]);

    useEffect(() => {
        const modal = modalRef.current;
        if (!modal) return;

        const focusableElements = modal.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleTabKey = (e: KeyboardEvent) => {
            if (e.key !== "Tab") return;

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement?.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement?.focus();
                }
            }
        };

        modal.addEventListener("keydown", handleTabKey);
        return () => modal.removeEventListener("keydown", handleTabKey);
    }, []);

    useEffect(() => {
        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth;
        const originalPaddingRight = document.body.style.paddingRight;

        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        return () => {
            document.body.style.overflow = "unset";
            document.body.style.paddingRight = originalPaddingRight;
        };
    }, []);

    return (
        <>
            <div
                className="gallery-modal__backdrop"
                onClick={onClose}
                aria-hidden="true"
            />

            <div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-label="Image viewer"
                className="gallery-modal"
            >
                <div className="gallery-modal__container">
                    <div className="gallery-modal__header">
                        <span className="gallery-modal__counter">
                            {currentIndex + 1} / {images.length}
                        </span>
                        <button
                            ref={closeButtonRef}
                            onClick={onClose}
                            className="gallery-modal__close-button btn--primary btn--idle"
                            aria-label="Close image viewer"
                        >
                            <CloseIcon className="gallery-modal__close-icon" />
                        </button>
                    </div>

                    <div className="gallery-modal__image-container">
                        <img
                            src={currentImage.img_url}
                            alt={currentImage.img_alt}
                            className={`gallery-modal__image ${
                                !prefersReducedMotion
                                    ? "gallery-modal__image--animated"
                                    : ""
                            }`}
                        />
                    </div>

                    <div className="gallery-modal__footer">
                        <button
                            onClick={goToPrevious}
                            disabled={isFirstImage}
                            className="gallery-modal__nav-button btn--primary btn--idle"
                            aria-label="Previous image"
                        >
                            ← Previous
                        </button>

                        <button
                            onClick={goToNext}
                            disabled={isLastImage}
                            className="gallery-modal__nav-button btn--primary btn--idle"
                            aria-label="Next image"
                        >
                            Next →
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
