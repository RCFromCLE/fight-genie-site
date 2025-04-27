/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#111111',       // Near black for main background
        'content-bg': '#1a1a1a',    // Dark gray for cards/content areas
        'primary-red': '#dc2626',   // Strong red accent (Tailwind red-600)
        'accent-gray': '#4b5563',  // Medium gray for borders/secondary text (Tailwind gray-600)
        'light-text': '#f3f4f6',    // Off-white for primary text (Tailwind gray-100)
        'medium-text': '#9ca3af',   // Lighter gray for secondary text (Tailwind gray-400)
      },
      fontFamily: {
        // Keep Inter for now, but could add a bolder display font here later
        // sans: ['Inter', 'sans-serif'], // Example if needed
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        // Remove float if not used elsewhere
      },
      // Remove keyframes if not used
      // keyframes: {
      //   float: {
      //     '0%, 100%': { transform: 'translateY(0)' },
      //     '50%': { transform: 'translateY(-10px)' },
      //   },
      // },
    },
  },
  plugins: [forms, typography],
};
