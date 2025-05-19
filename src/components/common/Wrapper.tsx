import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export default function Wrapper({ children, className = '' }: WrapperProps) {
  return (
    <div className={twMerge('w-full max-w-[1280px] px-[32px] lg:px-[40px] mx-auto', className)}>
      {children}
    </div>
  );
}
