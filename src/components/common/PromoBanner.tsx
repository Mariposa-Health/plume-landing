'use client';

import { useUtm } from '@/hooks/useUtm';
import { PROMO_CODES, PROMO_DISCOUNTS, PromoSource } from '@/constants';

export default function PromoBanner() {
  const { utmSource } = useUtm();

  if (!utmSource || !Object.values(PromoSource).includes(utmSource.toLowerCase() as PromoSource)) {
    return null;
  }

  const source = utmSource.toLowerCase() as PromoSource;
  const promoCode = PROMO_CODES[source];
  const platform = utmSource.charAt(0).toUpperCase() + utmSource.slice(1);
  const discount = PROMO_DISCOUNTS[source];

  return (
    <div className="promo-banner bg-[#6816AF] text-white py-[8px] px-[32px] text-center text-sm">
      <p>
        Special offer for {platform} users! Use code <strong>{promoCode}</strong> to get {discount}%
        off your first order
      </p>
    </div>
  );
}
