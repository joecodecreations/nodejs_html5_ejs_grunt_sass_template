// var Client = require('node-rest-client').Client;
module.exports = {
  
  helloworld: function (argpass, fn) {
       //argpass incoming Variables
       //fn outgoing variables

       var outgoingvariable = "hello world";
       fn(outgoingvariable);

  } //end api function
};
