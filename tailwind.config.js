/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./about.html", "./*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway'],
        croissant: ['Croissant One'],
        poppins: ['Poppins']
      }
    },
  },
  plugins: [],
};
