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
        bg: {
          main: '#070607',
          sec: '#100A0D',
          card: '#151014',
          surface: '#1A1419',
        },
        crimson: {
          deep: '#A00028',
          dark: '#5C0015',
          neon: '#FF1744',
          accent: '#FF003C',
          glow: 'rgba(255, 23, 68, 0.2)',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B9B1B5',
          muted: '#7E777B',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'subtle-pulse': 'subtlePulse 4s ease-in-out infinite',
      },
      keyframes: {
        subtlePulse: {
          '0%, 100%': { opacity: 0.25 },
          '50%': { opacity: 0.45 },
        }
      },
      backgroundImage: {
        'radial-crimson': 'radial-gradient(circle at 50% 50%, rgba(160, 0, 40, 0.15) 0%, rgba(7, 6, 7, 0) 70%)',
        'subtle-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
      }
    },
  },
  plugins: [],
}
