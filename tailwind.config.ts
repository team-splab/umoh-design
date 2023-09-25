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
        primary: {
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
        secondary: {
          white: '#ffffff',
          red: '#EB5757',
          green: '#0DD354',
          blue: '#3970FF',
          yellow: '#FFDF39',
        },
        neutral: {
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
      },
      textColor: {
        main: '#131416',
        subtle: '#303336',
        subtlest: '#60666D',
        inverse: '#ffffff',
        brand: '#6056DB',
      },
      icon: {
        error: '#EB5757',
        success: '#0DD354',
        info: '#3970FF',
        warning: '#FFDF39',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        'title-lg': {
          fontFamily: 'Pretendard',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '120%',
          letterSpacing: '-0.24px',
        },
        'title-md': {
          fontFamily: 'Pretendard',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '120%',
        },
        'title-sm': {
          fontFamily: 'Pretendard',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '120%',
        },
        subtitle: {
          fontFamily: 'Pretendard',
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: '800',
          lineHeight: '120%',
          letterSpacing: '0.12px',
          textTransform: 'uppercase',
        },
        'body-lg': {
          fontFamily: 'Pretendard',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '150%',
        },
        'body-md': {
          fontFamily: 'Pretendard',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '150%',
        },
        'body-sm': {
          fontFamily: 'Pretendard',
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '150%',
        },
        'label-lg': {
          fontFamily: 'Pretendard',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '120%',
        },
        'label-md': {
          fontFamily: 'Pretendard',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '120%',
        },
        'label-sm': {
          fontFamily: 'Pretendard',
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '120%',
        },
      });
    }),
    require('tailwindcss-animate'),
  ],
};
