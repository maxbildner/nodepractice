// imagine we send an http request to this endpoint
let url = 'http://mylogger.io/log';   // implementation detail

function logMe(message){
  // Send an HTTP request
  console.log(message);
}

// we add a method called log to what we export (will be available publicly)
// module.exports.log = logMe;        // export an OBJECT, must call in app.js        logger.log()
module.exports = logMe;               // export a Function, lets you call in app.js   logger()

// module.exports.endPoint = url;     // no need to export this (implementation detail)





