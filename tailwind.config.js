import defaultTheme from "tailwindcss/defaultTheme";
import typo from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: "#F25C55",
      "gray-darker": "#75759E",
      "gray-dark": "#28255b",
      gray: "#5C5C7D",
      "gray-light": "#9999AC",
      "gray-lighter": "#F0F1F5",
      white: "#FFFFFF",

      primary: {
        DEFAULT: "#F25C55",
        50: "#FFFFFF",
        100: "#FEEDED",
        200: "#FBC9C7",
        300: "#F8A5A1",
        400: "#F5807B",
        500: "#F25C55",
        600: "#EE2A21",
        700: "#C8170F",
        800: "#93110B",
        900: "#5F0B07",
        950: "#450805",
      },

      secondary: {
        DEFAULT: "#28255b",
        50: "#FFFFFF",
        100: "#F0F1F5", //'gray-lighter'
        200: "#D9DBE6",
        300: "#C2C5D8",
        400: "#ACB0CA",
        500: "#9599BC",
        600: "#7E83AE",
        700: "#666A9F",
        800: "#28255b",
      },

      third: {
        DEFAULT: "#5C5C7D",
        50: "#FFFFFF",
        100: "#F0F1F5",
        200: "#D9DBE6",
        300: "#C2C5D8",
        400: "#ACB0CA",
        500: "#5C5C7D",
        600: "#7E83AE",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        custom: "5px 6px 22px 5px rgba(0, 0, 0, 0.12)",
      },
      borderRadius: {
        brand: "1.25rem",
      },
    },
  },
  plugins: [typo],
};

// create a tailwing color shades called primary with #F25C55
