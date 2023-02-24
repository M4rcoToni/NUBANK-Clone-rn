/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/screens/*.tsx",
    "./src/components/*.tsx",
  ],
  theme: {
    extend: {
      fontSize: {
        lg: ['14px', '20px'],
      },
      fontFamily: {
        'Inter-400': 'Inter_400Regular',
        'Inter-600': 'Inter_600SemiBold'
      },
      width: {
        '18': '4.5rem'
      },
      height: {
        '18': '4.5rem'
      },
      colors: {
        gray: {
          100: '#5B5B5B'
        },
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
