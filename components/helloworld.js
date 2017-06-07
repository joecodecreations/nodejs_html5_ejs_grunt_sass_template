'use strict';
module.exports = {
  helloworld: (argpass, fn) => {
    let outgoingvariable = "hello world";
    fn(outgoingvariable);
  }
};
