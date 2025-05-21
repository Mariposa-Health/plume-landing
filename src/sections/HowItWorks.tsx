'use client';

import Image from 'next/image';
import Button from '@/components/common/Button';
import Section from '@/components/common/Section';
import Wrapper from '@/components/common/Wrapper';
import useMedia from '@/functions/useMedia';

export default function HowItWorks() {
  const isMobile = useMedia('lg');

  const steps = [
    { number: 1, title: 'Choose Your\nMembership' },
    { number: 2, title: 'Scheduling and\nintake' },
    { number: 3, title: 'Join the Plume\nCommunity Hub' },
    { number: 4, title: 'Meet with your\nprovider' },
    { number: 5, title: 'Begin your\ntreatment' },
  ];

  return (
    <Section className="!pt-0 lg:pb-0 bg-[#FFF8F0] lg:bg-[#FFF]">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/images/how-it-works/how-it-works-image-desktop.jpg"
        />
        <Image
          src="/images/how-it-works/how-it-works-image-mobile.jpg"
          alt="Person in with long hair interacting with their smartphone"
          width={isMobile ? 390 : 1440}
          height={isMobile ? 201 : 442}
          className="w-full"
          quality={100}
        />
      </picture>

      <Wrapper className="relative lg:mt-[-124px]">
        <div className="flex flex-col gap-[24px] md:gap-[40px] lg:gap-[64px] w-full lg:bg-[#FFF8F0] lg:rounded-[18px] lg:p-[64px]">
          <h2 className="text-center !mb-0">How Plume Health works</h2>

          <ul
            className="
            relative flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-between gap-[24px] md:gap-[32px] lg:gap-0 w-full m-auto sm:max-w-[600px] lg:max-w-[100%]
            before:content-[''] before:absolute before:top-[28px] before:left-[50%] before:translate-x-[-50%] before:w-[calc(100%-150px)] before:h-[2px] before:bg-[#25827C] before:hidden lg:before:block"
          >
            {steps.map((step) => (
              <li key={step.number} className="relative max-w-[156px]">
                <div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:w-[56px] lg:h-[56px] rounded-full bg-[#25827C] flex items-center justify-center mx-auto mb-[20px]">
                  <span className="block text-white text-[20px] font-bold">{step.number}</span>
                </div>

                <p className="text-center">{step.title}</p>
              </li>
            ))}
          </ul>

          <Button variant="primary" href="https://getplume.co/get-started" className="mx-auto">
            Start your journey
          </Button>
        </div>
      </Wrapper>
    </Section>
  );
}
