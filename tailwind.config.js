/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
  },
  plugins: [],
}
