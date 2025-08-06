/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        crusty: {
          red: '#DC2626',
          yellow: '#FCD34D',
          black: '#1F2937',
          white: '#FFFFFF',
          green: '#10B981', // Ajout de la couleur verte
          'red-light': '#FEE2E2',
          'green-light': '#D1FAE5',
          'yellow-light': '#FEF3C7',
          'orange-light': '#FFEDD5'
        }
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};