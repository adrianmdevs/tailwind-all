/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'media',
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

