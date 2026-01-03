/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefaf5',
          100: '#fdf5eb',
          200: '#fae6cd',
          300: '#f6d8af',
          400: '#f0ba73',
          500: '#e99d37',
          600: '#d88d31',
          700: '#b47529',
          800: '#905e21',
          900: '#764d1b',
        },
        brown: {
          50: '#f8f6f4',
          100: '#f0ede9',
          200: '#dad2c8',
          300: '#c4b7a7',
          400: '#988165',
          500: '#6c4b23',
          600: '#614320',
          700: '#51381b',
          800: '#412d16',
          900: '#352512',
        },
        cream: '#fef9f3',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
