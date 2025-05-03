/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pace-red': '#FF3B30',
        'pace-red-dark': '#E62E24',
      },
    },
  },
  plugins: [],
} 