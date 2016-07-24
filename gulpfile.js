var fs = require('fs')
var gulp = require('gulp')
var rsync = require('gulp-rsync')
var GulpSSH = require('gulp-ssh')
var config = require('./iot_config.json')

gulp.task('default', function() {
  gulp.src('app.js')
    .pipe(rsync({
      root: '',
      hostname: config.username + '@' + config.host,
      destination: ''
    }))
});

var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config
})

gulp.task('run', ['default'], function() {
    gulpSSH.shell("node app.js")
})
