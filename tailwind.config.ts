import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      c50: 'var(--c50)',
      c100: 'var(--c100)',
      c200: 'var(--c200)',
      c300: 'var(--c300)',
      c400: 'var(--c400)',
      c500: 'var(--c500)',
      c600: 'var(--c600)',
      c700: 'var(--c700)',
      c800: 'var(--c800)',
      c900: 'var(--c900)',
      c950: 'var(--c950)',

      dark1: 'var(--dark1)',
      dark2: 'var(--dark2)',
      dark3: 'var(--dark3)',
      borders: 'var(--borders)',
      text: 'var(--text)',
      text2: 'var(--text2)',
      text_opacity: 'var(--text_opacity)',
    },
    fontSize: {
      8: '0.5rem',
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      32: '2rem',
    }
  },
  plugins: [],
}
export default config
