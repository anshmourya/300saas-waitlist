/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        default: '0 2px 5px rgba(0, 0, 0, 0.5)',
        // you can add more custom text shadows here
      },
    },
  },
  variants: {
    extend: {
      textShadow: ['responsive'], // add other variants if needed
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}