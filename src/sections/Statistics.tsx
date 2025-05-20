import Section from '@/components/common/Section';
import Wrapper from '@/components/common/Wrapper';
import Image from 'next/image';

interface StatCardProps {
  image: string;
  number: string;
  textAbove?: string;
  textBelow?: string;
  background: string;
  alt: string;
  textPosition: 'left' | 'right';
}

const statisticsData: StatCardProps[] = [
  {
    image: '/images/statistics/stat-1.png',
    number: '40,000',
    textAbove: 'Served over',
    textBelow: 'trans folks',
    background: 'linear-gradient(135deg, #A78BFA 0%, #6B46C1 100%)',
    alt: 'Person representing served community',
    textPosition: 'right',
  },
  {
    image: '/images/statistics/stat-2.png',
    number: '47',
    textAbove: 'Active in',
    textBelow: 'states',
    background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
    alt: 'Person representing state coverage',
    textPosition: 'left',
  },
  {
    image: '/images/statistics/stat-3.png',
    number: '2019',
    textBelow: 'Founded in',
    background: 'linear-gradient(135deg, #F59E95 0%, #B91C1C 100%)',
    alt: 'Person representing founding year',
    textPosition: 'right',
  },
];

const StatCard = ({
  image,
  number,
  textAbove,
  textBelow,
  background,
  alt,
  textPosition,
}: StatCardProps) => (
  <div
    className="w-full lg:max-w-[384px] aspect-[384/240] rounded-[20px] relative overflow-hidden flex items-start"
    style={{ background }}
  >
    <Image
      src={image}
      alt={alt}
      fill
      className="absolute inset-0 object-cover"
      priority
    />

    <div
      className={`relative z-10 flex flex-col flex-1 px-6 pt-6
        space-y-2 lg:space-y-[2px]
        ${textPosition === 'left' ? 'text-left' : 'text-right'}`}
    >
      {textAbove && (
        <p className="text-white font-fibra text-[16px] md:text-[18px] leading-[24px] md:leading-[27px]">
          {textAbove}
        </p>
      )}

      <p className="text-white font-cooper text-[48px] md:text-[64px] leading-[56px] md:leading-[72px] tracking-[-1.92px] md:tracking-[-2.56px] uppercase">
        {number}
      </p>

      {textBelow && (
        <p className="text-white font-fibra text-[16px] md:text-[18px] leading-[24px] md:leading-[27px]">
          {textBelow}
        </p>
      )}
    </div>
  </div>
);

export default function Statistics() {
  return (
    <Section>
      <Wrapper>
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-6">
          {statisticsData.map((stat) => (
            <StatCard key={stat.number} {...stat} />
          ))}
        </div>
      </Wrapper>
    </Section>
  );
}
