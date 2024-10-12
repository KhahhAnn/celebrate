/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        updock: ['"Updock"', 'serif'],
        fira: ['"Fira Sans Condensed"', 'serif'],
        qwitcher: ['"Qwitcher Grypen"', 'serif']
      },
    },
  },
  plugins: [],
}