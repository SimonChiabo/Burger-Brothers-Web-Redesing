/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bb-black': '#111111',
        'bb-charcoal': '#2A2A2A',
        'bb-white': '#F9FAFB',
        'bb-wood-light': '#D4A373',
        'bb-wood-dark': '#A67C52',
        'bb-accent': '#F4B41A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
