'use strict';

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
// var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('styles', function () {
  return gulp.src('./src/css/main.css')
    // Auto-prefix css styles for cross browser compatibility
    .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    // Minify the file
    .pipe(csso())
    // Output
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('scripts', function() {
  return gulp.src('./src/js/**/*.js')
    // Minify the file
    .pipe(uglify())
    // Output
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('pages', function() {
  return gulp.src(['*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('images', function() {
   var imgSrc = 'src/images/*.+(png|jpg|gif)',
   imgDst = 'dist/images';

   gulp.src(imgSrc)
   .pipe(gulp.dest(imgDst));
});

gulp.task('fonts', function() {
   var src = 'src/fonts/**/*',
   dest = 'dist/fonts';

   gulp.src(src)
   .pipe(gulp.dest(dest));
});

// Clean output directory
gulp.task('clean', () => del(['dist']));

// Gulp task to minify all files
gulp.task('default', ['clean'], function () {
  runSequence(
    'styles',
    'scripts',
    'pages',
    'images',
    'fonts'
  );
});
