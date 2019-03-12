'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const minify = require('gulp-minify');
const nodemon = require('gulp-nodemon');
const image = require('gulp-image');

gulp.task('sass', function () {
    return gulp.src('./public/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('minify-css', function () {
    return gulp.src('./public/css/*.css')
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(gulp.dest('./dist/css/'));
});
 
gulp.task('minify-js', function() {
    return gulp.src(['./public/js/*.js', './public/js/*.mjs'])
        .pipe(minify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('include-views', function(){
    return gulp.src(['./public/src/**/*.*'])
        .pipe(gulp.dest('./dist/views'));
});

gulp.task('nodemon', function(callback){
    let started = false;
    return nodemon({
        script: 'dist/index.js'
      }).on('start', function(){
        if(!started){
            callback();
            started = true;
        }
      });
});

gulp.task('image', function () {
    return gulp.src('./public/img/*.png')
      .pipe(image())
      .pipe(gulp.dest('./dist/img'));
});

gulp.task('build', gulp.series(['sass','minify-css','minify-js','include-views', 'image']));

gulp.task('watch', function(){
    gulp.watch('./public/sass/*.scss', gulp.series('sass'));
    gulp.watch('./public/css/*.css', gulp.series('minify-css'));
    gulp.watch('./public/src/**/*.*', gulp.series('include-views'));
    gulp.watch('./public/img/*.png', gulp.series('image'));
});

gulp.task('default', gulp.series(['nodemon','watch']));