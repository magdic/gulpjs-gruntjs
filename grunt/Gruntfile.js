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