module.exports = {
  purge: {
    content: ['./components/**/*.js', './pages/**/*.js'],
  },
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '10rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        display: ['Cubano', 'sans-serif'],
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
    ],
    borderRadius: ['responsive', 'first', 'last'],
  },
  plugins: [],
};
