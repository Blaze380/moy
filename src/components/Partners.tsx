import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Partners () {
  const partners = [
    { name: 'Image 01', logo: '/logos/01.png' },
    { name: 'Image 02', logo: '/logos/02.png' },
    { name: 'Image 03', logo: '/logos/03.png' },
    //{ name: 'Image 04', logo: '/logos/04.png' },
    { name: 'Image 05', logo: '/logos/05.png' },
    { name: 'Image 06', logo: '/logos/05s.png' },
    { name: 'Image 06', logo: 'https://sparktechh.com/images/logo.svg' },
    { name: "Ape", logo: "/logos/ape.png" },
    { name: 'b1', logo: '/logos/b1.png' },
    { name: 'tsenane', logo: '/logos/tsenane.png' },
  ];

  return (
    <section className="py-2  bg-fuchsia-300  w-full ">
      <div className="space-y-2">
        <h3 className={`text-2xl text-center  text-gray-700 font-bold atext-gray-500 text-wrap`}>
          Marcas que confiam em nós
        </h3>

        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
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
              <div className="flex items-center justify-center h-32  p-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 max-w-[120px] filter brightness-0 contrast-200 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}