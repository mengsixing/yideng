var gulp = require('gulp');
var uglify=require('gulp-uglify');
var rename=require('gulp-rename');
const babel = require('gulp-babel');

//先整体编译
gulp.task('default', function() {
	gulp.src('./**/*.es')
		.pipe(babel())
		.pipe(uglify())
		.pipe(rename({extname: ".js"}))
		.pipe(gulp.dest('./'));
});


//遇到改变再重新编译
gulp.task('reload', function() {
	gulp.src('./**/*.es')
		.pipe(babel())
		.pipe(uglify())
		.pipe(rename({extname: ".js"}))
		.pipe(gulp.dest('./'));
});

var watcher = gulp.watch(['*/*.es'], ['reload']);


watcher.on('change', function(event) {
  console.log('文件 ' + event.path + ' was ' + event.type + ', 重新编译中...');
});