/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07080d',
          900: '#0b0d14',
          850: '#10131d',
          800: '#161a29',
          700: '#22283e',
        },
        primary: {
          DEFAULT: '#6366f1',
          hover: '#4f46e5',
        },
        accent: {
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          pink: '#ec4899',
          emerald: '#10b981',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};

