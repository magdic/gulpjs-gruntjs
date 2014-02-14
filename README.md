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
    zip = require('gulp-zip'),
    concat  = require('gulp-concat');

    gulp.task('js', function () { // gulp js = en consola y solo ejecuta la tarea de minimzar los js
    gulp.src('./app/js/*.js') // Fuente sin minizar
        .pipe(uglify())
        .pipe(concat('all.min.js')) 
        .pipe(gulp.dest('./app/js')); // destino minimizado
});

    gulp.task('zip', function () {
    gulp.src('app/*/*') //folder / * = js or css / another * = extensions
        .pipe(zip('public_site.zip'))
        .pipe(gulp.dest('./app'));
});

    gulp.task('default', function(){ //gulp en consola y ejecuta todas las tareas por default
    gulp.run('js'); // gulp js = en consola y solo ejecuta la tarea de minimzar los js
    gulp.run('zip'); // gulp js = en consola y solo ejecuta la tarea de minimzar los js
});
```

### Gruntfile.js sourcecode
```javascript
module.exports = function(grunt) { 

require('time-grunt')(grunt);
  
  grunt.initConfig({ 
    pkg: grunt.file.readJSON('package.json'), 
 
    // minify js
    uglify: {  
      minimizar: {
        files: {
          // primero el destino, segundo la fuente
          'app/js/all.min.js': ['app/js/*.js'] 
        }
      }
    },

    zip: {
    // We accept short syntax
    // 'dest/file.Zip': ['firstFileToZip', 'secondFileToZip', '.../folder/*']
    'app/public_site.zip': ['app/*']
  }
  }); 

  grunt.loadNpmTasks('grunt-zip'); // Para comprimir como zip desde consola = grunt zip
  grunt.loadNpmTasks('grunt-contrib-uglify'); // Para minimizar desde consola = grunt uglify
  grunt.registerTask('default', ['uglify']); // Para minimizar desde consola solamente = grunt 
};
```




