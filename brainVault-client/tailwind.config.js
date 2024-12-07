/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gigas': {
          '50': '#f0f2fd',
          '100': '#e4e7fb',
          '200': '#ced2f7',
          '300': '#b0b4f1',
          '400': '#8f8fea',
          '500': '#7c74e0',
          '600': '#6c59d2',
          '700': '#5d4ab8',
          '800': '#463989',
          '900': '#403877',
          '950': '#272145',
        },

      }
    },
  },
  plugins: [],
}