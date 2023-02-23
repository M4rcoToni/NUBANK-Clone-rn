/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/screens/*.tsx",
    "./src/components/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': 'Inter_400Regular'
      },
      width: {
        '18': '4.5rem'
      },
      height: {
        '18': '4.5rem'
      },
      colors: {
        'purple': {
          100: '#830AD1',
          200: '#7A559B'
        },
        'white': {
          100: '#FFFFFF',
          200: '#EFEFEF'
        }
      }
    },
  },
  plugins: [],
}
