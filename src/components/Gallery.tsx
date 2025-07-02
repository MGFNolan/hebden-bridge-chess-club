// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";

// import required modules
import { Navigation, FreeMode, Thumbs } from "swiper/modules";
import { useState } from "react";

import { GalleryContent } from "../utils/content";

export default function App() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

    return (
        <section id="gallery" className="gallery">
            <div>
                <h2 className="gallery__title">Gallery</h2>
            </div>
            <div className="gallery__swiper">
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="gallery-swiper"
                >
                    {GalleryContent.map((image) => (
                        <SwiperSlide key={image.id}>
                            <img src={image.image} alt={image.alt} />
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
                >
                    {GalleryContent.map((image) => (
                        <SwiperSlide key={image.id}>
                            <img src={image.image} alt={image.alt} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
