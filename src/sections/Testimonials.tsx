'use client';

import { useState } from 'react';
import Image from 'next/image';
import Section from '@/components/common/Section';
import Wrapper from '@/components/common/Wrapper';

const testimonials = [
  {
    text: "Plume helped me with every step of my gender journey and has helped me achieve happiness with myself that I never thought was possible.",
    member: "Plume Member for 2 years"
  },
  {
    text: "There was no gatekeeping or barriers to accessing the care I needed. Two years later, I couldn't be happier with the progress I've already made.",
    member: "Plume Member for 2 years"
  },
  {
    text: "The care team at Plume truly understands the trans experience and provides compassionate, comprehensive care that has transformed my life.",
    member: "Plume Member for 3 years"
  },
  {
    text: "From day one, Plume's team made me feel seen, heard, and supported throughout my entire gender-affirming care journey.",
    member: "Plume Member for 1 year"
  }
];

const StarRating = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="199" height="27" viewBox="0 0 199 27" fill="none">
    <path d="M13.491 19.4288L20.4391 23.625L18.5953 15.7163L24.7339 10.395L16.6503 9.6975L13.491 2.25L10.3317 9.6975L2.24805 10.395L8.37545 15.7163L6.54285 23.625L13.491 19.4288Z" fill="#6816AF"/>
    <path d="M45.5359 19.4288L52.484 23.625L50.6402 15.7163L56.7788 10.395L48.6952 9.6975L45.5359 2.25L42.3766 9.6975L34.293 10.395L40.4204 15.7163L38.5878 23.625L45.5359 19.4288Z" fill="#6816AF"/>
    <path d="M77.575 19.4288L84.5231 23.625L82.6793 15.7163L88.8179 10.395L80.7342 9.6975L77.575 2.25L74.4157 9.6975L66.332 10.395L72.4594 15.7163L70.6268 23.625L77.575 19.4288Z" fill="#6816AF"/>
    <path d="M109.618 19.4288L116.566 23.625L114.722 15.7163L120.861 10.395L112.777 9.6975L109.618 2.25L106.459 9.6975L98.3752 10.395L104.503 15.7163L102.67 23.625L109.618 19.4288Z" fill="#6816AF"/>
    <path d="M141.661 19.4288L148.609 23.625L146.765 15.7163L152.904 10.395L144.82 9.6975L141.661 2.25L138.502 9.6975L130.418 10.395L136.545 15.7163L134.713 23.625L141.661 19.4288Z" fill="#6816AF"/>
  </svg>
);

const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M21.602 8.99792C22.2659 9.66181 22.2659 10.7382 21.602 11.4021L16.0041 17L21.602 22.5979C22.2659 23.2618 22.2659 24.3382 21.602 25.0021C20.9381 25.666 19.8617 25.666 19.1978 25.0021L12.3978 18.2021C11.7339 17.5382 11.7339 16.4618 12.3978 15.7979L19.1978 8.99792C19.8617 8.33403 20.9381 8.33403 21.602 8.99792Z" fill="#6816AF"/>
  </svg>
);

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M12.398 25.0021C11.7341 24.3382 11.7341 23.2618 12.398 22.5979L17.9959 17L12.398 11.4021C11.7341 10.7382 11.7341 9.66181 12.398 8.99792C13.0619 8.33403 14.1383 8.33403 14.8022 8.99792L21.6022 15.7979C22.2661 16.4618 22.2661 17.5382 21.6022 18.2021L14.8022 25.0021C14.1383 25.666 13.0619 25.666 12.398 25.0021Z" fill="#6816AF"/>
  </svg>
);

interface Testimonial {
  text: string;
  member: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="w-[325px] h-[349px] bg-white rounded-[18px] p-6 flex flex-col justify-between shadow-lg">
    <div>
      <div className="mb-6">
        <StarRating />
      </div>

      <p className="text-[#1F292E] font-fibra text-[18px] font-normal leading-6 mb-6">
        {testimonial.text}
      </p>
    </div>

    <p className="text-[#1F292E] font-fibra text-[18px] font-semibold leading-[26px]">
      {testimonial.member}
    </p>
  </div>
);

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getNextSlideIndex = () => (currentSlide + 1) % testimonials.length;

  return (
    <Section className='!pb-[0px]' style={{
      background: `url('/images/testimonials/testimonials-bg.jpg') lightgray 50% / cover no-repeat`
    }}>
      <Wrapper>
        <div className="hidden lg:block">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="flex items-start gap-[77px]">
              <div className="w-[400px] flex-shrink-0">
                <h2 className="text-[#1F292E] font-cooper text-[48px] font-light leading-[60px] mb-8">
                  For your gender journey and more — we&apos;ve got you.
                </h2>

                <div className="w-[332px] h-[400px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/testimonials/testimonial-person.png"
                    alt="Plume member"
                    width={332}
                    height={521}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex gap-6 mb-6">
                  <TestimonialCard
                    key={`current-${currentSlide}`}
                    testimonial={testimonials[currentSlide]}
                  />
                  <TestimonialCard
                    key={`next-${getNextSlideIndex()}`}
                    testimonial={testimonials[getNextSlideIndex()]}
                  />
                </div>

                <div className="flex items-center gap-4">
                  <button onClick={prevSlide} className="cursor-pointer hover:scale-110 transition-transform">
                    <ArrowLeft />
                  </button>
                  <button onClick={nextSlide} className="cursor-pointer hover:scale-110 transition-transform">
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="flex flex-col items-center">
            <h2 className="text-[#3A0469] text-center font-cooper text-[48px] font-light leading-[60px] mb-8">
              For your gender journey and more — we&apos;ve got you.
            </h2>

            <div className="w-[330px] h-[349px] bg-white rounded-[18px] p-6 flex flex-col justify-between shadow-lg mb-8">
              <div>
                <div className="mb-6">
                  <StarRating />
                </div>

                <p className="text-[#1F292E] font-fibra text-[18px] font-normal leading-6 mb-6">
                  {testimonials[currentSlide].text}
                </p>
              </div>

              <p className="text-[#1F292E] font-fibra text-[18px] font-semibold leading-[26px]">
                {testimonials[currentSlide].member}
              </p>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <button onClick={prevSlide} className="cursor-pointer hover:scale-110 transition-transform">
                <ArrowLeft />
              </button>
              <button onClick={nextSlide} className="cursor-pointer hover:scale-110 transition-transform">
                <ArrowRight />
              </button>
            </div>

            <div className="w-full max-w-[332px] h-[400px] overflow-hidden rounded-lg mx-auto">
              <Image
                src="/images/testimonials/testimonial-person.png"
                alt="Plume member"
                width={332}
                height={521}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </Section>
  );
}
