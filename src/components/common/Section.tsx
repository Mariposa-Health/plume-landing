import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionType = 'default' | 'primary' | 'secondary';

interface SectionProps {
  children: ReactNode;
  className?: string;
  type?: SectionType;
}

const getBackgroundColor = (type: SectionType) => {
  switch (type) {
    case 'primary':
      return 'bg-[#F0E8F7]';
    case 'secondary':
      return 'bg-[#FFF8F0]';
    default:
      return;
  }
};

export default function Section({ children, className, type = 'default' }: SectionProps) {
  const baseClasses = 'py-[64px] md:py-[80px] lg:py-[100px]';
  const bgColor = getBackgroundColor(type);

  return (
    <section className={twMerge(baseClasses, bgColor, className)}>
      {children}
    </section>
  );
}
