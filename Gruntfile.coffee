sugar = [
	'src/*'
]
examples = sugar.slice 0
examples.push 'examples/*.coffee'

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
			examples:
				options:
					sourceMap: false
					join: true
					expand: true
				files: [
					nonull: true
					src: examples
					dest: 'examples/examples.js'
				]
		uglify:
			compile:
				files:
					'dist/sugar.min.js' : ['dist/sugar.js']
		watch:
			compile:
				files: sugar
				tasks: ['coffee', 'uglify']
			examples:
				files: examples
				tasks: ['coffee']


	# These plugins provide necessary tasks.
	grunt.loadNpmTasks 'grunt-contrib-coffee'
	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadNpmTasks 'grunt-contrib-uglify'

	# Default task.
	grunt.registerTask 'default', ['coffee', 'uglify']
