/* Tailwind config for the frontend react app. This is where the app theme should be defined: https://v2.tailwindcss.com/docs/configuration. */
import type { Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'
import typographyPlugin from '@tailwindcss/typography'
import aspectRatioPlugin from '@tailwindcss/aspect-ratio'

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      /* ─── Font Families ──────────────────────────────────────────────────── */
      fontFamily: {
        // Primary — Body text, standard UI
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        // Secondary — Display, headings, buttons
        display: ['"Booster Sans Variable"', 'system-ui', 'sans-serif'],
        heading: ['"Booster Sans Variable"', 'system-ui', 'sans-serif'],
        // Body — paragraphs, descriptions
        body: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        // Secondary — code, technical, data
        mono: ['"PP Supply Mono"', '"Courier New"', 'monospace'],
        // Tertiary — decorative, editorial emphasis
        serif: ['"Holise Variable"', 'Georgia', 'serif'],
      },

      /* ─── Color Palette ──────────────────────────────────────────────────── */
      colors: {
        /* Shadcn semantic tokens */
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },

        /* ── Skip Neutral — near-neutral with blue-violet tint ──────────────── */
        'skip-neutral': {
          0: '#000000',
          50: '#050505',
          100: '#09090a',
          150: '#0c0c0f',
          200: '#111115',
          250: '#151519',
          300: '#1a191f',
          350: '#1e1e24',
          400: '#222229',
          450: '#26262e',
          500: '#2a2a33',
          550: '#2e2e38',
          600: '#373642',
          650: '#3c3c47',
          700: '#40404c',
          750: '#464652',
          800: '#525261',
          850: '#69697a',
          900: '#7e7e8f',
          950: '#8e8e9e',
          1000: '#9f9fad',
          1050: '#ababb8',
          1100: '#b6b6c2',
          1150: '#c2c2cc',
          1200: '#cdcdd6',
          1250: '#d5d6de',
          1300: '#d9dae2',
          1350: '#e4e5ed',
          1400: '#ebecf2',
          1450: '#f2f3f7',
          1500: '#f9fafc',
          1550: '#ffffff',
        },

        /* ── Blue Violet ────────────────────────────────────────────────────── */
        'blue-violet': {
          50: '#efeeff',
          100: '#e2e0ff',
          200: '#cac7fe',
          300: '#aaa5fc',
          400: '#8881f8',
          500: '#6b63f1',
          600: '#4f46e5',
          700: '#4038ca',
          800: '#3730a3',
          900: '#332e81',
          950: '#1e1b4b',
        },

        /* ── Fuchsia ────────────────────────────────────────────────────────── */
        fuchsia: {
          50: '#fdf2ff',
          100: '#fce3ff',
          200: '#f8c7ff',
          300: '#f79bff',
          400: '#f45fff',
          500: '#e824ff',
          600: '#d503fc',
          700: '#b100cd',
          800: '#9201a7',
          900: '#7a0887',
          950: '#53005d',
        },

        /* ── Error / Coral ──────────────────────────────────────────────────── */
        error: {
          0: '#fce7e3',
          1: '#fdd2ca',
          2: '#ff9c94',
          3: '#ff7d73',
          4: '#ff584a',
          5: '#ff2a00',
          6: '#d32300',
          7: '#c52100',
          8: '#8e1800',
          9: '#6e1200',
          10: '#4a1005',
        },
      },

      /* ─── Border Radius ──────────────────────────────────────────────────── */
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      /* ─── Typography Scale ───────────────────────────────────────────────── */
      fontSize: {
        // Body (Instrument Sans)
        'body-xxs': ['12px', { lineHeight: '1.4' }],
        'body-xs': ['14px', { lineHeight: '1.4' }],
        'body-s': ['15px', { lineHeight: '1.4' }],
        'body-m': ['16px', { lineHeight: '1.4' }],
        'body-l': ['18px', { lineHeight: '1.4' }],
        'body-xl': ['20px', { lineHeight: '1.3' }],
        'body-xxl': ['24px', { lineHeight: '1.3' }],
        'body-xxxl': ['32px', { lineHeight: '1.3' }],
        'body-4xl': ['36px', { lineHeight: '1.3' }],

        // Headings (Booster Sans Variable — Recalibrated Tokens)
        h1: ['64px', { lineHeight: '1.1', fontWeight: '700' }],
        h2: ['48px', { lineHeight: '1.1', fontWeight: '700' }],
        h3: ['36px', { lineHeight: '1.1', fontWeight: '600' }],
        h4: ['24px', { lineHeight: '1.1', fontWeight: '600' }],
        h5: ['20px', { lineHeight: '1.1', fontWeight: '500' }],
        h6: ['16px', { lineHeight: '1.1', fontWeight: '500' }],

        // Display Tokens
        'display-x': ['88px', { lineHeight: '1', fontWeight: '600' }],
        'display-xx': ['96px', { lineHeight: '1', fontWeight: '600' }],
        'display-xxx': ['120px', { lineHeight: '1', fontWeight: '600' }],
        'display-xxxl': ['144px', { lineHeight: '1', fontWeight: '600' }],

        // Mono (PP Supply Mono)
        'mono-xs': ['11px', { lineHeight: '1.3', fontWeight: '700' }],
        'mono-s': ['13px', { lineHeight: '1.3', fontWeight: '700' }],
        'mono-m': ['16px', { lineHeight: '1.3', fontWeight: '700' }],
        'mono-l': ['18px', { lineHeight: '1.1', fontWeight: '500' }],
        'mono-xl': ['20px', { lineHeight: '1.1', fontWeight: '500' }],
        'mono-xxl': ['22px', { lineHeight: '1.1', fontWeight: '500' }],
        'mono-xxxl': ['24px', { lineHeight: '1.1', fontWeight: '500' }],
        'mono-display': ['32px', { lineHeight: '1.1', fontWeight: '500' }],
        'mono-display-x': ['40px', { lineHeight: '1.1', fontWeight: '500' }],
      },

      /* ─── Box Shadow ─────────────────────────────────────────────────────── */
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        elevation: '0 4px 20px rgba(0, 0, 0, 0.05)',
        'btn-inner':
          'inset 0px 6px 16px 0px rgba(255,255,255,0.10), inset 0px 2px 2px 0px rgba(255,255,255,0.05), inset 0px -2px 2px 0px rgba(0,0,0,0.05)',
      },

      /* ─── Background Images ──────────────────────────────────────────────── */
      backgroundImage: {
        'gradient-blue-violet': 'linear-gradient(to right, #efeeff, #4f46e5)',
        'gradient-fuchsia': 'linear-gradient(to right, #fdf2ff, #d503fc)',
        'gradient-brand': 'linear-gradient(135deg, #4f46e5 0%, #d503fc 100%)',
        'gradient-brand-soft': 'linear-gradient(135deg, #aaa5fc 0%, #f79bff 100%)',
      },

      /* ─── Transitions ────────────────────────────────────────────────────── */
      transitionProperty: {
        width: 'width',
        height: 'height',
      },
      transitionTimingFunction: {
        apple: 'cubic-bezier(0.42, 0, 0.58, 1)',
      },
    },
  },
  plugins: [animatePlugin, typographyPlugin, aspectRatioPlugin],
} satisfies Config
