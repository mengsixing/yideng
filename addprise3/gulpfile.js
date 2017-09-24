var gulp = require('gulp');

var babel=require('gulp-babel');


gulp.task('default',['praise'], function() {
    gulp.watch('src/**/*.es', ['praise']);
});


gulp.task('praise',function(){
    gulp.src(['src/**/*.es','!src/public/*/*.es'])
    .pipe(babel())
    .pipe(gulp.dest('./build/'));
});