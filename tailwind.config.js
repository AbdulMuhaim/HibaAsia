/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        'extra-wide': '0.06em',
        'super-wide': '0.1em',
        'mega-wide': '0.4em',
      },
      fontFamily: {
        Avenir: ['Avenir Next or Sofia Pro'],
        Arial: ['Arial', 'Helvetica', 'sans-serif'],
      },
      keyframes: {
        'reverse-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'bounce': {
          '0%, 100%': { transform: 'translateY(-50%)', 'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', 'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        'pulse-border': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 149, 66, 0.7)' },
          '50%': { boxShadow: '0 0 0 20px rgba(0, 149, 66, 0)' },
        },
        'gradientBackground': {
          '0%': {
            background: 'linear-gradient(to bottom right, #1e3a8a, #289b78)',
          },
          '25%': {
            background: 'linear-gradient(to bottom right, #289b78, #1e3a8a)',
          },
          '50%': {
            background: 'linear-gradient(to bottom right, #1e3a8a, #289b78)',
          },
          '75%': {
            background: 'linear-gradient(to bottom right, #289b78, #1e3a8a)',
          },
          '100%': {
            background: 'linear-gradient(to bottom right, #1e3a8a, #289b78)',
          },
        }
      },
      animation: {
        'reverse-rotate': 'reverse-rotate 1s ease-in-out',
        'bounce': 'bounce 1s infinite',
        'pulse-border': 'pulse-border 2s infinite',
        'gradient-bg': 'gradientBackground 10s ease infinite',
      },
    },
  },
  plugins: [],
}
