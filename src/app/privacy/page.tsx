import type { Metadata } from 'next';
import Section from '@/components/common/Section';
import Wrapper from '@/components/common/Wrapper';
import PrivacyContent from './PrivacyContent';

export const metadata: Metadata = {
  title: 'Plume Health - Privacy Policy',
  description:
    "Review Plume's Privacy Policy to understand how we collect, use, and protect your personal information. Learn about our commitment to maintaining your privacy and data security.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <Section type="secondary" className="flex-1">
      <Wrapper className="text-block">
        <PrivacyContent />
      </Wrapper>
    </Section>
  );
}
