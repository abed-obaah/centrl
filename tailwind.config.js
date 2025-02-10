/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },

    fontFamily: {
      sans: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
    },

    screens: {
      sm: '36rem',
      md: '48rem',
      lg: '64rem',
      xl: '68.75rem',
      '2xl': '90rem',
    },

    extend: {},
  },
  plugins: [],
};
