function config(name) {
return require('./tasks/' + name);
}

module.exports = function(grunt) {

  
grunt.initConfig({

  pkg : grunt.file.readJSON('package.json'),
  
  // build ===================================================================
  rev: {
    files: {
      src: ['public/src/**/*.{js,css}', '!dist/js/shims/**']
    }
  },

  useminPrepare: {
    html: 'public/src/index.html'
  },

  usemin: {
    html: ['public/dist/index.html']
  },
  
  // dev =====================================================================
  includeSource: {
  options: {
    basePath: 'public/src'
  },
  myTarget: {
      files: {
        'public/src/index.html': 'templates/index.tpl.html'
      }
    }
  },
  injector: {
      options: {
        ignorePath : 'public/src/',
        addRootSlash : false
      },
      local_dependencies: {
        files: {
          'public/src/index.html': ['public/src/**/*.js','public/dist/js/templates.min.js',  'public/src/**/*.css'],
        }
      }
    },
          
  // Bower deps ==============================================================
  copy : config('copy'),

  "bower-install-simple": {
    options: {
        color: true
    },
  prod: {
    options: {
      production: true
    }
  },
  dev: {
    options: {
      production: false
    }
    }
  },

  wiredep : config('wiredep'),

  // JS TASKS ================================================================
  jshint : config('jshint'),

  ngtemplates : config('ngtemplates'),
  
  concat : config('concat'),
  
  uglify : config('uglify'),

  // CSS TASKS ===============================================================
  less : config('less'),

  cssmin: config('cssmin'),

  // COOL TASKS ==============================================================
  watch: {
    css: {
      files: ['public/src/css/**/*.less'],
      tasks: ['less', 'cssmin']
    },
    js: {
      files: ['public/src/js/**/*.js'],
      tasks: ['jshint', 'uglify', 'injector', 'wiredep']
    },
    html: {
      files: ['public/src/views/**/*.html'],
      tasks: ['ngtemplates', 'uglify']
    }
  },

  nodemon: {
    dev: {
      script: 'server.js'
    }
  },

  concurrent: {
    options: {
      logConcurrentOutput: true
    },
    tasks: ['nodemon', 'watch']
  }   

});

// simple build task 
// grunt.registerTask('build', [
//    'less', 'useminPrepare', 'concat','uglify', 'cssmin', 'rev', 'usemin'
// ]);
grunt.registerTask('templates', ['ngtemplates', 'uglify', 'injector']);

grunt.registerTask('install', ['bower-install-simple', 'injector', 'wiredep']);

grunt.registerTask('default', ['less', 'cssmin', 'jshint', 'ngtemplates', 'uglify', 'injector', 'wiredep', 'concurrent']);

grunt.registerTask('prod', ['less', 'cssmin', 'jshint', 'uglify', 'concurrent']);

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-nodemon');
grunt.loadNpmTasks('grunt-concurrent');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-rev');
grunt.loadNpmTasks('grunt-usemin');
grunt.loadNpmTasks('grunt-bower-task');
grunt.loadNpmTasks("grunt-bower-install-simple");
grunt.loadNpmTasks('grunt-wiredep');
grunt.loadNpmTasks('grunt-asset-injector');
grunt.loadNpmTasks('grunt-angular-templates');

};
