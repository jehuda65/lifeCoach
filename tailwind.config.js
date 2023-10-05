/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./about.html", "./works.html", "./*.{html,js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway'],
        croissant: ['Croissant One'],
        poppins: ['Poppins']
      },
      backgroundImage: {
        'suzi-prof': "url('/images/suzi-prof.jpg')",
        'suzi-chill': "url('/images/suzi-chilled.jpg')",
        'suzi-active': "url('/images/suzi-active.jpg')",
        'suzi-new': "url('/images/suzi-new.jpg')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
