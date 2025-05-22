import type { Metadata } from 'next';
import Section from '@/components/common/Section';
import Wrapper from '@/components/common/Wrapper';

export const metadata: Metadata = {
  title: 'Privacy Policy - Plume Health',
  description:
    'Privacy Policy for Plume Health - Learn how we protect and handle your personal information.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <Section>
      <Wrapper className="text-block">
        <h1>Privacy Policy</h1>
        <p>Content will be added soon.</p>
      </Wrapper>
    </Section>
  );
}
