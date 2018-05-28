var gulp = require('gulp'),
sass = require ('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('app/sass/main.sass')
        .pipe(sass())
        .pipe(gulp.dest('add/css'))

})

// gulp.task('mytask', function () {
//    return gulp.src('source-file')
//        .pipe(plugin())
//        .pipe(gulp.dest('folder'))
// });