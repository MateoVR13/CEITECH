

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'blue': '#3b82f6',
          'darkblue': '#1d4ed8',
          'lightblue': '#93c5fd',
        },
        'dark': {
          '900': '#0D1117',
          '800': '#161B22',
          '700': '#21262d',
          '600': '#30363d',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px) scale(0.98)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        'scale-in-up': {
          '0%': {
            transform: 'translateY(30px) scale(0.95)',
          },
          '100%': {
            transform: 'translateY(0) scale(1)',
          },
        },
      },
      animation: {
        floating: 'floating 5s ease-in-out infinite',
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in-up': 'scale-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      boxShadow: {
        'neon-blue': '0 0 25px rgba(59, 130, 246, 0.4), 0 0 10px rgba(59, 130, 246, 0.5)',
        'card': '0 10px 30px -15px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}