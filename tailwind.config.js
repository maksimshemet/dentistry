/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Main brand color - matches the logo's turquoise
          primary: '#00BCD4',    // Darker turquoise
          secondary: '#0097A7',  // Darker secondary
          light: '#4DD0E1',      // Lighter but still vibrant
          dark: '#006064',       // Deep turquoise
          bg: '#E0F7FA',         // Light background
          'bg-alt': '#F0FBFD',   // Alternative light background
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      gradients: {
        'brand': 'linear-gradient(to bottom, var(--tw-colors-brand-bg) 0%, #ffffff 100%)',
      },
      boxShadow: {
        'brand': '0 4px 14px 0 rgba(0, 188, 212, 0.25)',
      },
    },
  },
  plugins: [],
}