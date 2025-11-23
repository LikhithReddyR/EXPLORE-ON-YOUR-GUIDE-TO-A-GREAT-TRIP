module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Forest Green
        primary: {
          DEFAULT: "#2C5F41", // forest-green-700
          50: "#F0F9F4", // forest-green-50
          100: "#DCFCE7", // forest-green-100
          200: "#BBF7D0", // forest-green-200
          300: "#86EFAC", // forest-green-300
          400: "#4ADE80", // forest-green-400
          500: "#22C55E", // forest-green-500
          600: "#16A34A", // forest-green-600
          700: "#2C5F41", // forest-green-700
          800: "#1F4A32", // forest-green-800
          900: "#14532D", // forest-green-900
        },
        // Secondary Colors - Earth Brown
        secondary: {
          DEFAULT: "#8B4513", // earth-brown-600
          50: "#FDF8F6", // earth-brown-50
          100: "#F7E6D3", // earth-brown-100
          200: "#E6C2A6", // earth-brown-200
          300: "#D4A574", // earth-brown-300
          400: "#C18B47", // earth-brown-400
          500: "#A67C52", // earth-brown-500
          600: "#8B4513", // earth-brown-600
          700: "#6B3410", // earth-brown-700
          800: "#4A240B", // earth-brown-800
          900: "#2D1607", // earth-brown-900
        },
        // Accent Colors - Coral
        accent: {
          DEFAULT: "#FF6B35", // coral-500
          50: "#FFF7F5", // coral-50
          100: "#FFEDE5", // coral-100
          200: "#FFD6CC", // coral-200
          300: "#FFB8A3", // coral-300
          400: "#FF8F6B", // coral-400
          500: "#FF6B35", // coral-500
          600: "#E55A2B", // coral-600
          700: "#CC4A1F", // coral-700
          800: "#B33A15", // coral-800
          900: "#992A0C", // coral-900
        },
        // Background Colors
        background: "#FAFAF9", // warm-gray-50
        surface: "#FFFFFF", // white
        // Text Colors
        text: {
          primary: "#1A1A1A", // gray-900
          secondary: "#6B7280", // gray-500
        },
        // Status Colors
        success: {
          DEFAULT: "#059669", // emerald-600
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
        },
        warning: {
          DEFAULT: "#D97706", // amber-600
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
        },
        error: {
          DEFAULT: "#DC2626", // red-600
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
        },
        // Border Colors
        border: {
          DEFAULT: "#E5E7EB", // gray-200
          light: "#F3F4F6", // gray-100
        },
      },
      fontFamily: {
        // Headings
        heading: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        // Body Text
        body: ['Source Sans Pro', 'sans-serif'],
        // Captions
        caption: ['Nunito Sans', 'sans-serif'],
        // Data/Monospace
        data: ['JetBrains Mono', 'monospace'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.3' }],
        '6xl': ['3.75rem', { lineHeight: '1.3' }],
      },
      boxShadow: {
        'card': '0 2px 4px rgba(44, 95, 65, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05)',
        'modal': '0 8px 16px rgba(44, 95, 65, 0.08), 0 4px 8px rgba(0, 0, 0, 0.05)',
        'floating': '0 16px 32px rgba(44, 95, 65, 0.08), 0 8px 16px rgba(0, 0, 0, 0.1)',
        'travel-sm': '0 2px 4px rgba(44, 95, 65, 0.08)',
        'travel-md': '0 8px 16px rgba(44, 95, 65, 0.08)',
        'travel-lg': '0 16px 32px rgba(44, 95, 65, 0.08)',
      },
      animation: {
        'loading': 'loading 1.5s infinite',
        'fade-in': 'fadeIn 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'slide-up': 'slideUp 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      keyframes: {
        loading: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'travel': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      backdropBlur: {
        'travel': '8px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'travel': '0.75rem',
        'travel-lg': '1rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.transition-smooth': {
          'transition': 'all 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        },
        '.transition-state': {
          'transition': 'all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        },
        '.hover-lift': {
          'transition': 'transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        },
        '.hover-lift:hover': {
          'transform': 'scale(1.02)',
        },
        '.focus-ring': {
          '&:focus': {
            'outline': 'none',
            'box-shadow': '0 0 0 2px #2C5F41, 0 0 0 4px rgba(44, 95, 65, 0.2)',
          },
        },
        '.skeleton': {
          'background': 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
          'background-size': '200% 100%',
          'animation': 'loading 1.5s infinite',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}