const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

const options = {
  processCssUrls: false,
  postCss: [
    tailwindcss('./tailwind.config.js'),
  ],
};

const webpackConfig = require('./webpack.config');

mix.webpackConfig(webpackConfig);

mix
  .js('resources/js/guest.js', 'public/js')
  .js('resources/js/app.js', 'public/js')
  .sass('resources/scss/app.scss', 'public/css')
  .options(options)
  .version();
