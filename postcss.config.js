const cssnano = require('cssnano')

module.exports = {
  plugins: [
    require('@tailwindcss/jit'),
    require('postcss-import'),
    require('postcss-preset-env'),
    require('tailwindcss')('tailwind.config.js'),
    cssnano({
      preset: 'default',
    }),
  ],
}
