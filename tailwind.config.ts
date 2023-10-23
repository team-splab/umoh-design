/** @type {import('tailwindcss').Config} */

import pluginConfig from './src/lib/plugin';

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [require('tailwindcss-animate'), pluginConfig],
};

export default config;
