module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#495371',
        secondary: '#384057',
        trinary: '#74959A',
        quaternary: '#98B4AA',
        beige:'#F1E0AC',
      },
      fontFamily: {
        body:['Bebas Neue'],
        heading:['Rubik'],
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
