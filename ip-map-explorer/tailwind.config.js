/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {height: {
      '100vh': '100vh', // Define your custom size here
    },},
  },
  plugins: [],
}

