sugar = [
	'src/*'
]

min = [
	'dist/sugar.min.js'
];
dev = [
	'dist/sugar.js'
];

module.exports = (grunt) ->

	# Project configuration.
	grunt.initConfig
		coffee:
			compile:
				options:
					sourceMap: true
					join: true
					expand: true
				files: [
					nonull: true
					src: sugar
					dest: 'dist/sugar.js'
				]
		uglify:
			compile:
				files:
					'dist/sugar.min.js' : ['dist/sugar.js']
		watch:
			compile:
				files: sugar
				tasks: ['coffee', 'concat:dev']

	# These plugins provide necessary tasks.
	grunt.loadNpmTasks 'grunt-contrib-coffee'
	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadNpmTasks 'grunt-contrib-uglify'

	# Default task.
	grunt.registerTask 'default', ['coffee', 'uglify']
