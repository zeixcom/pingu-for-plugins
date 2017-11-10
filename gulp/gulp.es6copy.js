var gulp = require('gulp');

gulp.task('es6copy', function() {
  gulp.src('./src/js/*.es6')
    .pipe(gulp.dest('./dist'));
});
