module.exports = {
	options : {
		banner : '/*! <%= pkg.name %> - v<%= pkg.version %> - '
				+ '<%= grunt.template.today("yyyy-mm-dd") %> */'
	},
	dist : {
    files: {
      'public/dist/js/app.min.js': ['public/src/js/**/*.js', 'public/src/js/*.js']
    },
    mangle: false
	}
};
  