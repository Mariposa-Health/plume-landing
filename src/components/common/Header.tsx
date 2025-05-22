'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from './Button';
import Wrapper from './Wrapper';
import { GET_STARTED_URL } from '@/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 w-full py-[20px] lg:py-[24px] bg-white z-100 transition-all duration-200 ${
        isScrolled ? 'border-b border-[#6816AF]/25' : ''
      }`}
    >
      <Wrapper className="flex items-center justify-between gap-[16px]">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Plume logo"
            width={153}
            height={52}
            className="h-[40px] lg:h-[52px] w-auto"
          />
        </Link>
        <Button className="whitespace-nowrap" variant="secondary" href={GET_STARTED_URL}>
          Get Started
        </Button>
      </Wrapper>
    </header>
  );
}
