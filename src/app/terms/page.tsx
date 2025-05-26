import type { Metadata } from 'next';
import Section from '@/components/common/Section';
import Wrapper from '@/components/common/Wrapper';
import TermsContent from './TermsContent';

export const metadata: Metadata = {
  title: 'Plume Health - Terms of Use',
  description:
    "Review Plume's Terms of Use to understand the guidelines for using our services. Learn about our commitment to providing secure, inclusive gender-affirming care to trans and gender-diverse individuals.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsPage() {
  return (
    <Section type="secondary" className="flex-1">
      <Wrapper className="text-block">
        <TermsContent />
      </Wrapper>
    </Section>
  );
}
