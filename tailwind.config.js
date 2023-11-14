const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{react,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      white: "#FFFFFF",
      black: "#383431",
      green: "#79C39E",
    },
    //TYPOGRAPHY
    fontFamily: {
      main: ["Figtree", "sans-serif"],
    },
    fontSize: {
      h1: "76px",
      h2: "48px",
      caption: "20px",
      body: "18px"
    },
    lineHeight: {
      1: ".75rem",
      2: "1rem",
      3: "1.25rem",
      4: "1.5rem",
      5: "1.75rem",
      6: "2rem",
      7: "2.25rem",
      8: "2.5rem",
      9: "2.75rem",
      10: "3rem",
      11: "3.25rem",
      12: "3.5rem",
      13: "3.75rem",
      14: "4rem",
      15: "4.25rem",
      16: "4.5rem",
      17: "4.75rem",
      18: "5rem",
      19: "5.25rem",
      20: "5.5rem",
      21: "5.75rem",
      22: "6rem",
      23: "6.25rem",
      24: "6.5rem",
      25: "6.75rem",
    },
    extend: {},
  },
  plugins: [],
});
