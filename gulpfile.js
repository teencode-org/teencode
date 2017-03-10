var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');

// Copy static files and vendor libraries from /node_modules into public
gulp.task('copy', function() {
  gulp.src('node_modules/bootstrap/dist/**/bootstrap.min.*(css|js)')
    .pipe(gulp.dest('public/vendor/bootstrap'))

  gulp.src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('public/vendor/jquery'))

  gulp.src('src/index.html')
    .pipe(gulp.dest('public'))

  gulp.src('src/**/*.*(png|jpg|gif)')
    .pipe(gulp.dest('public'))
})

gulp.task('compile-all', ['sass', 'minify-css', 'minify-js', 'copy']);

gulp.task('default', ['compile-all', 'watch']);

// Minify compiled CSS
gulp.task('minify-css', ['sass'], function() {
  return gulp.src('src/css/main.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('public/css'))
});

// Minify JS
gulp.task('minify-js', function() {
  return gulp.src('src/js/main.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('public/js'))
});

// Compiles SCSS files from /scss into /css
gulp.task('sass', function() {
  return gulp.src('src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
});

gulp.task('watch', function() {
    gulp.watch('src/**/*', ['compile-all'])
});
