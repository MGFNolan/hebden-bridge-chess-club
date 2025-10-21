import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { A11y, Navigation, FreeMode, Thumbs } from "swiper/modules";
import { useState } from "react";

import { GalleryContent } from "../utils/content";

export default function Gallery() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    const [mainSwiper, setMainSwiper] = useState<SwiperClass | null>(null);

    const handleThumbnailClick = (index: number) => {
        if (mainSwiper) {
            mainSwiper.slideToLoop(index);
            (mainSwiper.el as HTMLElement).focus();
        }
    };

    return (
        <section
            id="gallery"
            className="gallery"
            aria-labelledby="gallery-heading"
        >
            <div className="container">
                <h2 className="gallery__title" id="gallery-heading">
                    Gallery
                </h2>
            </div>
            <div className="gallery__swiper" id="main-swiper-container">
                <Swiper
                    id="main-swiper"
                    onSwiper={setMainSwiper}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[A11y, FreeMode, Navigation, Thumbs]}
                    className="gallery-swiper"
                    aria-label="Image gallery, main display"
                    a11y={{
                        prevSlideMessage: "Previous image",
                        nextSlideMessage: "Next image",
                    }}
                >
                    {GalleryContent.map((image) => (
                        <SwiperSlide key={image.id}>
                            <img
                                loading="lazy"
                                src={image.image}
                                alt={image.alt}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={3.5}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[A11y, FreeMode, Navigation, Thumbs]}
                    className="gallery-thumbs"
                    aria-label="Thumbnail image navigation"
                    a11y={{
                        slideRole: "button",
                        slideLabelMessage:
                            "View image {{index}} of {{slidesLength}}",
                    }}
                >
                    {GalleryContent.map((image, index) => (
                        <SwiperSlide
                            key={image.id}
                            tabIndex={0}
                            onClick={() => handleThumbnailClick(index)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    handleThumbnailClick(index);
                                    e.preventDefault();
                                }
                            }}
                        >
                            <img
                                loading="lazy"
                                src={image.image}
                                alt={image.alt}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
