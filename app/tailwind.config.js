module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik'],
      },
      colors: {
        'wh-green': {
          DEFAULT: '#276257',
          '50': '#98D6CB',
          '100': '#86CFC1',
          '200': '#62C0AF',
          '300': '#44AB98',
          '400': '#368677',
          '500': '#276257',
          '600': '#183E37',
          '700': '#0A1916',
          '800': '#000000',
          '900': '#000000'
        },
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ]
}
