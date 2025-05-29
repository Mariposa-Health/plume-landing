'use client';

import { GET_STARTED_URL } from '@/constants';

import { useUtm } from '@/hooks/useUtm';

import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import Wrapper from './Wrapper';
import PromoBanner from './PromoBanner';

export default function Header() {
  const { getPathWithUtm } = useUtm();

  return (
    <div className="sticky top-0 w-full z-100">
      <header className="py-[20px] lg:py-[24px] bg-[#3A0469]">
        <Wrapper className="flex items-center justify-between gap-[16px]">
          <Link href={getPathWithUtm('/')}>
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
      <PromoBanner />
    </div>
  );
}
