import defaultTheme from 'tailwindcss/defaultTheme';
import typo from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      red: '#F25C55',
      'gray-dark': '#28255b',
      gray: '#5C5C7D',
      'gray-light': '#9999AC',
      'gray-lighter': '#F0F1F5',
      white: '#FFFFFF',

      primary: {
        DEFAULT: '#F25C55',
        50: '#FFFFFF',
        100: '#FEEDED',
        200: '#FBC9C7',
        300: '#F8A5A1',
        400: '#F5807B',
        500: '#F25C55',
        600: '#EE2A21',
        700: '#C8170F',
        800: '#93110B',
        900: '#5F0B07',
        950: '#450805',
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        custom: '5px 6px 22px 5px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        brand: '1.25rem',
      },
    },
  },
  plugins: [typo],
};

// create a tailwing color shades called primary with #F25C55
