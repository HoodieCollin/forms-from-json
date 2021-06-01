// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-plugin-context')({
      increaseSpecificity: require('postcss-increase-specificity')
    }),
    require('postcss-nested')
  ]
};
