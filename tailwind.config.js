/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{tsx,jsx,js,vue,ts}'],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        purple: {
          DEFAULT: '#240053',
          bg1: '#3D0072',
          bg2: '#8807F7',
          bg3: '#D6ABFC',
          bg4: '#6005AE',
          bg5: '#1B0132',
          bg6: '#29014B',
          bg7: '#43027E',
          bg8: '#C8C1FD',
          bg9: '#10001F',
          bg10: '#21003D'
        },
        blue: {
          DEFAULT: '#35298A'
        },
        yellow: {
          DEFAULT: '#F59E0B'
        },
        green: {
          DEFAULT: '#0D9488',
          bg1: '#D2FFDE',
          bg2: '#33593D',
          bg3: '#333228',
          bg4: '#019A34'
        },
        gray: {
          DEFAULT: '#a3a3a3',
          bg1: '#FFFDF2',
          bg2: '#9CA3AF',
          bg3: '#F3F4F6',
          bg4: '#F8FAFC',
          bg5: '#FAF7C3',
          bg6: '#9F9704',
          bg7: '#F9FAFB'
        },
        pink: {
          DEFAULT: '#E8356D'
        }
      }
    },
    screens: {
      xxxs: '320px',
      xxs: '375px',
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
      xxxl: '1536px',
      xxxxl: '1900px'
    }
  },
  plugins: []
}
