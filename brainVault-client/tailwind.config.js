/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Bblue500: '#5046E4',
        Bblue900: '#EFF3FF'
      }
    },
  },
  plugins: [],
}