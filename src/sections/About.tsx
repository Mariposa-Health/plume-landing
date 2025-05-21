import Image from 'next/image';
import Button from '@/components/common/Button';
import Section from '@/components/common/Section';
import Wrapper from '@/components/common/Wrapper';

export default function AboutUs() {
  return (
    <Section type="primary" className="!pt-[0px] lg:!pt-[100px]">
      <Wrapper>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[72px]">
          <div className="w-[calc(100%+64px)] -mx-8 lg:w-[616px] lg:mx-0 aspect-[390/240] lg:aspect-[616/413] lg:rounded-[18px] overflow-hidden order-1 lg:order-2">
            <picture>
              <source media="(min-width: 1024px)" srcSet="/about-us-image-desktop.jpg" />
              <Image
                src="/about-us-image-mobile.jpg"
                alt="About Plume Health"
                width={290}
                height={240}
                className="w-full h-full object-cover"
              />
            </picture>
          </div>

          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-[#3A0469] font-cooper text-[60px] font-light leading-[72px] mb-6">
              About Us
            </h2>
            <h3 className="text-[#3A0469] font-fibra text-[20px] font-bold leading-[30px] mb-6">
              Our vision is to transform care for every trans life.
            </h3>
            <p className="text-[#1F292E] font-fibra text-base font-normal leading-6 mb-8">
              Plume Health is a virtual gender-affirming care clinic and a trusted source of
              community, wellness resources, and support for the trans and gender non-conforming
              community.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button
                variant="primary"
                href="https://getplume.co/get-started"
                className="w-[312px] lg:w-[378px] h-[48px] px-5 py-[10px]"
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
      </Wrapper>
    </Section>
  );
}
