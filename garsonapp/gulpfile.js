var gulp = require('gulp'),
browserSync = require('browser-sync');


gulp.task('server', function(){
    browserSync.init({
        server: {
            baseDir: 'www'
        }
    });

    gulp.watch('www/**/*').on('change', browserSync.reload);
});