/*
 * grunt-mongodb-fixtures
 * https://github.com/passkey/grunt-mongodb-fixtures
 *
 * Copyright (c) 2013 Kieu Anh Tuan
 * Licensed under the MIT license.
 */

'use strict';
var fixtures = require('pow-mongodb-fixtures');
var path = require('path');
module.exports = function(grunt) {
  grunt.registerMultiTask('mongodb_fixtures', 'Load mongodb fixtures for development', function() {
    var done = this.async();
    var mongoFixtures = fixtures.connect(this.options().connection);
    this.filesSrc.forEach(function(fixturePath) {
      var fixturePath = path.resolve(fixturePath);
      mongoFixtures.clearAllAndLoad(fixturePath, function(err) {
        if (err) {
          console.error(err);
        }
        done();
      })
    });
  });
};
