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

    cssmin: {
      minify: {
      expand: true,
      cwd: 'app/css',
      src: ['*.css', '!*.min.css'],
      dest: 'app/css/',
      ext: '.min.css'
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
  grunt.loadNpmTasks('grunt-contrib-cssmin'); // Miniza css, desde consola grunt cssmin
  grunt.registerTask('default', ['uglify', 'zip', 'cssmin']); // tareas registradas al default = grunt 
};