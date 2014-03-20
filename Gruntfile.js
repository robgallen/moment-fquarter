
module.exports = function(grunt) {
    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! \n * <%= pkg.title || pkg.name %> v<%= pkg.version %>\n' +
            ' * <%= pkg.homepage %>\n' +
            ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * License: <%= pkg.license %>\n' +
            ' */\n',

        // Task configuration.
        uglify: {
            options: {
                banner: '<%= banner %>',
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