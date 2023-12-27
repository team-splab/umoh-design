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
        '.body1-regular': {
          fontFamily: 'Pretendard',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '400',
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
        '.body2-regular': {
          fontFamily: 'Pretendard',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '400',
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
          },
          animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
          },
          screens: {
            'board-mobile': '768px',
            'board-mobile-max': { max: '767px' },
            tablet: '768px',
          },
        },
      },
    };
  }
);

export default pluginConfig;
