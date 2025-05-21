'use client';

import Section from '@/components/common/Section';
import Wrapper from '@/components/common/Wrapper';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ArrowPrevIcon from '@/components/icons/ArrowPrevIcon';
import ArrowNextIcon from '@/components/icons/ArrowNextIcon';

export default function FeaturedIn() {
  const logos = [
    { src: '/icons/features/19th.svg', alt: 'The 19th' },
    { src: '/icons/features/fortune.svg', alt: 'Fortune' },
    { src: '/icons/features/usa-today.svg', alt: 'USA Today' },
    { src: '/icons/features/la-times.svg', alt: 'LA Times' },
    { src: '/icons/features/fierce-healthcare.svg', alt: 'Fierce Healthcare' },
    { src: '/icons/features/today.svg', alt: 'Today' },
    { src: '/icons/features/forbes.svg', alt: 'Forbes' },
    { src: '/icons/features/advocate.svg', alt: 'Advocate' },
  ];

  return (
    <Section>
      <Wrapper>
        <h2 className="text-center !mb-[32px]">Featured in ...</h2>

        <div className="flex items-center gap-[16px] lg:gap-[32px] 2xl:gap-[64px]">
          <button
            className="features-button-prev !w-[34px] !h-[34px] !static !m-0 after:!content-none hover:opacity-60 transition-opacity duration-300"
            aria-label="Previous slide"
          >
            <ArrowPrevIcon />
          </button>
          <Swiper
            modules={[Navigation, Keyboard, Autoplay]}
            loop={true}
            spaceBetween={16}
            slidesPerView={1}
            keyboard={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: '.features-button-prev',
              nextEl: '.features-button-next',
            }}
            // TODO: check breakpoints
            breakpoints={{
              560: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 32,
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 64,
              },
            }}
            className="flex-1"
          >
            {logos.map((logo) => (
              <SwiperSlide key={logo.alt}>
                <div className="flex justify-center items-center h-[54px]">
                  <Image src={logo.src} alt={logo.alt} fill />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className="features-button-next !w-[34px] !h-[34px] !static !m-0 after:!content-none hover:opacity-60 transition-opacity duration-300"
            aria-label="Next slide"
          >
            <ArrowNextIcon />
          </button>
        </div>
      </Wrapper>
    </Section>
  );
}
