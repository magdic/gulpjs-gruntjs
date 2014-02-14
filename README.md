## Gulp.js the alternative to Grunt.js
### Gulp Docs
- [Website](http://gulpjs.com)
- [Guide doc](https://github.com/gulpjs/gulp/blob/master/README.md#gulp---)
- [Get Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#getting-started)




## Gulp/Grunt file.js

Grup and Grunt file example code, with the task to do the javascript min files 

### gulpfile.js sourcecode

```javascript
var gulp    = require('gulp'),
    gutil    = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');

    gulp.task('js', function () { // gulp js = on console just doing the js task
    gulp.src('./app/js/*.js') // source to minify
        .pipe(uglify())
        .pipe(concat('all.min.js')) 
        .pipe(gulp.dest('./app/js')); // min file dest
});

    gulp.task('default', function(){ //gulp on console and doing the default tasks
    gulp.run('js'); 
});
```

### Gruntfile.js sourcecode
```javascript
module.exports = function(grunt) { 
  grunt.initConfig({ 
    pkg: grunt.file.readJSON('package.json'), 
 
    uglify: {  
      minimizar: {
        files: {
          // first the dest, second the source
          'app/js/all.min.js': ['app/js/*.js'] 
        }
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-uglify'); // just doing the uglify task on console = grunt uglify
  grunt.registerTask('default', ['uglify']); // all taks on the grunt file on console = grunt 
};
```




