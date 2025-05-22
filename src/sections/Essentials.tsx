import Image from 'next/image';
import Button from '@/components/common/Button';
import Wrapper from '@/components/common/Wrapper';
import Section from '@/components/common/Section';
import { GET_STARTED_URL } from '@/constants';

const essentialsItems = [
  {
    icon: '/icons/essentials/doctor.svg',
    alt: 'Gender-affirming care icon',
    text: 'Gender-affirming care from experts in transgender health',
  },
  {
    icon: '/icons/essentials/calendar.svg',
    alt: 'Appointments icon',
    text: 'Appointments available in days, not months',
  },
  {
    icon: '/icons/essentials/phone.svg',
    alt: 'Phone care icon',
    text: 'Affirming care right from your phone',
  },
  {
    icon: '/icons/essentials/community.svg',
    alt: 'Community icon',
    text: 'An online community with support groups, transition resources, and more',
  },
];

export default function Essentials() {
  return (
    <Section type="primary">
      <Wrapper className="flex flex-col items-start justify-between lg:flex-row gap-[40px]">
        <div className="lg:flex-1 lg:max-w-[520px] text-center lg:text-left">
          <h2>Essentials for your gender journey</h2>
          <p className="mb-[24px]">
            Whether you are just beginning your transition or are years into your journey,
            we&apos;re here to connect you with the care and support you deserve.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button variant="primary" href={GET_STARTED_URL}>
              Get started
            </Button>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:flex-1 lg:max-w-[596px] gap-[32px] lg:gap-[40px]">
          {essentialsItems.map((item, index) => (
            <div key={index} className="text-center lg:text-left">
              <Image
                src={item.icon}
                alt={item.alt}
                width={40}
                height={40}
                className="h-[40px] mb-[24px] mx-auto lg:mx-0 lg:object-contain lg:object-left"
              />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </Section>
  );
}
