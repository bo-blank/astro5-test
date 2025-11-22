import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'bg-primary', 'bg-secondary', 'bg-muted', 'bg-card', 'bg-background',
    'text-primary', 'text-secondary', 'text-muted', 'text-foreground', 'text-muted-foreground',
    'text-primary-foreground', 'text-secondary-foreground',
    'border-primary', 'border-secondary', 'border-border', 'border-muted',
    'bg-primary/95', 'bg-primary/90', 'bg-primary/20', 'bg-primary/10', 'bg-primary/5',
    'bg-secondary/30', 'bg-secondary/20', 'bg-secondary/10', 'bg-secondary/5',
    'bg-destructive', 'text-destructive', 'border-destructive',
    'hover:bg-primary', 'hover:bg-primary/90', 'hover:border-primary',
    'hover:text-primary', 'hover:bg-secondary', 'hover:bg-secondary/50',
    'text-destructive-foreground', 'bg-destructive/10',
    'border-border/50', 'border-border/40', 'border-border/30', 'border-border/20',
    'text-muted-foreground/90', 'text-muted-foreground/80', 'text-muted-foreground/70',
    'hover:scale-110', 'group-hover:scale-105', 'group-hover:text-primary',
    'hover:translate-x-1', 'hover:bg-primary/5', 'focus:border-primary', 'focus:ring-primary/50',
    'from-primary/20', 'to-secondary/20', 'from-primary/10', 'via-secondary/10', 'to-primary/10',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      // Digital Divide Design System
      colors: {
        // shadcn/ui colors - using direct hex values
        border: '#e5e5e5',
        input: '#ffffff',
        ring: '#030213',
        background: '#ffffff',
        foreground: '#030213',
        primary: {
          DEFAULT: '#030213',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#f3f3f5',
          foreground: '#030213',
        },
        destructive: {
          DEFAULT: '#d4183d',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#ececf0',
          foreground: '#717182',
        },
        accent: {
          DEFAULT: '#e9ebef',
          foreground: '#030213',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#030213',
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#030213',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        // Brand colors for Digital Divide
        brand: {
          50: '#f0f7ff',
          100: '#e1efff',
          200: '#c2deff',
          300: '#93c6ff',
          400: '#5ba4ff',
          500: '#0066ff',
          600: '#0052cc',
          700: '#0042a3',
          800: '#003d7a',
          900: '#002d5c',
          950: '#001a38',
        },
        // Neutral colors for modern aesthetic
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          150: '#f0f0f0',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // Accent colors for categories and highlights
        accent: {
          artsy: '#b24ed1',    // Purple for Arts/Culture
          tech: '#00a8e8',     // Cyan for Technology
          opinion: '#f77f00',  // Orange for Opinion
          profile: '#06d6a0',  // Teal for Profiles
          review: '#e63946',   // Red for Reviews
        },
        // Semantic colors
        success: '#059669',
        warning: '#d97706',
        error: '#dc2626',
        info: '#0891b2',
      },
      // Typography system
      fontFamily: {
        serif: ['Georgia', 'Garamond', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['Courier New', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      // Spacing system
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
        '3xl': '6rem',
      },
      // Border radius for elegant corners
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        none: '0',
        xs: '0.125rem',
        DEFAULT: '0.375rem',
        xl: '1rem',
        '2xl': '1.5rem',
        full: '9999px',
      },
      // Shadows for depth
      boxShadow: {
        xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        none: 'none',
      },
      // Typography
      lineHeight: {
        tight: '1.2',
        normal: '1.5',
        relaxed: '1.75',
        loose: '2',
      },
      // Animation
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      // Max content width for readability
      maxWidth: {
        prose: '65ch',
      },
    },
  },
  plugins: [],
};

export default config;
