/**
 * Copyright(c) 2015, canvara Technologies Pvt. Ltd.
 */

'use strict';

var paths = {
  js: ['*.js', 'test/**/*.js','**/*.js', '!node_modules/**']
};

module.exports = function(grunt) {
  // Project Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: {
        src: paths.js,
        options: {
          jshintrc: true
        }
      }
    }
  });

  //Load NPM tasks
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['jshint']);
};