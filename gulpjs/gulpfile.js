var gulp    = require('gulp'),
    gutil    = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    zip = require('gulp-zip'),
    concat  = require('gulp-concat');

    gulp.task('js', function () { // gulp js = en consola y solo ejecuta la tarea de minimzar los js
    gulp.src('./app/js/*.js') // Fuente sin minizar
        .pipe(uglify())
        .pipe(concat('all.min.js')) 
        .pipe(gulp.dest('./app/js')); // destino minimizado
});

    gulp.task('minify-css', function() { // minify css

    gulp.src('./app/css/*.css') // css files to be compressed
    .pipe(minifyCSS(opts))
    .pipe(concat('all.min.css')) 
    .pipe(gulp.dest('./app/css/')) // destination of the css  files
});

    gulp.task('zip', function () {
    gulp.src('app/*/*') // Main Folder / * = js or css / another * = extensions
        .pipe(zip('public_site.zip'))
        .pipe(gulp.dest('./app/css'));
});

    gulp.task('default', function(){ //gulp en consola y ejecuta todas las tareas por default
    gulp.run('js'); // gulp js = en consola y solo ejecuta la tarea de minimzar los js
    gulp.run('zip'); // gulp zip = en consola y solo ejecuta la tarea de comprimir en zip todo lo de app
    gulp.run('minify-css'); // gulp minify-css = on console and minify css files
});