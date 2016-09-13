var gulp = require("gulp");
var jshint = require("gulp-jshint");

//object that contains our js files
var jsFiles = ['*.js','src/**/*.js'];

//Checks style of our js code by passing it to jshint
gulp.task('style', function(){
    return gulp.src(jsFiles)
        .pipe(jshint());
});

//Receives dependencies from bower to update our index links
gulp.task('inject', function(){
    var wiredep = require('wiredep').stream;
    var inject = require("gulp-inject");
    
    //grabs files that we make locally that are not managed by bower
    var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js'])
    var injectOptions = {
        ignorePath: '/public'
    };
    
    var options = { 
        bowerJson: require('./bower.json'),
        directory: './bower_components' ,
        ignorePath: '../../bower_components'
    }
    
    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});