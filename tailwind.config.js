/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },

    colors: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: 'hsl(var(--primary))',
      secondary: 'hsl(var(--secondary))',
      card: 'hsl(var(--card))',
      muted: 'hsl(var(--muted))',
      black: 'hsl(var(--black))',
      white: 'hsl(var(--white))',
    },

    fontFamily: {
      sans: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
    },

    fontWeight: {
      300: '300',
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
      900: '900',
    },

    fontSize: {
      50: '.875rem',
      100: '1rem',
      200: '1.125rem',
      300: '1.25rem',
      400: '1.375rem',
      500: '1.5rem',
      600: '1.75rem',
      650: '2rem',
      700: '2.25rem',
      800: '2.5rem',
      900: '3rem',
      950: '3.5rem',
      1000: '4rem',
    },

    screens: {
      sm: '36rem',
      md: '48rem',
      'md-plus': '55rem',
      lg: '64rem',
      // xl: '75rem',
      xl: '68.75rem',
      '2xl': '90rem',
    },

    extend: {},
  },
  plugins: [],
};
