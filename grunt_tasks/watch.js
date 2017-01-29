module.exports = function (grunt, pkg) {

    grunt.config.merge({

        clean: {
            assetsDist: ["./dist/*"],
            sassGlobbing: ["./src/**/__*"],
            shots: ["./test/visual/shots/*.png", "!./test/visual/shots/*.baseline.png"]
        },

        copy: {
            templates: {
                expand: true,
                cwd: 'src',
                src: ['library/**/api/*.twig'],
                dest: 'dist/library/templates/',
                flatten: true,
            },
            data: {
                expand: true,
                cwd: 'src/library',
                src: ['**/docs/*.json', '**/docs/*.yaml', '**/tests/*.json'],
                dest: 'dist/library/data/',
                flatten: true,
            },
            schemas: {
                expand: true,
                cwd: 'src/library',
                src: ['**/api/*.json'],
                dest: 'dist/library/schemas/',
                flatten: true,
            },
            docs: {
                expand: true,
                src: ['src/library/**/*.docs.md'],
                dest: 'dist/library/docs/',
                flatten: true,
            },
            images: {
                expand: true,
                cwd: 'src/',
                src: ['images/*.{png,jpg,gif}'],
                dest: 'dist/images/',
                flatten: true,
            }
        },

        watch: {
            templates: {
                files: ['src/library/**/api/*.twig'],
                tasks: ['copy:templates']
            },
            data: {
                files: ['src/library/**/*.docs.json', 'src/library/**/*.docs.yaml', 'src/library/**/*.tests.json'],
                tasks: ['copy:data']
            },
            schemas: {
                files: ['src/library/**/api/*.json'],
                tasks: ['copy:schemas']
            },
            test_data: {
                files: ['src/library/**/*.docs.md'],
                tasks: ['copy:docs']
            },
            images: {
                files: ['src/images/*.{png,jpg,gif}'],
                tasks: ['copy:images']
            },
        }

    });

}
