import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import img1 from "../../assets/brand_logo01.png"
import img2 from "../../assets/brand_logo02.png"
import img3 from "../../assets/brand_logo03.png"
import img4 from "../../assets/brand_logo04.png"
import img5 from "../../assets/brand_logo05.png"

const ImageSlider = () => {
    const images = [
        { id: 1, src: img1, alt: 'Service 1' },
        { id: 2, src: img2, alt: 'Service 2' },
        { id: 3, src: img3, alt: 'Service 3' },
        { id: 4, src: img4, alt: 'Service 4' },
        { id: 5, src: img5, alt: 'Service 5' },
    ];

    return (
        <section className="py-14 bg-white">
            <div className="w-[85S%] mx-auto flex items-center justify-center overflow-hidden">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        480: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {images.map((image) => (
                        <SwiperSlide key={image.id}>
                            <div className="relative group max-w-36 h-full overflow-hidden">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-all duration-500"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-slate-50/20 group-hover:bg-transparent transition-all duration-500 pointer-events-none"></div>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ImageSlider;