// include gulp
var gulp = require('gulp'); 
 
// include plug-ins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
 
// JS hint task
gulp.task('jshint', function() {
  gulp.src('./src/src-js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// JS concat, strip debugging and minify
gulp.task('scripts', function() {
  gulp.src(['./src/src-js/lib.js','./src/src-js/*.js'])
    .pipe(concat('script.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts/'));
});

// default gulp task
gulp.task('default', ['jshint', 'scripts'], function() {
	// watch for JS changes
	  gulp.watch('./src/scripts/*.js', function() {
	    gulp.run('jshint', 'scripts');
	  });
});