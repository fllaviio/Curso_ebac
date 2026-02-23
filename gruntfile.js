module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        less: {
            dist: {
                files: {
                    'dist/css/style.css': 'less/style.less'
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    'dist/js/main.min.js': 'js/main.js'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);

};