/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#3B82F6',
        'primary-pink': '#F9A8D4',
        'primary-red': '#F87171',
        'primary-gray': '#F3F4F6',
        'neutral-100': '#F5F5F5',
        'neutral-200': '#E5E7EB',
        'neutral-300': '#D1D5DB',
        'neutral-800': '#1F2937'
      },
      borderRadius: {
        'xl': '1rem',
        'lg': '0.75rem'
      },
      spacing: {
        '18': '4.5rem'
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem'
      }
    }
  },
  plugins: []
}
