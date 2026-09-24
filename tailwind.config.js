/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FFF8F3',
        'blush': '#F5E6E0',
        'rose': '#E8D5CE',
        'sage': '#A8B8A8',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
