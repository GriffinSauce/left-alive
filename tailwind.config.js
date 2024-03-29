const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '10rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        display: ['Mulish', 'sans-serif'],
      },
      colors: {
        // Pink
        primary: {
          50: '#fff0fa',
          100: '#ffe3f8',
          200: '#ffc6f2',
          300: '#ff98e5',
          400: '#ff58d1',
          500: '#ff27bb',
          600: '#ff0099',
          700: '#df007a',
          800: '#b80065',
          900: '#980356',
          950: '#5f0030',
        },
        // Yellow
        secondary: {
          50: '#fbffe7',
          100: '#f4ffc1',
          200: '#eeff86',
          300: '#ecff41',
          400: '#f2ff0d',
          500: '#fafa00',
          600: '#d1bf00',
          700: '#a68b02',
          800: '#896c0a',
          900: '#74580f',
          950: '#443004',
        },
        green: {
          50: '#e4ffe5',
          100: '#c5ffc9',
          200: '#92ff9c',
          300: '#52ff67',
          400: '#18fc3b',
          500: '#00e327',
          600: '#00b625',
          700: '#018a1d',
          800: '#086c1d',
          900: '#0c5b1e',
          950: '#00330e',
        },
        blue: {
          50: '#eff8ff',
          100: '#dff0ff',
          200: '#b8e2ff',
          300: '#78cbff',
          400: '#46b9ff',
          500: '#0697f1',
          600: '#0077ce',
          700: '#005fa7',
          800: '#02508a',
          900: '#084372',
          950: '#062a4b',
        },
        jet: {
          50: '#f6f7f7',
          100: '#e2e5e3',
          200: '#c4cbc7',
          300: '#9fa9a3',
          400: '#7b8680',
          500: '#606c66',
          600: '#4c5550',
          700: '#3f4643',
          800: '#353a38',
          900: '#2c302e',
          950: '#181b1a',
        },
        spotify: {
          300: '#1c9c49',
          500: '#1db954',
        },
        facebook: {
          300: '#334977',
          500: '#3b5998',
        },
        instagram: {
          500: '#cb3190;',
        },
      },
      spacing: {
        14: '3.5rem',
      },
      padding: {
        full: '100%',
      },
    },
  },
  variants: {
    backgroundColor: [
      'responsive',
      'first',
      'last',
      'even',
      'odd',
      'hover',
      'focus',
      'group-hover',
    ],
    borderRadius: ['responsive', 'first', 'last'],
    borderColor: ['hover'],
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.squiggle': {
          filter: 'url(#squiggle)',
        },
      });
    }),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
