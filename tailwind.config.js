const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: { mode: 'all', content: ['src/**/*.html', 'src/**/*.svelte'] },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },

  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')]
}
