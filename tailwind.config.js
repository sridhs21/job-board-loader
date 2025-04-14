/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'gray-750': '#2a2e37',
          'gray-850': '#1a1c23',
          'blue-950': '#0d2150',
        },
        boxShadow: {
          'glow': '0 0 15px rgba(66, 153, 225, 0.5)',
        },
        animation: {
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        borderColor: theme => ({
          DEFAULT: theme('colors.gray.700', 'currentColor'),
        }),
      },
    },
    variants: {
      extend: {
        opacity: ['disabled'],
        cursor: ['disabled'],
        backgroundColor: ['active', 'disabled'],
        textColor: ['active', 'disabled'],
      },
    },
    plugins: [],
  };