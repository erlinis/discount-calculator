const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env'),
    require('tailwindcss')('tailwind.config.js'),
    cssnano({
      preset: 'default'
    }),
    purgecss({
      content: ['./src/App.js', './src/components/**/*.js', './public/index.html'],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['html', 'js'],
          css: ['./src/index.css']
        }
      ]
    })
  ]
};
