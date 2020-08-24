// <binding ProjectOpened='default' />
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-beep');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-svgmin');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        paths: {
            base: 'app',
            js: '<%= paths.base %>/scripts',
            static: '<%= paths.base %>/static',
            styles: '<%= paths.base %>/styles',

            outBase: 'wwwroot',
            scriptOut: '<%= paths.outBase %>/js/raw',
            staticOut: '<%= paths.outBase %>/static',
            cssOut: '<%= paths.outBase %>/css'
        },

        watch: {
            gruntfile: {
                files: ['Gruntfile.js'],
                tasks: ['default'],
                options: { reload: true }
            },
            styles: {
                files: ['<%= paths.styles %>/**/*.less'],
                tasks: ['less'],
                options: { spawn: true, interrupt: true },
            },
            images: {
                files: ['<%= paths.static %>/img/**/*.*', '!<%= paths.static %>/img/**/*.svg'],
                tasks: ['clean:images', 'copy:images'],
                options: { spawn: false, interrupt: true }
            },
            svg: {
                files: ['<%= paths.static %>/img/**/*.*', '!<%= paths.static %>/img/**/*.svg'],
                tasks: ['clean:svg', 'svgmin'],
                options: { spawn: false, interrupt: true }
            },
            fonts: {
                files: ['<%= paths.static %>/fonts/**/*.*'],
                tasks: ['copy:fonts'],
                options: { spawn: false, interrupt: true }
            }
        },

        less: {
            development: {
                options: {
                    sourceMap: true,
                    sourceMapRootpath: '../../../../'   // to bubble up from wwwroot/themes/paper/css/site.css
                },
                files: {
                    '<%= paths.cssOut %>/Monitoring.css': '<%= paths.styles %>/Monitoring.less',
                    '<%= paths.cssOut %>/General.css': '<%= paths.styles %>/General.less'
                }
            }
        },

        svgmin: {
            options: {
                plugins: [
                    { removeViewBox: false },               // don't remove the viewbox attribute from the SVG
                    { removeUselessStrokeAndFill: false },  // don't remove Useless Strokes and Fills
                ]
            },
            files: { expand: true, cwd: '<%= paths.static %>', src: ['img/**/*.svg'], dest: '<%= paths.staticOut %>/' }
        },

        copy: {
            dependencies: {
                files: [
                    // external libs
                    {
                        nonull: true,
                        expand: true,
                        flatten: true,
                        src: [
                            'node_modules/bootstrap/dist/js/bootstrap.bundle.min*',
                            'node_modules/jquery/dist/jquery.js',
                            'node_modules/jquery-ajax-unobtrusive/dist/jquery.unobtrusive-ajax.js',
                            'node_modules/jquery-validation/dist/jquery.validate.js',
                            'node_modules/jquery-validation-unobtrusive/dist/jquery.validate.unobtrusive.js',
                            'node_modules/bootstrap-select/dist/js/bootstrap-select.js',
                            'node_modules/exif-js/exif.js',
                            'node_modules/promise-polyfill/promise.js'
                        ],
                        dest: '<%= paths.scriptOut %>/lib/'
                    },
                    { expand: true, cwd: 'node_modules/bootstrap/dist', src: ['fonts/*.*'], dest: '<%= paths.staticOut %>/' },
                    { expand: true, cwd: 'node_modules/bootstrap/dist/css', src: ['bootstrap.min.*'], dest: '<%= paths.cssOut %>/' }
                ]
            },
            images: {
                files: [{ expand: true, cwd: '<%= paths.static %>', src: ['img/**/*.*', '!img/**/*.svg'], dest: '<%= paths.staticOut %>/' }]
            },
            fonts: {
                files: [{ expand: true, cwd: '<%= paths.static %>', src: ['fonts/**/*.*'], dest: '<%= paths.staticOut %>/' }]
            }
        },

        clean: {
            // clean external dependencies
            dependencies: ['<%= paths.scriptOut %>/lib/**/*.*'],
            fonts: ['<%= paths.staticOut %>/fonts/**/*.*'],
            images: ['<%= paths.staticOut %>/img/**/*.*', '!<%= paths.staticOut %>/img/**/*.svg'],
            svg: ['<%= paths.staticOut %>/img/**/*.svg'],
        }
    });

    grunt.registerTask('install', ['less', 'copy', 'svgmin']);

    grunt.registerTask('default', ['clean', 'install', 'watch']);
};