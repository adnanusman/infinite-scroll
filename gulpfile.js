const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// BrowserSync Reload
function reload(done) {
  browserSync.reload();
  done();
}

gulp.task('copy-js', function() {
  return gulp.src('src/**/*.js')
  .pipe(gulp.dest('dist'))
})

gulp.task('copy-html', function() {
  return gulp.src('src/**/*.html')
  .pipe(gulp.dest('dist'))
})

gulp.task('copy-css', function() {
  return gulp.src('src/**/*.css')
  .pipe(gulp.dest('dist'))
})

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
    port: 9000,
    open: true,
    notify: false
  })
})

gulp.task('watch', function watcher() {
    gulp.watch('src/**/*.js', gulp.series('copy-js', reload));
    gulp.watch('src/**/*.css', gulp.series('copy-css', reload));
    gulp.watch('src/**/*.html', gulp.series('copy-html', reload));
  }
)

gulp.task('default', gulp.parallel('dotenv', 'copy-js', 'copy-css', 'copy-html', 'browser-sync', 'watch'));