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
        '.H1-bold': {
          fontFamily: 'Pretendard',
          fontSize: '40px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '48px',
          letterSpacing: '-0.8px',
        },
        '.H1-semibold': {
          fontFamily: 'Pretendard',
          fontSize: '40px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '48px',
          letterSpacing: '-0.8px',
        },
        '.H2-bold': {
          fontFamily: 'Pretendard',
          fontSize: '36px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '43px',
          letterSpacing: '-0.72px',
        },
        '.H2-semibold': {
          fontFamily: 'Pretendard',
          fontSize: '36px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '43px',
          letterSpacing: '-0.72px',
        },
        '.H3-bold': {
          fontFamily: 'Pretendard',
          fontSize: '30px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '36px',
          letterSpacing: '-0.6px',
        },
        '.H3-semibold': {
          fontFamily: 'Pretendard',
          fontSize: '30px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '36px',
          letterSpacing: '-0.6px',
        },
        '.H3-medium': {
          fontFamily: 'Pretendard',
          fontSize: '30px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '36px',
          letterSpacing: '-0.6px',
        },
        '.H4-bold': {
          fontFamily: 'Pretendard',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '30px',
          letterSpacing: '-0.48px',
        },
        '.H4-semibold': {
          fontFamily: 'Pretendard',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '30px',
          letterSpacing: '-0.48px',
        },
        '.H4-medium': {
          fontFamily: 'Pretendard',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '30px',
          letterSpacing: '-0.48px',
        },
        '.H5-bold': {
          fontFamily: 'Pretendard',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '24px',
          letterSpacing: '-0.4px',
        },
        '.H5-semibold': {
          fontFamily: 'Pretendard',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '24px',
          letterSpacing: '-0.4px',
        },
        '.H5-medium': {
          fontFamily: 'Pretendard',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '24px',
          letterSpacing: '-0.4px',
        },
        '.body1-extrabold': {
          fontFamily: 'Pretendard',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '800',
          lineHeight: '24px',
        },
        '.body1-bold': {
          fontFamily: 'Pretendard',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '24px',
        },
        '.body1-semibold': {
          fontFamily: 'Pretendard',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '24px',
        },
        '.body1-medium': {
          fontFamily: 'Pretendard',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '24px',
        },
        '.body2-extrabold': {
          fontFamily: 'Pretendard',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '800',
          lineHeight: '24px',
        },
        '.body2-bold': {
          fontFamily: 'Pretendard',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '24px',
        },
        '.body2-semibold': {
          fontFamily: 'Pretendard',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '24px',
        },
        '.body2-medium': {
          fontFamily: 'Pretendard',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '24px',
        },
        '.detail1-bold': {
          fontFamily: 'Pretendard',
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '20px',
        },
        '.detail1-semibold': {
          fontFamily: 'Pretendard',
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '20px',
        },
        '.detail1-medium': {
          fontFamily: 'Pretendard',
          fontSize: '12px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '20px',
        },
        '.detail2-bold': {
          fontFamily: 'Pretendard',
          fontSize: '10px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '12px',
          letterSpacing: '-0.3px',
        },
        '.detail2-semibold': {
          fontFamily: 'Pretendard',
          fontSize: '10px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '12px',
          letterSpacing: '-0.3px',
        },
        '.detail2-medium': {
          fontFamily: 'Pretendard',
          fontSize: '10px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '12px',
          letterSpacing: '-0.3px',
        },
        '.detail3-bold': {
          fontFamily: 'Pretendard',
          fontSize: '8px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '10px',
          letterSpacing: '-0.24px',
        },
        '.detail3-semibold': {
          fontFamily: 'Pretendard',
          fontSize: '8px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '10px',
          letterSpacing: '-0.24px',
        },
        '.detail3-medium': {
          fontFamily: 'Pretendard',
          fontSize: '8px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '10px',
          letterSpacing: '-0.24px',
        },
      });
    };
  },
  () => {
    return {
      theme: {
        container: {
          center: true,
          screens: {
            xl: '1280px',
          },
        },
        extend: {
          colors: {
            primary: {
              default: '#7433ff',
              hover: '#5f2eea',
            },
            danger: {
              default: '#ef4444',
              hover: '#dc2626',
            },
            warning: {
              default: '#facc15',
              hover: '#eab308',
            },
            success: {
              default: '#22c55e',
              hover: '#16a34a',
            },
            info: {
              default: '#3b82f6',
              hover: '#2563eb',
            },
            'umoh-purple': {
              50: '#f2ebff',
              100: '#e3d6ff',
              200: '#c7adff',
              300: '#ac85ff',
              400: '#905cff',
              500: '#7433ff',
              600: '#5726bf',
              700: '#3a1a80',
              800: '#1d0d40',
              900: '#0c051a',
            },
          },
          textColor: {
            primary: '#111827',
            secondary: '#374151',
            inverse: '#ffffff',
            brand: '#7433ff',
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
