'use strict';

var gulp = require('gulp');
var wrench = require('wrench');
var connect = require('gulp-connect'),
	karma = require('karma').server,
    protractor = require("gulp-protractor").protractor;
/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function (file) {
	return (/\.(js|coffee)$/i).test(file);
}).map(function (file) {
	require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
	gulp.start('build');
});


gulp.task('unit', function (done) {
    karma.start({
        configFile: __dirname + '/tests/karma.conf.js',
        singleRun: true
    }, done);
});

gulp.task('e2e', function(done) {
    var args = ['--baseUrl', 'http://127.0.0.1:8888'];
    gulp.src(["./tests/e2e/*.js"])
        .pipe(protractor({
            configFile: "tests/protractor.conf.js",
            args: args
        }))
        .on('error', function(e) { throw e; });
});
