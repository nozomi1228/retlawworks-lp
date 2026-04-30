/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary':    'var(--bg-primary)',
        'bg-secondary':  'var(--bg-secondary)',
        'bg-tertiary':   'var(--bg-tertiary)',
        'bg-card':       'var(--bg-card)',
        'bg-card-hover': 'var(--bg-card-hover)',
        'text-primary':  'var(--text-primary)',
        'text-secondary':'var(--text-secondary)',
        'text-muted':    'var(--text-muted)',
        'text-dim':      'var(--text-dim)',
        'accent':        'var(--accent)',
        'accent-light':  'var(--accent-light)',
      },
      fontFamily: {
        glacial: ['"Glacial Indifference"', 'sans-serif'],
        noto:    ['"Noto Sans JP"', 'sans-serif'],
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
      },
      transitionTimingFunction: {
        'reveal': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'brand':  'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        svgRotate: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.3' },
          '50%':      { opacity: '0.7' },
        },
        heroUp: {
          from: { opacity: '0', transform: 'translateY(25px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        heroFloat: {
          '0%':   { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(-10px, 15px) rotate(3deg)' },
        },
        fadeIn: {
          to: { opacity: '1' },
        },
        expandLine: {
          to: { width: '80px' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.2', transform: 'scaleY(0.5)' },
          '50%':      { opacity: '0.8', transform: 'scaleY(1)' },
        },
      },
      animation: {
        'svg-rotate':   'svgRotate 60s linear infinite',
        'breathe':      'breathe 4s ease-in-out infinite',
        'hero-up':      'heroUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'hero-float':   'heroFloat 15s ease-in-out infinite alternate',
        'scroll-pulse': 'scrollPulse 2.5s ease-in-out infinite',
        'fade-in':      'fadeIn 0.8s ease forwards',
        'expand-line':  'expandLine 1s ease forwards',
      },
    },
  },
  plugins: [],
};
