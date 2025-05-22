import { BREAKPOINTS } from './src/constants';

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // TODO: check how to overwrite this (currently tailwind uses it's default values)
      screens: BREAKPOINTS,
    },
  },
};

export default config;
