module.exports = {
  mode:'jit',
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        
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
