import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Partners() {
  const partners = [
    { name: 'Image 01', logo: '/logos/01.png' },
    { name: 'Image 02', logo: '/logos/02.png' },
    { name: 'Image 03', logo: '/logos/03.png' },
    { name: 'Image 04', logo: '/logos/04.png' },
    { name: 'Image 05', logo: '/logos/05.png' },
    { name: 'Image 06', logo: '/logos/05s.png' },
    // { name: 'Image 06', logo: 'https://sparktechh.com/images/logo.svg' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl text-center mb-12 text-gray-500">
          Já escolhido pelos líderes
        </h3>
        
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.name}>
              <div className="flex items-center justify-center h-32 p-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 max-w-[120px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}