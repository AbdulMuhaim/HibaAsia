import bgImage from "../client/src/assets/9957940.jpg"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        hidden: 'hidden',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      letterSpacing: {
        'extra-wide': '0.06em',
        'super-wide': '0.1em',
        'mega-wide': '0.4em',
      },
      backgroundImage: {
        'custom-image': "url('../src/assets/9957940.jpg')",
      },
      fontFamily: {
        Avenir: ['Avenir Next or Sofia Pro'],
        Arial: ['Arial', 'Helvetica', 'sans-serif'],
        Tahoma: ['Tahoma', 'sans-serif'],
        Georgia : ['Georgia ', 'sans-serif'],
        Roman : ['Times New Roman ', 'sans-serif'],
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
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.transform-style-preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      });
    },
  ],
}
