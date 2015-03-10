module.exports = {
  options: {
    // This should be the name of your apps angular module
    module: 'embularApp',
    htmlmin: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    },
    usemin: 'public/dist/js/app.js'
  },
  main: {
    cwd: 'public/src',
    src: ['views/**/*.html'],
    dest: 'public/dist/js/templates.js'
  }
};
