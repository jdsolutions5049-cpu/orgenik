/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#143628',
          accent: '#2D6A4F',
          light: '#EBF5EE',
          cta: '#E65C00',
          'cta-hover': '#FF7A00',
          bg: '#FBFDFB',
          heading: '#0F2D1F',
          body: '#1F2937',
          muted: '#6B7280',
          border: '#E5E7EB',
          gold: '#F59E0B',
          subtle: '#F4F9F5'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Merriweather', 'serif'],
        sans: ['Poppins', 'Inter', '"Noto Sans Devanagari"', 'sans-serif'],
        marathi: ['"Noto Sans Devanagari"', 'Poppins', 'sans-serif']
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(20, 54, 40, 0.06), 0 2px 6px -1px rgba(20, 54, 40, 0.04)',
        'card-hover': '0 12px 28px -4px rgba(20, 54, 40, 0.12), 0 4px 10px -2px rgba(20, 54, 40, 0.06)',
        'dropdown': '0 10px 30px rgba(15, 45, 31, 0.12)'
      },
      borderRadius: {
        'xl': '14px',
        '2xl': '20px',
        '3xl': '28px'
      }
    },
  },
  plugins: [],
}
