/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // purge: [
  //   "./src/**/*.{js,ts,jsx,tsx}",
  //   "./index.html",
  // ],
  // mode: "jit",
  media:false,
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#5865f2"
      }
    },
  },
  plugins: [],
}