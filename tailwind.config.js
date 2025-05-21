// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        sm: "560px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1920px",
      },
    },
  },
};
