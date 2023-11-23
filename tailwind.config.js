/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/*.tsx',
    './src/**/*.tsx',
    './*.tsx',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'space-img': "url('./src/images/background.png')",
      },
      borderRadius: {
        'ellipsis': '50%',
      },
      fontFamily: {
        'my-font': ['Montserrat', 'sans-serif'],
      },
      rotate: {
        '40': '40deg',
        '150': '150deg',
      },
      width: {
        'Terra': '30%',
        'Júpiter': '100%',
        'Saturno': '80%',
        'Urano': '50%',
        'Netuno': '50%',
        'Marte': '25%',
        'Vênus': '20%',
        'Mercúrio': '15%',
        '1/9': '11,11111%',
      }
    },
  },
  plugins: [],
}
