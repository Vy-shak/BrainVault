/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Bblue500: '#4B1EC6',
        Bblue900: '#E5E4FB'
      }
    },
  },
  plugins: [],
}