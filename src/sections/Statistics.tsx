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
  position: 'left' | 'right';
}

const statisticsData: StatCardProps[] = [
  {
    image: '/images/statistics/stat-1.png',
    number: '40,000',
    textAbove: 'Served over',
    textBelow: 'trans folks',
    background: 'linear-gradient(135deg, #A78BFA 0%, #6B46C1 100%)',
    alt: 'Person representing served community',
    position: 'right',
  },
  {
    image: '/images/statistics/stat-2.png',
    number: '47',
    textAbove: 'Active in',
    textBelow: 'states',
    background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
    alt: 'Person representing state coverage',
    position: 'left',
  },
  {
    image: '/images/statistics/stat-3.png',
    number: '2019',
    textBelow: 'Founded in',
    background: 'linear-gradient(135deg, #F59E95 0%, #B91C1C 100%)',
    alt: 'Person representing founding year',
    position: 'right',
  },
];

const StatCard = ({
  image,
  number,
  textAbove,
  textBelow,
  background,
  alt,
  position,
}: StatCardProps) => (
  <div
    className="relative w-full flex p-[24px] aspect-[384/240] rounded-[20px] overflow-hidden md:last:translate-x-1/2 lg:last:translate-x-0"
    style={{ background }}
  >
    <Image
      quality={100}
      src={image}
      alt={alt}
      fill
      // TODO: check breakpoints
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="absolute inset-0 object-cover"
      priority
    />

    <div
      className={`
        relative w-fit-content z-2 text-center
        ${position === 'right' && 'ml-auto'}`}
    >
      {textAbove && <p className="text-white text-[18px] leading-[27px]">{textAbove}</p>}

      <p className="text-white font-cooper text-[50px] md:text-[64px] leading-[1] tracking-[-2px] md:tracking-[-2.56px] uppercase">
        {number}
      </p>

      {textBelow && <p className="text-white text-[18px] leading-[27px]">{textBelow}</p>}
    </div>
  </div>
);

export default function Statistics() {
  return (
    <Section>
      <Wrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {statisticsData.map((stat) => (
            <StatCard key={stat.number} {...stat} />
          ))}
        </div>
      </Wrapper>
    </Section>
  );
}
