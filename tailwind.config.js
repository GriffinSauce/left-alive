module.exports = {
  theme: {
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
