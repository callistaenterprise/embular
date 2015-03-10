module.exports = {
			options: {
				separator: '\n'
			}, 
			dist: {
				// src: ['app/scripts/**/*.js', 'dist/templates.js'],
				src: ['public/src/js/**/*.js', '!app/scripts/libs.js'],
				dest: 'public/dist/js/app.js'
			}
		};
