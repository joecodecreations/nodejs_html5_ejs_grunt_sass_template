module.exports = function(grunt, pkg, paths, connect) {
  var path = require('path');
  grunt.config.merge({
    connect: {
      server: {
        options: {

          livereload: connect.liveReloadPort,
          port: connect.port,
          hostname: connect.hostname,
          base: './public_html',
          open: {
            target: 'http://'+connect.hostname + ':' + connect.port
          }
        }
      }
    },
    express: {
      options: {
        // Override defaults here
      },
      dev: {
        options: {
          script: './server.js'
        }
      },
      prod: {
        options: {
          script: './server.js',
          node_env: 'production'
        }
      }
  }
  });
}
