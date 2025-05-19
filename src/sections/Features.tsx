'use client';

import Image from 'next/image';
import { useState } from 'react';

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

  const LOGOS_PER_VIEW_DESKTOP = 4;
  const ITEM_WIDTH = 192;
  const GAP = 16;
  const SHIFT = ITEM_WIDTH + GAP;
  const WRAPPER_WIDTH = SHIFT * LOGOS_PER_VIEW_DESKTOP;
  const maxDesktopIndex = logos.length - LOGOS_PER_VIEW_DESKTOP;

  const [index, setIndex] = useState(0);

  const nextDesktop = () => setIndex((i) => Math.min(i + 1, maxDesktopIndex));
  const prevDesktop = () => setIndex((i) => Math.max(i - 1, 0));

  const nextMobile = () => setIndex((i) => (i + 1) % logos.length);
  const prevMobile = () => setIndex((i) => (i - 1 + logos.length) % logos.length);

  const desktopTranslate = Math.min(index, maxDesktopIndex) * SHIFT;

  return (
    <section className="bg-white py-24 my-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
        <h2 className="text-[#3A0469] font-cooper text-center text-[40px] lg:text-[48px] font-light leading-[48px] lg:leading-[60px] mb-12">
          Featured&nbsp;in&hellip;
        </h2>

        <div className="hidden lg:flex items-center justify-center">
          <button
            onClick={prevDesktop}
            disabled={index === 0}
            className="w-8 h-8 mr-6 disabled:opacity-40"
            aria-label="Previous logos"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M21.602 8.998a1.5 1.5 0 0 1 0 2.121L16.004 17l5.598 5.598a1.5 1.5 0 0 1-2.122 2.122l-6.8-6.8a1.5 1.5 0 0 1 0-2.122l6.8-6.8a1.5 1.5 0 0 1 2.122 0Z" fill="#6816AF" />
            </svg>
          </button>

          <div className="overflow-hidden" style={{ width: WRAPPER_WIDTH }}>
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${desktopTranslate}px)` }}
            >
              {logos.map((l) => (
                <div key={l.alt} className="flex-shrink-0 flex justify-center items-center w-[192px]">
                  <Image src={l.src} alt={l.alt} width={160} height={80} className="object-contain h-[80px] w-auto" />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextDesktop}
            disabled={index === maxDesktopIndex}
            className="w-8 h-8 ml-6 disabled:opacity-40"
            aria-label="Next logos"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.398 25.002a1.5 1.5 0 0 1 0-2.122L17.996 17l-5.598-5.598a1.5 1.5 0 1 1 2.122-2.121l6.8 6.8a1.5 1.5 0 0 1 0 2.121l-6.8 6.8a1.5 1.5 0 0 1-2.122 0Z" fill="#6816AF" />
            </svg>
          </button>
        </div>

        <div className="lg:hidden flex items-center justify-center">
          <button onClick={prevMobile} className="w-8 h-8 mr-4" aria-label="Previous logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M21.602 8.998a1.5 1.5 0 0 1 0 2.121L16.004 17l5.598 5.598a1.5 1.5 0 0 1-2.122 2.122l-6.8-6.8a1.5 1.5 0 0 1 0-2.122l6.8-6.8a1.5 1.5 0 0 1 2.122 0Z" fill="#6816AF" />
            </svg>
          </button>

          <div className="w-[192px] flex justify-center">
            <Image src={logos[index].src} alt={logos[index].alt} width={160} height={80} className="object-contain h-[80px] w-auto" />
          </div>

          <button onClick={nextMobile} className="w-8 h-8 ml-4" aria-label="Next logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.398 25.002a1.5 1.5 0 0 1 0-2.122L17.996 17l-5.598-5.598a1.5 1.5 0 1 1 2.122-2.121l6.8 6.8a1.5 1.5 0 0 1 0 2.121l-6.8 6.8a1.5 1.5 0 0 1-2.122 0Z" fill="#6816AF" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
