/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        'press-start': [ '"IBM Plex Mono"'],
      },
    },
  },
  plugins: [],
}
