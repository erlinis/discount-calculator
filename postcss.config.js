// const cssnano = require('cssnano')

module.exports = {
  plugins: {
    '@tailwindcss/jit': { config: 'tailwind.config.js' },
    autoprefixer: {},
    'postcss-import': {},
    // 'postcss-preset-env': {},
  },
}
