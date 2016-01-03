module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'public/'
        }
      }
    },
    sass: {
      dist: {
        files: {
          'public/stylesheets/styles.css' : 'sass/general.sass'
        },
        options: {
          style: 'compressed'
        }
      }
    },
    watch: {
      project: {
        files: ['public/**/*.js', 'sass/*.sass', 'public/**/*.html', 'public/**/*.json', 'public/**/*.css'],
        options: {
          livereload: true
        }
      },
      css: {
        files: 'sass/*.sass',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect', 'watch']);

};