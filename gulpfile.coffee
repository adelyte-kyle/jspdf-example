gulp = require 'gulp'
gutil = require 'gulp-util'
plumber = require 'gulp-plumber'
jade = require 'gulp-jade'
webpack = require 'webpack'

webpackConfig = require './webpack.config.coffee'

gulp.task 'build', ['webpack', 'jade']

gulp.task 'watch', ['build'], ->
  gulp.watch 'src/**/*.coffee', ['webpack']
  gulp.watch 'src/**/*.scss', ['webpack']
  gulp.watch 'src/**/*.jade', ['jade']

gulp.task 'jade', ->
  gulp.src('src/**/*.jade')
    .pipe plumber()
    .pipe jade(pretty: true, locals: web: true)
    .pipe gulp.dest('dist')

# Webpack
gulp.task 'webpack', (done) ->
  webpack webpackConfig, (error, stats) ->
    if error
      throw new gutil.PluginError 'webpack', error

    gutil.log '[webpack]', stats.toString()

  done()

