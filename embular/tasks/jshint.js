module.exports = {
	files: ['Gruntfile.js', 'app/scripts/**/*.js', 'test/spec/**/*.js'],  
	ignores : ['libs.js'],
	options: {
           globals: {
               jQuery: true,
               console: true,
               module: true
           }
				 }
}; 
