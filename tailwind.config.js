/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#1e40af',
        biru: '#0f172a',
        dark: '#0f172a',
        bg: '#1e293b',
        footer: '#0e131c'
      },
      screens: {
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
}
