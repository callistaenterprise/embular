module.exports = {
	compile : {
		options : {
			templateName : function(sourceFile) {
				return sourceFile.replace(/app\/templates\//, '');
			}
		},
		files : {
			"../webapp/dist/templates.js" : "app/templates/**/*.hbs"
		}
	}
};