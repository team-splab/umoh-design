/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [require('tailwindcss-animate'), require('./src/lib/plugin')],
};

export default config;
