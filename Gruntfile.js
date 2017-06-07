'use strict';
module.exports = (grunt) => {
  const pkg = require('./package.json'),
    paths = {
      src: './src',
      dist: './public_html'
    };

  /* Local Server Variables Information */
  const connect = {
    port: 3000,
    liveReloadPort: 35729,
    hostname: '127.0.0.1',
    localHost: '127.0.0.1'
  };

  require('./grunt_tasks/sass.js')(grunt, pkg, paths, connect);
  require('./grunt_tasks/server.js')(grunt, pkg, paths, connect);
  require('load-grunt-tasks')(grunt);

  grunt.config.merge({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.registerTask('processSass', 'Process sass code.', [
    'sass_globbing',
    'sass',
    'postcss'
  ]);

  grunt.registerTask('default', 'Clean the dist directory, compile Sass, minify the results.', [
    'clean',
    'processSass'
  ]);

  grunt.registerTask('custom', 'Roll your own task order', function (additionalTasks) {
    let tasks = [],
      n = 0,
      e = 0;
    if (additionalTasks !== undefined) {
      let taskList = additionalTasks.split(',');
      taskList.forEach((taskName) => {
        e = (n < 1) ? '\n\n\n' : '';
        n++;
        if (grunt.task.exists(taskName)) {
          tasks.push(taskName);
          grunt.log.writeln(e + '[SUCCESS] Registering task:' + taskName);
        } else {
          grunt.log.writeln(e + '[ERROR] Could not find grunt task:' + taskName);
        }
      });
    }
    if (tasks.length) {
      grunt.log.writeln('\n\n Starting tasks...');
      grunt.task.run(tasks);
    } else {
      grunt.log.writeln('you have not added any tasks.....terminating');
    }
  });

  grunt.registerTask('watcher', 'Compiles your sass and watches for changes', function (additionalTasks) {
    let tasks = [];
    if (additionalTasks !== undefined) {
      let taskList = additionalTasks.split(',');
      taskList.forEach(function (taskName) {
        if (grunt.task.exists(taskName)) {
          tasks.push(taskName);
          grunt.log.writeln('[SUCCESS] Pushing Task for use:' + taskName);
        } else {
          grunt.log.writeln('[ERROR] Could not Find Grunt Task:' + taskName);
        }
      });
    }

    tasks.push(
      'sass_globbing',
      'sass',
      'postcss',
      'startServer'
    );

    // Kick off the task runs
    grunt.task.run(tasks);
  });

  grunt.registerTask('startServer', 'start server', (additionalTasks) => {
    let tasks = [];
    if (additionalTasks !== undefined) {
      var taskList = additionalTasks.split(',');
      taskList.forEach((taskName) => {
        if (grunt.task.exists(taskName)) {
          tasks.push(taskName);
          grunt.log.writeln('[SUCCESS] Pushing Task for use:' + taskName);
        } else {
          grunt.log.writeln('[ERROR] Could not Find Grunt Task:' + taskName);
        }
      });
    }
    tasks.push('watch');
    grunt.task.run(tasks);
  });
};
