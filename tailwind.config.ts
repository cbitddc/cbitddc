import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        // Cyber Theme Colors
        'cyber-blue': '#0047AB',
        'cyber-cyan': '#00FFFF',
        'cyber-green': '#00FF41',
        'cyber-red': '#FF073A',
        'cyber-purple': '#7209B7',
        'neon-blue': '#0080FF',
        'matrix-green': '#00FF00',
        'dark-bg': '#0A0A0A',
        'dark-card': '#1A1A1A',
        'cyber-gray': '#2A2A2A',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        // Cyber Animations
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        'cyber-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px #0047AB, 0 0 40px #0047AB, 0 0 60px #0047AB',
            transform: 'scale(1)',
          },
          '50%': { 
            boxShadow: '0 0 40px #0047AB, 0 0 80px #0047AB, 0 0 120px #0047AB',
            transform: 'scale(1.05)',
          },
        },
        'glitch': {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-2px)' },
          '40%': { transform: 'translateX(2px)' },
          '60%': { transform: 'translateX(-1px)' },
          '80%': { transform: 'translateX(1px)' },
        },
        'float-cyber': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        'scan-line': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        'neon-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
          '75%': { opacity: '1' },
          '85%': { opacity: '0.9' },
        },
        'typewriter': {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'blink': {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        // Cyber Animations
        'matrix-rain': 'matrix-rain 3s linear infinite',
        'cyber-pulse': 'cyber-pulse 2s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'float-cyber': 'float-cyber 6s ease-in-out infinite',
        'scan-line': 'scan-line 2s linear infinite',
        'neon-flicker': 'neon-flicker 1.5s ease-in-out infinite',
        'typewriter': 'typewriter 4s steps(40, end)',
        'blink': 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
