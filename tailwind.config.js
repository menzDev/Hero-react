/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Nue': ['Nue', 'system-ui'],
    },
    screens:{
      sm: '640px',
      md: '768px',
      lg: '1024px',  // Este es el que estás usando
      xl: '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
