import plugin from 'tailwindcss/plugin';

const pluginConfig = plugin.withOptions(
  () => {
    return ({ addUtilities }) => {
      addUtilities({
        '.h-board-content': {
          height: ['calc(100vh - 7rem)', 'calc(100dvh - 7rem)'],
        },
        '.h-board-content-md': {
          height: ['calc(100vh - 12rem)', 'calc(100dvh - 12rem)'],
        },
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
    };
  },
  () => {
    return {
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
          keyframes: {
            'accordion-down': {
              from: { height: '0' },
              to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
              from: { height: 'var(--radix-accordion-content-height)' },
              to: { height: '0' },
            },
            wiggle: {
              '0%, 100%': { transform: 'rotate(-15deg)' },
              '50%': { transform: 'rotate(15deg)' },
            },
            heartBeat: {
              '0%': { transform: 'scale(1);' },
              '14%': { transform: 'scale(1.3);' },
              '28%': { transform: 'scale(1);' },
              '42%': { transform: 'scale(1.3);' },
              '70%': { transform: 'scale(1);' },
            },
            flipHorizontal: {
              '50%': { transform: 'rotateY(180deg)' },
            },
            flipVertical: {
              '50%': { transform: 'rotateX(180deg)' },
            },
            swing: {
              '20%': {
                transform: 'rotate3d(0, 0, 1, 15deg)',
              },

              '40%': {
                transform: 'rotate3d(0, 0, 1, -10deg)',
              },

              '60%': {
                transform: 'rotate3d(0, 0, 1, 5deg)',
              },

              '80%': {
                transform: 'rotate3d(0, 0, 1, -5deg)',
              },
              to: {
                transform: 'rotate3d(0, 0, 1, 0deg)',
              },
            },
            rubberBand: {
              from: {
                transform: 'scale3d(1, 1, 1)',
              },

              '30%': {
                transform: 'scale3d(1.25, 0.75, 1)',
              },

              '40%': {
                transform: 'scale3d(0.75, 1.25, 1)',
              },

              '50%': {
                transform: 'scale3d(1.15, 0.85, 1)',
              },

              '65%': {
                transform: 'scale3d(0.95, 1.05, 1)',
              },

              '75%': {
                transform: 'scale3d(1.05, 0.95, 1)',
              },
              to: {
                transform: 'scale3d(1, 1, 1)',
              },
            },
            flash: {
              '25%, 40%': { opacity: '0' },
              '50%': { opacity: '1' },
              '75%': { opacity: '0' },
            },
            headShake: {
              '0%': {
                transform: 'translateX(0)',
              },
              '6.5%': {
                transform: 'translateX(-6px) rotateY(-9deg)',
              },

              '18.5%': {
                transform: 'translateX(5px) rotateY(7deg)',
              },

              '31.5%': {
                transform: 'translateX(-3px) rotateY(-5deg)',
              },

              '43.5%': {
                transform: 'translateX(2px) rotateY(3deg)',
              },
              '50%': {
                transform: 'translateX(0)',
              },
            },
            wobble: {
              from: {
                transform: 'translate3d(0, 0, 0)',
              },

              '15%': {
                transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)',
              },

              '30%': {
                transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)',
              },

              '45%': {
                transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)',
              },

              '60%': {
                transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)',
              },

              '75%': {
                transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)',
              },

              to: {
                transform: 'translate3d(0, 0, 0)',
              },
            },
            jello: {
              'from, 11.1%,to': {
                transform: 'translate3d(0, 0, 0)',
              },

              '22.2%': {
                transform: 'skewX(-12.5deg) skewY(-12.5deg)',
              },

              '33.3%': {
                transform: 'skewX(6.25deg) skewY(6.25deg)',
              },

              '44.4%': {
                transform: 'skewX(-3.125deg) skewY(-3.125deg)',
              },

              '55.5%': {
                transform: 'skewX(1.5625deg) skewY(1.5625deg)',
              },

              '66.6%': {
                transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
              },

              '77.7%': {
                transform: 'skewX(0.390625deg) skewY(0.390625deg)',
              },

              '88.8%': {
                transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
              },
            },
          },
          animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
            wiggle: 'wiggle 1s ease-in-out infinite',
            heartBeat: 'heartBeat 1s infinite',
            hflip: 'flipHorizontal 2s infinite',
            vflip: 'flipVertical 2s infinite',
            swing: 'swing 2s ease-out infinite',
            rubberBand: 'rubberBand 1s infinite',
            flash: 'flash 2s infinite',
            headShake: 'headShake 2s infinite',
            wobble: 'wobble 1s infinite',
            jello: 'jello 2s infinite',
          },
          screens: {
            'board-mobile': '768px',
            'board-mobile-max': { max: '767px' },
          },
        },
      },
    };
  }
);

export default pluginConfig;
