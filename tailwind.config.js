/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#fdf2f4', 100: '#fce7eb', 200: '#f9d0d9', 300: '#f4a8b8',
          400: '#ed7291', 500: '#e04070', 600: '#cd2455', 700: '#ab1842',
          800: '#8f1537', 900: '#7a1432', 950: '#43071a',
        },
        gold: {
          300: '#f4d675', 400: '#efc14a', 500: '#d4a017', 600: '#b8860b',
        },
        noir: {
          500: '#3d2b32', 600: '#2e1f27', 700: '#231519', 800: '#180f13',
          900: '#0d0a0b',
        },
        cream: {
          50: '#fefcf8', 100: '#fdf7ed', 200: '#faefd5',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
