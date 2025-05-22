'use client';

import Image from 'next/image';

import useMedia from '@/hooks/useMedia';

import Button from '@/components/common/Button';
import Section from '@/components/common/Section';
import Wrapper from '@/components/common/Wrapper';
import { GET_STARTED_URL } from '@/constants';

export default function Hero() {
  const isMobile = useMedia('lg');

  return (
    <Section className="flex flex-col lg:justify-center gap-[32px] md:gap-[40px] lg:min-h-[calc(100vh-100px)] !pt-[0px] lg:!pt-[100px] lg:bg-[#3A0469] overflow-hidden">
      <picture className="w-full lg:h-full lg:absolute lg:inset-0 z-0">
        {/* TODO: check breakpoints */}
        <source media="(min-width: 1024px)" srcSet="/images/hero/hero-image-desktop.jpg" />
        <Image
          src="/images/hero/hero-image-mobile.jpg"
          alt="Hero image"
          width={isMobile ? 390 : 1440}
          height={isMobile ? 240 : 454}
          className="w-full lg:h-full lg:object-cover"
          quality={100}
          priority
        />
      </picture>
      <Wrapper className="relative">
        <div className="text-center lg:text-left lg:max-w-[500px]">
          <h1 className="lg:!text-white">
            Level Up Your
            <br />
            Gender Transition
          </h1>
          <p className="mb-[24px] text-[20px] leading-[30px] lg:text-white">
            Join thousands of trans folks getting gender-affirming care created by trans people, for
            trans people.
          </p>
          <Button variant="primary" href={GET_STARTED_URL} className="mb-[24px] mx-auto lg:mx-0">
            Get started
          </Button>
          <strong className="lg:text-[20px] lg:leading-[30px] lg:text-white">
            $32 per month plus copay with insurance, or $99 per month if self-paid
          </strong>
        </div>
      </Wrapper>
    </Section>
  );
}
