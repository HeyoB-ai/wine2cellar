export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#BE185D',
          light: '#FFB1C3',
          container: '#FFE4EE',
          on: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#EEC200',
          light: '#FFE083',
          container: '#FFF8DC',
          on: '#1A1200',
        },
        surface: {
          DEFAULT: '#FDF8F2',
          low: '#F5EDE3',
          high: '#EDE0D4',
          highest: '#E0D0C0',
          lowest: '#070E1D',
        },
        burgundy: '#6B1A2A',
        cream: '#FDF8F2',
        navy: '#070E1D',
        outline: '#C4A882',
      },
      fontFamily: {
        display: ['"Noto Serif"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.75rem',
      },
      backdropBlur: {
        md: '12px',
      },
      boxShadow: {
        ambient: '0 20px 40px rgba(7, 14, 29, 0.4)',
        card: '0 8px 24px rgba(107, 26, 42, 0.12)',
      },
      letterSpacing: {
        tight: '-0.02em',
      },
    },
  },
  plugins: [],
};
