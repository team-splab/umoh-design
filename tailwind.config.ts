/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral : {
          50: '#F9FAFC',
          100: '#F2F5F7',
          200: '#E5EAF0',
          300: '#D9E0E8',
          400: '#CCD5E1',
          500: '#BFCBD9',
          600: '#8F98A3',
          700: '#60666D',
          800: '#303336',
          900: '#131416',
        },
        purple : {
          50: '#F0EFFA',
          100: '#E0DEF5',
          200: '#C1BEEA',
          300: '#A39DE0',
          400: '#847DD5',
          500: '#6056DB',
          600: '#4C4598',
          700: '#332E66',
          800: '#191733',
          900: '#0A0914',
        },
        primary: '#6056DB',
      },
      textColor:{
        main:"#131416",
        subtle: '#303336',
        subtlest:'#60666D',
        inverse:'#ffffff',
      }
    },
  },
    plugins: [
      plugin(function ({ addUtilities }) {
        addUtilities({
          'title-lg':{
            // TODO: add font
          }      
        });
      }),
      require('tailwindcss-animate'),
    ],
}