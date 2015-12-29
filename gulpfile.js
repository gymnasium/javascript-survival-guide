var gulp = require('gulp'),
  webserver = require('gulp-webserver'),
  server = {
    host: 'localhost',
    port: '5000'
  };

gulp.task('webserver', function() {
    gulp.src('www')
        .pipe(webserver({
          host: server.host,
          port: server.port
        }));
});
 
gulp.task('serve', ['webserver']);