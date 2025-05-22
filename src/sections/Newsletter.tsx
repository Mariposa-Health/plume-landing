import Image from 'next/image';
import Section from '@/components/common/Section';
import Wrapper from '@/components/common/Wrapper';
import NewsletterForm from '@/components/NewsletterForm';

export default function Newsletter() {
  return (
    <Section type="secondary" className="relative !pt-[100px]">
      <Image
        src="/images/newsletter/newsletter-decoration.png"
        alt="Decorative element"
        width={435}
        height={127}
        quality={100}
        className="absolute top-0 left-0 w-[75%] sm:w-[50%] lg:w-[30.2%] max-w-[300px] lg:max-w-[435px]"
      />
      <Wrapper>
        <div className="max-w-[574px] mx-auto">
          <h2 className="text-[#1F292E] text-center">Stay In The Loop</h2>
          <p className="text-center mb-[24px]">
            Get the latest on gender-affirming care, legal changes, books, culture, community
            stories, and more delivered right to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </Wrapper>
    </Section>
  );
}
