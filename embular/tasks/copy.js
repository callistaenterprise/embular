module.exports = {
    first: {
        files: [
                {src: ['../webapp/dist/index.html'], dest: '../webapp/index.html'},
                ]
    },
    dist: {
        files: [
            {
                expand: true,
                dot: true,
                cwd: 'app',
                dest: '../webapp/dist',
                src: [
                    '*.{ico,txt}',
                    '.htaccess',
                    'images/{,*/}*.{webp,gif}',
                    'styles/fonts/*'
                ]
            },
						{src: ['bower_libs/libs.js'], dest: '../webapp/dist/libs.js'},
        ]
    },
    prod: {
        files: [
                {src: ['bower_libs/libs.js'], dest: '../webapp/dist/libs.js'},
                {src: ['../webapp/dist/prod.html'], dest: '../webapp/index.html'},
            ]
    }
};
