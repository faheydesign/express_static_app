module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        },
      },
      uses_defaults: ['*.js', 'scripts/**/*.js', ],
    },

    simplemocha: {
      options: {
        globals: ['should'],
        timeout: 3000,
        ignoreLeaks: false,
        // grep: '*-test',
        ui: 'bdd',
        reporter: 'tap'
      },

      all: { src: ['test/*/*.js'] }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('default', 'simplemocha');
  grunt.registerTask('test', ['jshint', 'simplemocha']);

};
