/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ust: {
          gold: '#FFC72C',
          goldDark: '#F59E0B',
          navy: '#0F172A',
          gray: '#F8FAFC',
          charcoal: '#334155',
          border: '#E2E8F0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
