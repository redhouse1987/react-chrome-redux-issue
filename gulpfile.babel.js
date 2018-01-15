import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import rimraf from 'rimraf';
import gulpFont from 'gulp-font';

const plugins = loadPlugins();

import popupWebpackConfig from './popup/webpack.config';
import eventWebpackConfig from './background/webpack.config';
import contentWebpackConfig from './content/webpack.config';

var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');



gulp.task('movefonts',['clean'], function(){
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src('./popup/css/fonts/*')
  .pipe(gulp.dest('./build/fonts'));
});

gulp.task('moveimages',['clean'], function(){
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src('./assets/**/*', { base: './assets' })
  .pipe(gulp.dest('./build/img'));
});

gulp.task('sass',['clean'], function () {
 // gulp.src('./popup/**/*.scss')
    gulp.src('./popup/css/styles.scss')
   // .pipe(minifyCSS())
    .pipe(concat('style.min.css'))    
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
});
        


gulp.task('popup-js', ['clean'], (cb) => {
  webpack(popupWebpackConfig, (err, stats) => {
    if(err) throw new plugins.util.PluginError('webpack', err);

    plugins.util.log('[webpack]', stats.toString());

    cb();
  });
});

gulp.task('event-js', ['clean'], (cb) => {
  webpack(eventWebpackConfig, (err, stats) => {
    if(err) throw new plugins.util.PluginError('webpack', err);

    plugins.util.log('[webpack]', stats.toString());

    cb();
  });
});

gulp.task('content-js', ['clean'], (cb) => {
  webpack(contentWebpackConfig, (err, stats) => {
    if(err) throw new plugins.util.PluginError('webpack', err);

    plugins.util.log('[webpack]', stats.toString());

    cb();
  });
});

gulp.task('popup-html', ['clean'], () => {
  return gulp.src('popup/index.html')
    .pipe(plugins.rename('popup.html'))
    .pipe(gulp.dest('./build'))
});


gulp.task('copy-manifest', ['clean'], () => {
  return gulp.src('manifest.json')
    .pipe(gulp.dest('./build'));
});

gulp.task('clean', (cb) => {
  rimraf('./build', cb);
});

gulp.task('build', ['copy-manifest', 'popup-js', 'popup-html', 'event-js', 'content-js','sass','movefonts','moveimages']);

gulp.task('watch', ['default'], () => {
  gulp.watch('popup/**/*', ['build']);
  gulp.watch('content/**/*', ['build']);
  gulp.watch('background/**/*', ['build']);
  gulp.watch('./css/**/*.scss', ['build']);
  gulp.watch('assets/*', ['build']);
});

gulp.task('default', ['build']);
