import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionType = 'default' | 'primary' | 'secondary';

interface SectionProps {
  children: ReactNode;
  className?: string;
  type?: SectionType;
  style?: React.CSSProperties;
}

/* eslint-disable indent */
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
/* eslint-enable indent */

export default function Section({ children, className, type = 'default', style }: SectionProps) {
  const baseClasses = 'relative py-[64px] md:py-[80px] lg:py-[100px]';
  const bgColor = getBackgroundColor(type);

  return (
    <section className={twMerge(baseClasses, bgColor, className)} style={style}>
      {children}
    </section>
  );
}
