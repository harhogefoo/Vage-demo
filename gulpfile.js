const gulp = require('gulp')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')
const browserSync = require('browser-sync')

const minimist = require('minimist')

const paths = {
  'html': './public/',
  'in_js': './src/',
  'out_js': './public/',
}

const envSettings = {
  string: 'env',
  default: {
    env: process.env.NODE_ENV || 'development',
  },
}

// 実行時の引数を取り込む
const options = minimist(process.argv.slice(2), envSettings)
const production = options.env === 'production'

const webpackPlugins = production ? [new webpack.optimize.UglifyJsPlugin()] : []
const config = {
  webpackOptions: {
    entry: {
      'js/index': paths.in_js + 'index.js',
    },
    output: {
      path: '/public',
      filename: '[name].bundle.js',
    },
    plugins: webpackPlugins,
    devtool: 'source-map',
  },
  envProduction: production,
}

gulp.task('webpack', () => {
  return webpackStream(config.webpackOptions, webpack).pipe(gulp.dest(paths.out_js))
})

// Browser Sync
gulp.task('browser-sync', () => {
  browserSync({
    port: 8888,
    server: { baseDir: paths.html },
  })
  gulp.watch(paths.in_js + '**/*.js', ['reload'])
})

gulp.task('reload', () => {
  browserSync.reload()
})

gulp.task('watch', () => {
  gulp.watch(paths.in_js + '**/*.js', ['webpack'])
})

gulp.task('default', ['webpack', 'browser-sync', 'watch'])
