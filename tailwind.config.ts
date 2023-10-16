import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          light: '#f2f2e6',
          dark: '#171712',
        },
        enchantedMeadow: {
          50: '#ebf3e5',
          100: '#e9f4e3',
          200: '#e2f3dd',
          300: '#d8efd5',
          400: '#c9e5c8',
          500: '#b5d4b5',
          600: '#9cba9c',
          700: '#7f987d',
          800: '#5f705b',
          900: '#3b4436',
        },
        lifeboatBlue: {
          50: '#e9dbef',
          100: '#dbd0eb',
          200: '#bbc2e3',
          300: '#a7c5d8',
          400: '#94c5ca',
          500: '#81b7b7',
          600: '#6e999e',
          700: '#5b7281',
          800: '#454a5f',
          900: '#332d3c',
        },
        inkBlack: {
          50: '#d9c9cb',
          100: '#c0aeb3',
          200: '#907c88',
          300: '#645361',
          400: '#3f333f',
          500: '#241c24',
          600: '#130f13',
          700: '#0c090c',
          800: '#0c090b',
          900: '#100d0e',
        },
        berkeleyHills: {
          50: '#e7dfcc',
          100: '#dbceb4',
          200: '#c3ad8a',
          300: '#ac8e69',
          400: '#967450',
          500: '#7f6040',
          600: '#6a5035',
          700: '#55432e',
          800: '#403627',
          900: '#2b271e',
        },
      },
    },
  },
  plugins: [],
};
export default config;
