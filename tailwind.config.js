/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50:  '#FFF5ED',
          100: '#FFE6CC',
          200: '#FFC899',
          300: '#FFA066',
          400: '#E8722E',
          500: '#C85212',
          600: '#A83E0A',
          700: '#7A2B06',
          800: '#4D1A04',
          900: '#2C0E02',
        },
        forest: {
          50:  '#EDF7EF',
          100: '#C6E8CB',
          200: '#8FCE98',
          300: '#5CAF68',
          400: '#2A7A3A',
          500: '#1E5E2E',
          600: '#154520',
          700: '#0D3015',
          800: '#071C0C',
          900: '#030F06',
        },
        cream: {
          50:  '#FFFEF9',
          100: '#FDF8F0',
          200: '#F5EDD8',
          300: '#EDE0BC',
          400: '#E2D09A',
          500: '#D4BB72',
          600: '#B89645',
          700: '#8A6E2A',
          800: '#5C4618',
          900: '#2E230C',
        },
        gold: {
          400: '#F0AC20',
          500: '#D4920A',
          600: '#B07608',
        },
        earth: {
          600: '#8B4513',
          700: '#6B3410',
        },
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        lora: ['Lora', 'serif'],
        sans: ['Lora', 'Georgia', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
