const gulp        = require('gulp');
const pl          = require('gulp-load-plugins')();
const browserSync = require('browser-sync').create();
const runSequence = require('run-sequence');
const imagemin    = require('gulp-imagemin');
const connect     = require('gulp-connect-php');
const del         = require('del');

let server = new connect();

// start local php server
gulp.task('connect', () => {
  server.server({
    port: 9100,
    base: 'app'
  });
});
gulp.task('disconnect', () => {
  server.closeServer();
});

// compile sass to css
gulp.task('sass', () => {
  return gulp.src('app/scss/**/*.scss')
    .pipe(pl.sass())
    .pipe(pl.cssnano())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('css', () => {
  return gulp.src('app/scss/**/*.scss')
    .pipe(pl.sass())
    .pipe(pl.cssnano())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('js', () => {
  return gulp.src('app/js/**/*.js')
    .pipe(gulp.dest('dist/js'))
});

// watch app and run different tasks
gulp.task('watch', ['browserSync', 'sass'], () => {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/**/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
  gulp.watch('app/**/*.php', browserSync.reload);
});

// live reload
gulp.task('browserSync', () => {
  browserSync.init({
    //server: {
    //  baseDir: 'app'
    //},
    proxy: 'http://127.0.0.1:9100/'
  })
});

// concat files and ugilfy them
gulp.task('useref', () => {
  return gulp.src('app/**/*.html')
    .pipe(pl.useref())
    .pipe(pl.if('*.js', pl.uglify()))
    .pipe(pl.if('*.css', pl.cssnano()))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// optimze images
gulp.task('images', function() {
  return gulp.src('app/images/**/*.+(png|jpg|jpg|gif|svg)')
    .pipe(pl.cache(pl.imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
});

// optimze images
gulp.task('prod-images', function() {
  return gulp.src('app/images/**/*.+(png|jpg|jpg|gif|svg)')
    .pipe( pl.cache( pl.imagemin([
	  imagemin.gifsicle({ interlaced: true }),
	  imagemin.jpegtran({ progressive: true }),
	  imagemin.optipng({ optimizationLevel: 8 }),
	  imagemin.svgo({
		plugins: [
		  { removeViewBox: true },
		  { cleanupIDs: false }
		]}
      )
    ]) ) )
    .pipe(gulp.dest('dist/images'))
});

// copy files 
gulp.task('copy', function() {
  return gulp.src('app/*.+(png|xml|gif|ico)')
    .pipe(gulp.dest('dist/'))
})

// move fonts
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})

// clean dist directory
gulp.task('clean:dist', function() {
  return del.sync('dist');
});

// build project
gulp.task('build', () => {
  runSequence('clean:dist', ['sass', 'useref', 'images', 'fonts'])
});

// build project
gulp.task('prod', () => {
  runSequence('clean:dist', [
    'css',
    'js',
    'useref',
    'prod-images',
    'fonts',
    'copy'
  ])
});

// default task for easy start
gulp.task('default', () => {
  runSequence('build', ['connect', 'browserSync', 'watch'])
});
