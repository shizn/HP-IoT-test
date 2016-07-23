var fs = require('fs')
var gulp = require('gulp')
var rsync = require('gulp-rsync')
var GulpSSH = require('gulp-ssh')
var config = require('./config.json')

gulp.task('default', function() {
  gulp.src('app.js')
    .pipe(rsync({
      root: '',
      hostname: 'pi@192.168.0.122',
      destination: ''
    }))
});

var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config
})

gulp.task('run', ['default'], function() {
    gulpSSH.shell("nohup node app.js &")
})
