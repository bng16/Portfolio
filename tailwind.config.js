/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'og': ['Overused Grotesk', 'sans-serif'],
      },
      fontWeight: {
        black: 900,
        bold: 700,
        normal: 400,
        light: 300,
      },
    },
  },
  plugins: [],
}
