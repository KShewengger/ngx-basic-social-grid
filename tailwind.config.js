module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#ecebf7',
          100: '#d0ccec',
          200: '#b1abdf',
          300: '#9289d2',
          400: '#7a6fc9',
          500: '#6356bf',
          600: '#5b4fb9',
          700: '#5145b1',
          800: '#473ca9',
          900: '#352b9b',
          'A100': '#e1dfff',
          'A200': '#b2acff',
          'A400': '#8379ff',
          'A700': '#6c5fff',
        },
        'secondary': {
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#e6e6e6',
          300: '#dbdbdb',
          400: '#d4d4d4',
          500: '#cccccc',
          600: '#c7c7c7',
          700: '#c0c0c0',
          800: '#b9b9b9',
          900: '#adadad',
          'A100': '#ffffff',
          'A200': '#ffffff',
          'A400': '#fffcfc',
          'A700': '#ffe2e2',
        },
        'accent': {
          50: '#fae7e7',
          100: '#f3c3c3',
          200: '#eb9c9c',
          300: '#e37474',
          400: '#dd5656',
          500: '#d73838',
          600: '#d33232',
          700: '#cd2b2b',
          800: '#c72424',
          900: '#be1717',
          'A100': '#fff1f1',
          'A200': '#ffbebe',
          'A400': '#ff8b8b',
          'A700': '#ff7171',
        }
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      transitionProperty: {
        dimensions: 'height, width',
      }
    },
  },
  plugins: [],
}