var browserifyTransforms = ['brfs'];

module.exports = function(grunt) {

	grunt.registerTask( 'default', [ 'clean', 'browserify', 'sass', 'autoprefixer' ] );
	
	grunt.initConfig({
        browserify: {
            options: {
                transform: browserifyTransforms
            },
            dist: {
                files: {
                    'dist/js/app.js': ['./app/app.js']
                }
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    './dist/css/style.css': './app/sass/style.scss'
                }
            }
        },

        autoprefixer: {
            dist: {
                files: {
                    './dist/css/style.css': './dist/css/style.css'
                }
            }
        },

        watch: {
            dist: {
                files: [ './app/**/*.js', './app/**/*.scss' ],
                tasks: [ 'default' ]
            }
        },

        clean: ['./dist']
	});

    grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
};