/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#FCC917', // yellow
          500: '#FA9E0D', // orange
          600: '#D33B21', // bright red
          700: '#AD2624', // dark red
          800: '#06153E', // deep blue
          DEFAULT: '#06153E'
        },
        'brand-red': '#AD2624',
        'brand-red-2': '#D33B21',
        'brand-orange': '#FA9E0D',
        'brand-yellow': '#FCC917',
        'brand-blue': '#06153E'
      }
    },
  },
  plugins: [],
};
