/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/daisyui/dist/**/*.js',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
