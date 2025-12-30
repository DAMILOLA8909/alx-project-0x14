/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'loading-bar': 'loading-bar 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}