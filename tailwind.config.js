const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: { mode: 'all', content: ['src/**/*.html', 'src/**/*.svelte'] },
  theme: {
    typography: {
      default: {
        css: {
          color: '#fff'
        }
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      backgroundOpacity: {
        ...defaultTheme.backgroundOpacity,
        '85': '0.85'
      }
    }
  },

  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')]
}
