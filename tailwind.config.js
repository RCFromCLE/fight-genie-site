/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'genie-primary': '#4F46E5',
        'genie-secondary': '#818CF8',
        'genie-dark': '#111827',
        'genie-light': '#F3F4F6',
        'discord': '#5865F2',
        'solana': '#14F195',
      },
      fontFamily: {
        'discord': ['gg sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { 'box-shadow': '0 0 20px rgba(79, 70, 229, 0.1)' },
          '100%': { 'box-shadow': '0 0 40px rgba(79, 70, 229, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/src/assets/hero-pattern.svg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}