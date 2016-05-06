'use strict';

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    webserver = require('gulp-webserver');

var nm = './node_modules/';

gulp.task('js', function() {
  gulp.src('builds/dev/js/*.js')
    .pipe(gulp.dest('builds/dist/js/'))
});

gulp.task('jade', function(){
  gulp.src('builds/dev/*.jade')
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('builds/dist/'))
});

gulp.task('sass', function () {
  gulp.src('builds/dev/sass/*.scss')
      .pipe(sass())
      .pipe(autoprefixer({
            browsers: ['last 10 versions','> 5%'],
            cascade: false
        }))
      .pipe(concat('style.css'))
      .pipe(gulp.dest('builds/dist/css/'));
});

gulp.task('img', function() {
  gulp.src('builds/dev/img/**/*')
    .pipe(gulp.dest('builds/dist/img/'));
});


gulp.task('watch', function() {
  gulp.watch('builds/dev/js/**/*.js', ['js']);
  gulp.watch('builds/dev/sass/**/*.scss', ['sass']);
  gulp.watch('builds/dev/**/*.html', ['html']);
  gulp.watch('builds/dev/img/**/*', ['img']);
  gulp.watch('builds/dev/fonts/**/*', ['fonts']);
  gulp.watch('builds/dev/**/*.jade', ['jade']);
});

gulp.task('libs', function() {
  gulp.src(nm+'jquery/dist/jquery.min.js')
      .pipe(gulp.dest('./builds/dist/libs/jquery/'));

  // gulp.src(nm+'/normalize.css/normalize.css')
  //     .pipe(gulp.dest('./builds/dist/libs/normalize'));

  gulp.src('builds/dev/libs/**/*.*')
      .pipe(gulp.dest('./builds/dist/libs/'));

});

gulp.task('fonts', function() {
  gulp.src('builds/dev/fonts/**/*')
      .pipe(gulp.dest('./builds/dist/fonts/'));
});

gulp.task('webserver', function() {
  gulp.src('builds/dist/')
      .pipe(webserver({
        livereload: true,
        open: false,
        port: 8080
      }));
});

gulp.task('default', [
  'libs',
  'fonts',
  'img',
  'js',
  'jade',
  'sass',
  'webserver',
  'watch'
]);
