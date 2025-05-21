import Image from 'next/image';
import Section from '@/components/common/Section';
import Wrapper from '@/components/common/Wrapper';
import NewsletterForm from '@/components/NewsletterForm';

export default function Newsletter() {
  return (
    <Section className="bg-[#FFF8F0] py-16 relative">
      <div className="absolute top-0 left-0 w-[270px] h-[79px] lg:w-[435px] lg:h-[127px] overflow-hidden">
        <Image
          src="/newsletter-decoration.png"
          alt="Decorative element"
          width={435}
          height={127}
          className="w-full h-full object-contain"
          priority
        />
      </div>
      <Wrapper>
        <div className="flex flex-col items-center gap-6 max-w-[664px] w-full mx-auto">
          <h2 className="text-[#1F292E] text-center font-cooper text-[24px] leading-[36px] lg:text-[48px] lg:leading-[60px] font-light">
            Stay In The Loop
          </h2>
          <p className="text-[#1F292E] text-center font-fibra text-base font-normal leading-6">
            Get the latest on gender-affirming care, legal changes, books, culture, community stories, and more delivered right to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </Wrapper>
    </Section>
  );
}
