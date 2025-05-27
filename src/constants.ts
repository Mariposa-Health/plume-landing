export const GET_STARTED_URL = 'https://getplume.co/get-started';

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const SWIPER_BREAKPOINTS = Object.fromEntries(
  Object.entries(BREAKPOINTS).map(([key, value]) => [
    key,
    parseInt(value.replace('px', ''))
  ])
) as { [K in keyof typeof BREAKPOINTS]: number };
export enum PromoSource {
  Meta = 'meta',
  Reddit = 'reddit',
  TikTok = 'tiktok',
}

export const PROMO_CODES: Record<PromoSource, string> = {
  [PromoSource.Meta]: 'Plume2025',
  [PromoSource.Reddit]: 'Plume15',
  [PromoSource.TikTok]: 'PlumePride',
};

export const PROMO_DISCOUNTS: Record<PromoSource, number> = {
  [PromoSource.Meta]: 15,
  [PromoSource.Reddit]: 15,
  [PromoSource.TikTok]: 15,
};
