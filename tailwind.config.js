import daisy from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      red: '#f25c55',
      'gray-dark': '#28255b',
      gray: '#5c5c7d',
      'gray-light': '#9999ac',
      'gray-lighter': '#f0f1f5',
      white: '#ffffff',
    },
    extend: {},
  },
  plugins: [daisy],
};
