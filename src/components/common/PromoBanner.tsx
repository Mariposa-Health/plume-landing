'use client';

import { useUtm } from '@/hooks/useUtm';
import { PROMO_CODES, PROMO_DISCOUNTS, PromoSource } from '@/constants';
import Link from 'next/link';

export default function PromoBanner() {
  const { utmSource, getPathWithUtm } = useUtm();

  if (!utmSource || !Object.values(PromoSource).includes(utmSource.toLowerCase() as PromoSource)) {
    return null;
  }

  const source = utmSource.toLowerCase() as PromoSource;
  const promoCode = PROMO_CODES[source];
  const discount = PROMO_DISCOUNTS[source];

  return (
    <div className="promo-banner flex flex-wrap gap-y-[8px] gap-x-[16px] justify-center items-center bg-[linear-gradient(90deg,#DF0017_0%,#B55D00_22.6%,#636639_38.46%,#146F71_53.85%,#005284_66.67%,#33359F_83.33%,#6D04B8_100%)] text-white py-[8px] px-[32px] text-center text-sm">
      <p className="lg:text-[20px] lg:leading-[28px]">
        {utmSource === PromoSource.Meta ? (
          <>
            Pride Social Exclusive! Get {discount}% off 9 months 🏳️‍⚧️{' '}
            <strong>Use code {promoCode}</strong>
          </>
        ) : utmSource === PromoSource.Reddit ? (
          <>
            Hey Reddit! Celebrate Pride with {discount}% off 9 months 🏳️‍⚧️{' '}
            <strong>Use code {promoCode}</strong>
          </>
        ) : (
          <>
            Hey TikTok! Celebrate Pride with {discount}% off 9 months 🏳️‍⚧️{' '}
            <strong>Use code {promoCode}</strong>
          </>
        )}
      </p>
      <Link
        href={getPathWithUtm('/terms-and-conditions')}
        className="underline decoration-transparent hover:decoration-current transition-colors duration-300"
      >
        Terms & Conditions
      </Link>
    </div>
  );
}
