/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#01192E',
        secondary: '#FFFFFF',
        blue2: '#0E3460',
        blue3: '#4DB5FF',
      },
    },
    plugins: [],
  },
};
