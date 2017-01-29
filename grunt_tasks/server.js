module.exports = function(grunt, pkg, paths, connect) {
  var path = require('path');
  grunt.config.merge({
    connect: {
      server: {
        options: {

          livereload: connect.liveReloadPort,
          port: connect.port,
          hostname: connect.hostname,
          base: paths.src,
          open: {
            target: connect.hostname + ':' + connect.port
          }
        }
      }
    },
  });
}
