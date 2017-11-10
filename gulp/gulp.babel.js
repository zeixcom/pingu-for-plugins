var gulp = require('gulp');

gulp.task('babel', function() {
  var babel = require('gulp-babel');

  gulp.src('./src/js/*{.es6, js}')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('./dist'))
});
