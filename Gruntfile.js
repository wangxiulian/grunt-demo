module.exports = function (grunt) {
  grunt.initConfig({
    mochacli: {
      options: {
        reporter: 'spec',
        bail: true         
      },
      all: ['test/*.js']                         
    }      
  });

  grunt.loadNpmTasks('grunt-mocha-cli')

  grunt.registerTask('default', ['mochacli']);
};
