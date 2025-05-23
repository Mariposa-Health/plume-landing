import type { Metadata } from 'next';
import Section from '@/components/common/Section';
import Wrapper from '@/components/common/Wrapper';

export const metadata: Metadata = {
  title: 'Plume Health - Privacy Policy',
  description:
    'Learn how we protect your personal information and ensure your data security while providing gender-affirming healthcare and services.',
  robots: {
    index: false,
    follow: false,
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
