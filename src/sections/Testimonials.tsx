'use client';

import Image from 'next/image';
import Section from '@/components/common/Section';
import Wrapper from '@/components/common/Wrapper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import StarsIcon from '@/components/icons/StarsIcon';
import ArrowPrevIcon from '@/components/icons/ArrowPrevIcon';
import ArrowNextIcon from '@/components/icons/ArrowNextIcon';
import { SWIPER_BREAKPOINTS } from '@/constants';

const testimonials = [
  {
    text: 'There was no gatekeeping or barriers to accessing the care I needed. Two years later, I couldn’t be happier with the progress I’ve already made',
    member: 'Plume Member for 2 years',
  },
  {
    text: 'Plume helped me with every step of my gender journey and has helped me achieve happiness with myself that I never thought was possible.',
    member: 'Plume Member for 2 years',
  },
  {
    text: 'Their telehealth model made it easy for me to access care without the stress of in-person visits, which was a huge relief.',
    member: 'Plume Member for 2 years',
  },
  {
    text: 'Plume has enabled me to start my transition without the standard hassle. I feel more in control of my identity now than ever.',
    member: 'Plume Member for 1 year',
  },
  {
    text: 'The resources that Plume provides are amazing. The easy access to support groups and treatments is such a relief and beyond helpful!',
    member: 'Plume Member for 1 year',
  },
];

interface Testimonial {
  text: string;
  member: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="flex flex-col h-full px-[24px] py-[24px] md:py-[32px] xl:py-[40px] bg-white rounded-[18px]">
    <div className="mb-[16px]">
      <StarsIcon />
    </div>
    <p className="text-[18px] leading-[24px] mb-[16px]">{testimonial.text}</p>
    <strong className="block text-[20px] leading-[30px] font-semibold mt-auto">
      {testimonial.member}
    </strong>
  </div>
);

export default function Testimonials() {
  return (
    <Section
      className="!pb-[0px]"
      style={{
        background: `url('/images/testimonials/testimonials-bg.jpg') lightgray 50% / cover no-repeat`,
      }}
    >
      <Wrapper className="relative lg:min-h-[570px] lg:flex lg:content-between lg:items-start lg:gap-[32px] xl:gap-[64px]">
        <h2 className="!mb-[32px] lg:flex-1 lg:max-w-[400px] lg:!text-[48px] lg:!leading-[60px]">
          For your gender journey and more — we&apos;ve got you.
        </h2>

        <Swiper
          modules={[Navigation, Keyboard, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: '.testimonials-button-prev',
            nextEl: '.testimonials-button-next',
          }}
          keyboard={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            [SWIPER_BREAKPOINTS.md]: {
              slidesPerView: 2,
            },
            [SWIPER_BREAKPOINTS.xl]: {
              slidesPerView: 2,
              spaceBetween: 64,
            },
          }}
          className="mb-[32px] lg:mb-0 lg:w-[60.5%]"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}

          <div className="flex items-center justify-center gap-[64px] mt-[32px] xl:mt-[64px]">
            <button
              className="testimonials-button-prev !w-[34px] !h-[34px] !static !m-0 after:!content-none hover:opacity-60 transition-opacity duration-300"
              aria-label="Previous slide"
            >
              <ArrowPrevIcon />
            </button>
            <button
              className="testimonials-button-next !w-[34px] !h-[34px] !static !m-0 after:!content-none hover:opacity-60 transition-opacity duration-300"
              aria-label="Next slide"
            >
              <ArrowNextIcon />
            </button>
          </div>
        </Swiper>

        <Image
          src="/images/testimonials/testimonials-image.png"
          alt="Person in a white floral blouse holding daisies against a clear sky"
          width={313}
          height={352}
          className="mx-auto w-[68.4%] max-w-[350px] lg:w-[26.08%] lg:absolute lg:left-[10.66%] lg:bottom-0"
        />
      </Wrapper>
    </Section>
  );
}
