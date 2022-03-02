module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#B5F6F7', // Celeste
        onprimary:'#293241', // Gunmetal
        onprimary200:'#3F4D64', // Independance 
        onprimary100:'#7588a9', // shadow blue / input fields bg
        secondary: '#3d5a80', // bdazzled blue
        error: '#B00020', //  Red 
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
