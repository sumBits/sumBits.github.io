var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant  = require('imagemin-pngquant');
var htmlmin = require('gulp-htmlmin');
var complexity = require('gulp-complexity');

gulp.task('appanalysis', function(){
    return gulp.src('js/app.js')
        .pipe(complexity());
});

gulp.task('controlleranalysis', function(){
    return gulp.src('js/controllers.js')
        .pipe(complexity());
});
 
gulp.task('minify', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});
 
gulp.task('minimg', function() {
    return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant({speed: 1})]
        }))
        .pipe(gulp.dest('dist/img'));
});
 
gulp.task('minify-css', function() {
  return gulp.src('*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('minfontawesome', function() {
  return gulp.src('font-awesome-4.4.0/css/font-awesome.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/font-awesome-4.4.0/css'))
});
 
gulp.task('compress', function() {
  return gulp.src('js/*.js')
    .pipe(uglify({
    	mangle: false
    }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('clean:.idea', function () {
  return del([
    'dist/.idea/**/*'
  ]);
});

gulp.task('default', ['compress', 'minify-css', 'minify']);
