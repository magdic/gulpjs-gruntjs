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
    gulp.src('app/*/*') // Main Folder / * = js or css / another * = extensions
        .pipe(zip('public_site.zip'))
        .pipe(gulp.dest('./app'));
});

    gulp.task('default', function(){ //gulp en consola y ejecuta todas las tareas por default
    gulp.run('js'); // gulp js = en consola y solo ejecuta la tarea de minimzar los js
    gulp.run('zip'); // gulp zip = en consola y solo ejecuta la tarea de comprimir en zip todo lo de app
});