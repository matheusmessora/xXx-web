module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-cdn');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-strip');


    // Define the configuration for all the tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            build: {
                src: ["dist", "tmp", ".tmp", "dest", "src"]
            },

            trash: {
                src: ["tmp", ".tmp", "dest", "src"]
            }
        }
    });

    //grunt.registerTask('dist', [
    //    'clean:build',
    //    'useminPrepare',
    //    'concat:generated',
    //    'cssmin:generated',
    //    'uglify:generated',
    //    'rev',
    //    'copy:dist',
    //    'usemin',
    //    'htmlmin:dist',
    //    'strip:main',
    //    'clean:trash'
    //]);

    //grunt.registerTask('delivery', [
    //    'dist',
    //    'concat:analytics'
    //]);
};