var fs = require('fs');
var gulp = require('gulp');
var rsync = require('gulp-rsync');
var GulpSSH = require('gulp-ssh')

gulp.task('default', function() {
  gulp.src('app.js')
    .pipe(rsync({
      root: '',
      hostname: 'pi@192.168.0.122',
      destination: ''
    }))
});

var config = {
  host: '192.168.0.122',
  port: 22,
  username: 'pi',
  password: 'raspberry'
}

var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config
})

gulp.task('run', ['default'], function() {
    gulpSSH.shell("nohup node app.js &")
})
