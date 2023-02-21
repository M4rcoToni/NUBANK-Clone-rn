/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/screens/*.tsx",
    "./src/components/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'purple': {
          100: '#830AD1',
          900: '#121214'
        },
        'white': {
          100: '#EFEFEF'
        }
      }
    },
  },
  plugins: [],
}
