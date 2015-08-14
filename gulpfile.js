'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('site-reload', function () {
  browserSync.reload();
});

gulp.task('browser-sync', ['site-reload'], function() {
  browserSync({
    server: {
      baseDir: ''
    }
  });
});


gulp.task('sass:watch', function () {
  gulp.watch(['index.html'], ['site-reload']);
  gulp.watch(['assets/css/app.css'], ['site-reload']);
});

gulp.task('default', ['sass:watch', 'browser-sync']);