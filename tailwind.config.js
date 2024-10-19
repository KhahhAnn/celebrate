/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        leJourScript: ['"Le Jour Script"', 'serif'],
        timeNewRoman: ['"times"', 'serif'],
        timeNewRomanItalic: ['"times new roman italic"', 'serif'],
        updock: ['"Updock"', 'serif'],
        fira: ['"Fira Sans Condensed"', 'serif'],
        qwitcher: ['"Qwitcher Grypen"', 'serif']
      },
    },
  },
  plugins: [],
}