var gulp = require('gulp');
var runSequence = require('run-sequence');
var requireDir = require('require-dir');

requireDir('./gulp');


gulp.task('default', function() {
  runSequence(
    'clean',
    ['babel', 'es6copy']
  );
});
