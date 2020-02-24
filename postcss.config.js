const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['./src/**/*.html', './src/**/*.js'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

const plugins = [
  require('tailwindcss')('./tailwind.config.js'),
  require('postcss-custom-properties'),
  require('autoprefixer'),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(purgecss);
}

module.exports = () => ({
  plugins,
});
