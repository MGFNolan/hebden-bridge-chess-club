import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";

import { Navigation, FreeMode, Thumbs } from "swiper/modules";
import { useState } from "react";

import { GalleryContent } from "../utils/content";

export default function Gallery() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    const [mainSwiper, setMainSwiper] = useState<SwiperClass | null>(null);

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
            <div className="gallery__swiper">
                <Swiper
                    onSwiper={setMainSwiper}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="gallery-swiper"
                    aria-label="Image gallery, main display"
                >
                    {GalleryContent.map((image) => (
                        <SwiperSlide
                            key={image.id}
                            role="group"
                            aria-roledescription="slide"
                            aria-label={image.alt}
                        >
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
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="gallery-thumbs"
                    aria-label="Thumbnail image navigation"
                >
                    {GalleryContent.map((image) => (
                        <SwiperSlide
                            key={image.id}
                            role="button"
                            tabIndex={0}
                            aria-roledescription="thumbnail"
                            aria-label={`View larger image: ${image.alt}`}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    mainSwiper?.slideToLoop(image.id - 1);
                                    e.preventDefault();
                                }
                            }}
                        >
                            <img
                                loading="lazy"
                                src={image.image}
                                alt={`Thumbnail: ${image.alt}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
