export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        page: '#0D0F1E',
        card: '#161829',
        sidebar: '#12142A',
        primary: '#E91E8C',
        gold: '#D4A017',
        text: {
          DEFAULT: '#F0EBE3',
          sub: 'rgba(240,235,227,0.65)',
          muted: 'rgba(240,235,227,0.40)',
        },
        outline: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        display: ['"Noto Serif"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 32px rgba(0,0,0,0.4)',
        glow: '0 0 24px rgba(233,30,140,0.25)',
        'gold-glow': '0 0 24px rgba(212,160,23,0.3)',
      },
      backdropBlur: {
        nav: '12px',
      },
    },
  },
  plugins: [],
}
