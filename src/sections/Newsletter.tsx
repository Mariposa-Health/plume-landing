import Image from 'next/image';
import Button from '@/components/common/Button';
import Section from '@/components/common/Section';
import Wrapper from '@/components/common/Wrapper';

export default function Newsletter() {
  return (
    <Section type="secondary">
      <div className="absolute top-0 left-0 w-[270px] h-[79px] lg:w-[435px] lg:h-[127px] flex justify-center items-center">
        <Image
          src="/newsletter-decoration.png"
          alt="Decorative element"
          width={435}
          height={127}
          className="w-full h-full object-contain"
        />
      </div>

      {/* <div className="flex justify-center items-center px-4"> */}
      <Wrapper>
        <div className="flex flex-col items-center gap-6 max-w-[664px] w-full m-auto">
          <h2 className="text-[#1F292E] text-center font-cooper text-[24px] leading-[36px] lg:text-[48px] lg:leading-[60px] font-light">
            Stay In The Loop
          </h2>

          <p className="text-[#1F292E] text-center font-fibra text-base font-normal leading-6 max-w-full">
            Get the latest on gender-affirming care, legal changes, books, culture, 
            community stories, and more delivered right to your inbox.
          </p>

          <Button
            variant="hero"
            href="#newsletter-signup"
            className="w-auto px-8 h-[48px]"
          >
            Subscribe to the Newsletter
          </Button>
        </div>
      </Wrapper>
    </Section>
  );
}
