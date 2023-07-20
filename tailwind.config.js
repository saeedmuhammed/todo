/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4D60FF',
        'secondary': '#EDF0FF',
      },
      screens: {
        'lg': '1100px',
        'sm': '613px',
        // 'md' : '1225px',
        // => @media (min-width: 1100px) { ... }
      },
    },
  
  },
  plugins: [],
}


