import type { Metadata } from 'next';
import Section from '@/components/common/Section';
import Wrapper from '@/components/common/Wrapper';

export const metadata: Metadata = {
  title: 'Plume Health - Terms & Conditions',
  description:
    'Terms & Conditions for the Plume Pride Discount. Learn about the offer, eligibility, and how to redeem it.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicy() {
  return (
    <Section type="secondary" className="flex-1">
      <Wrapper className="text-block">
        <h1>Plume Pride Discount Terms & Conditions</h1>
        <p>
          This offer is available exclusively to first-time members and is valid until June 30,
          2025, at 11:59 PM local time.{' '}
        </p>
        <p>
          The discount provides 15% off the standard membership price for a period of nine months
          from the date of enrollment.
        </p>
        <p>This discount:</p>
        <ul>
          <li>Is limited to one use per eligible customer.</li>
          <li>
            Applies only to new memberships and cannot be applied to existing or renewing
            memberships.
          </li>
          <li>Cannot be combined with any other offers, discounts, or promotions.</li>
          <li>Is non-transferable and has no cash value.</li>
        </ul>
        <p>
          Eligibility for this offer is subject to verification. Any abuse of this promotion, as
          determined by Plume Clinic in its sole discretion, may result in cancellation of the
          discount and/or membership.
        </p>
        <p>
          Plume Clinic reserves the right to modify, suspend, or cancel this offer at any time
          without prior notice. This offer is void where prohibited by law.
        </p>
        <p>
          By redeeming this offer, customers acknowledge and agree to be bound by these terms and
          conditions.
        </p>
      </Wrapper>
    </Section>
  );
}
