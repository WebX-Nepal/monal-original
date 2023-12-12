/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily:{
      'poppins': ['Poppins', 'sans-serif'],
      'hedvig':[ 'Hedvig Letters Serif','sans-serif'],
      'Cormorant':[ 'Cormorant Garamond','sans-serif']
    },
    extend: {
      
    },
  },
  plugins: [],
}