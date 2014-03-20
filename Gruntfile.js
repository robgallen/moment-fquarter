
module.exports = function(grunt) {
    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        uglify: {
            options: {
                report: 'gzip'
            },
            build: {
                src: 'moment-fquarter.js',
                dest: 'moment-fquarter.min.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('minify', ['uglify']);
};
