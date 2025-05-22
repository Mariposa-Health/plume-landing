'use client';

import { useUtm } from '@/hooks/useUtm';

export const PROMO_CODES = {
  twitter: 'TWITTER20',
  reddit: 'REDDIT15',
} as const;

export default function PromoBanner() {
  const { utmSource } = useUtm();

  if (!utmSource || !(utmSource.toLowerCase() in PROMO_CODES)) {
    return null;
  }

  const promoCode = PROMO_CODES[utmSource.toLowerCase() as keyof typeof PROMO_CODES];
  const platform = utmSource.charAt(0).toUpperCase() + utmSource.slice(1);

  return (
    <div className="bg-[#6816AF] text-white py-[8px] px-[32px] text-center text-sm">
      <p>
        Special offer for {platform} users! Use code <strong>{promoCode}</strong> to get{' '}
        {utmSource.toLowerCase() === 'twitter' ? '20%' : '15%'} off your first order
      </p>
    </div>
  );
}
