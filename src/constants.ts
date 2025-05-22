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
