'use client';

import Image from 'next/image';
import Button from '@/components/common/Button';
import Section from '@/components/common/Section';
import Wrapper from '@/components/common/Wrapper';
import useMedia from '@/hooks/useMedia';

export default function AboutUs() {
  const isMobile = useMedia('lg');

  return (
    <Section type="primary" className="!pt-[0px] lg:!pt-[100px]">
      <Wrapper>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[32px] md:gap-[40px]">
          <div className="w-[calc(100%+64px)] -mx-8 lg:w-[51.3%] lg:mx-0 lg:rounded-[18px] overflow-hidden order-1 lg:order-2">
            <picture>
              {/* TODO: check breakpoints */}
              <source
                media="(min-width: 1024px)"
                srcSet="/images/about-us/about-us-image-desktop.jpg"
              />
              <Image
                src="/images/about-us/about-us-image-mobile.jpg"
                alt="Two people sitting side by side smiling while sitting on a yellow couch"
                width={isMobile ? 390 : 616}
                height={isMobile ? 240 : 413}
                className="w-full"
                quality={100}
              />
            </picture>
          </div>

          <div className="flex-1 text-center lg:text-left lg:max-w-[520px] order-2 lg:order-1">
            <h2>About Us</h2>
            <h3 className="mb-[24px]">Our vision is to transform care for every trans life.</h3>
            <p className="mb-[24px]">
              Plume Health is a virtual gender-affirming care clinic and a trusted source of
              community, wellness resources, and support for the trans and gender non-conforming
              community.
            </p>
            <Button
              variant="primary"
              href="https://getplume.co/get-started"
              className="m-auto lg:m-0"
            >
              Get started
            </Button>
          </div>
        </div>
      </Wrapper>
    </Section>
  );
}
