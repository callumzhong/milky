/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      libre: ['"Libre Baskerville"', 'serif'],
      body: ['"Open Sans"', 'sans-serif'],
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    container: {
      center: true,
      padding: '12px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern':
          "url('https://source.unsplash.com/random/1920x1080')",
      },
      fontSize: {
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '1.75rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '3.5rem',
        '7xl': '4rem',
        '8xl': '4.5rem',
        '9xl': '5rem',
      },
      colors: {
        'lunar-green': {
          DEFAULT: '#404A3D',
          50: '#9AA996',
          100: '#909F8B',
          200: '#7A8D75',
          300: '#677762',
          400: '#53604F',
          500: '#404A3D',
          600: '#252B24',
          700: '#0B0C0A',
          800: '#000000',
          900: '#000000',
        },
        'hippie-green': {
          DEFAULT: '#5B8C51',
          50: '#C1D8BC',
          100: '#B5D1AF',
          200: '#9DC295',
          300: '#85B37C',
          400: '#6DA462',
          500: '#5B8C51',
          600: '#44683C',
          700: '#2D4528',
          800: '#162113',
          900: '#000000',
        },
        confetti: {
          DEFAULT: '#EDDD5E',
          50: '#FFFFFF',
          100: '#FDFCF1',
          200: '#F9F4CC',
          300: '#F5ECA7',
          400: '#F1E583',
          500: '#EDDD5E',
          600: '#E7D22C',
          700: '#C5B116',
          800: '#928410',
          900: '#60560B',
        },
        'wild-sand': {
          DEFAULT: '#F7F7F7',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#F7F7F7',
          600: '#DBDBDB',
          700: '#BFBFBF',
          800: '#A3A3A3',
          900: '#878787',
        },
      },
      animation: {
        pulse: 'pulse 1s both infinite',
        slideInRight: 'slideInRight 1s both',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scaleX(1)' },
          '50%': {
            opacity: 1,
            transform: 'scale3d(1.05,1.05,1.05)',
          },
        },
        slideInRight: {
          '0%': {
            transform: 'translate3d(100%,0,0)',
            visibility: 'visible',
          },
          '100%': {
            opacity: 1,
            transform: 'translateZ(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
