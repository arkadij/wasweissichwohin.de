module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#485460',
        secondary: '#D2DAE2',
        lightwhite: '#F5F5F5',
        highlight:'#FFA801',
        error: '#FF5E57',
        success: '#0BE881',
        warning: '#FFA801',
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
