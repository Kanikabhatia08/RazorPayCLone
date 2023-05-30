/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    fontFamily: {
      mullish: ["Mulish", "sans-serif"],
    },
    backgroundImage:{
      bg1: `url(./images/instant-settlement-bg.svg)`,
      bg2: `url(./images/instant-settlement-bghover.svg)`,
      bg3: `url(./images/core-features-sectionBg.svg)`,
      bg4: `url(./images/CTABg.svg)`
    },
    colors: {
      deepBlue: "#02042a",
      lightBlue: "#2b84ea",
      lightBlue300: "#4b94ed",
      lightBlue500: "#0b72e7",
      greenLight: "#61cea6",
      grayText: "#818597",
      lightGray: "#e2e2e2",
      grayBlue: "#344a6c",
      deepBlueHead: "#162f56",
      gray2: "#525a76",
    },},
  },
  plugins: [],
};
