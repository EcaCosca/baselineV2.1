/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  purge: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  mode: "jit",
  darkMode:false,
  theme: {
    extend: {},
  },
  plugins: [],
}