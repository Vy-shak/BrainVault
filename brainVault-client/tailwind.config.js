/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Bgreen': {
          '50': '#f0fdf5',
          '100': '#dcfce9',
          '200': '#bbf7d4',
          '300': '#86efb4',
          '400': '#4ade8b',
          '500': '#22c56a',
          '600': '#16a354',
          '700': '#158045',
          '800': '#16653a',
          '900': '#145332',
          '950': '#052e19',
        },
      },
      fontFamily: {
        Kanit: ['Kanit', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
      }
    },
  },
  plugins: [],
}