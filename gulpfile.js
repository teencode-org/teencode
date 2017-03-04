var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");

// Copy static files and vendor libraries from /node_modules into public
gulp.task('copy', function() {
  gulp.src('node_modules/bootstrap/dist/**/bootstrap.min.*(css|js)')
    .pipe(gulp.dest('public/vendor/bootstrap'))

  gulp.src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('public/vendor/jquery'))

  gulp.src('src/index.html')
    .pipe(gulp.dest('public'))
})

gulp.task('default', ['sass', 'minify-css', 'copy']);

// Minify compiled CSS
gulp.task('minify-css', ['sass'], function() {
  return gulp.src('css/main.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('public/css'))
});

// Compiles SCSS files from /scss into /css
gulp.task('sass', function() {
  return gulp.src('src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
});
