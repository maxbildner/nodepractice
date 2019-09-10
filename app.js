// NODE JS NOTES from https://www.youtube.com/watch?v=TlB_eWDSMt4
// 0) 
// At runtime (when u run app.js in node), all the code below gets put inside a wrapper function
// (function (exports, require, module, __filename, __dirname) { ... }
// require argument looks global, but it is LOCAL!
// exports == shortcut for module.exports
// console.log(__filename);               //=> /Users/Lin/Desktop/nodepractice/app.js
// console.log(__dirname);                //=> /Users/Lin/Desktop/nodepractice


// 1)
// console.log(window);                   //=> ERROR bec. there is NO WINDOW or document objects in Node JS (only in browsers) 
// console.log(global);                   //=> ? output looks similar to window on browser?


// 2)
// const logger = require('./logger.js'); // ? ES5 way of importing?
// better to use const rather than let since we don't want to accidentally overwrite module

// logger.log('yo');                      // Only if we export as an OBJECT ex. module.exports.log = 
// logger('yo');                          // Only if we export as an Function ex. module.exports = 


// 3)
// importing the path module, which has nice helper functions for working with file/directory paths
// const path = require('path');          // store module in variable called path

// let pathObj = path.parse(__filename);  //=> returns object with keys about file 
// console.log(pathObj);  //=>
// {
//   root: '/',
//   dir: '/Users/Lin/Desktop/nodepractice',
//   base: 'app.js',
//   ext: '.js',
//   name: 'app'
// }


// 4)
// importing the module called OS, which has nice helper functions for working with Opearting System stuff
// const os = require('os');
// let totalMemory = os.totalmem();
// let freeMemory = os.freemem();
// console.log(totalMemory);                    //=> 4294967296   amount of total system memory in bytes as an integer.
// console.log(freeMemory);                     //=> 24236032     amount of free system memory in bytes as an integer.


// 5)
// const fs = require('fs');
// NON BLOCKING == ASYNCHRONOUS   Always Prefer ASYNCH METHODS
// NODE has single thread
// Synchronous below:
// const files = fs.readdirSync('./');          //=> returns an array of strings of all files in current folder
// console.log(files);                          //=> [ '.git', 'README.md', 'app.js', 'logger.js' ]

// Asynch Version:
// fs.readdir('./', function (err, files) {     //=> [ '.git', 'README.md', 'app.js', 'logger.js' ]
//   if (err) console.log(err);
//   else console.log(files);
// });


// 6)
// Events
// An event is a signal (ex. new request) that something has happened in the application
const EventEmitter = require('events');
const emitter = new EventEmitter();

// // Register a listener, runs callback when event is raised
emitter.on('yoyo', (e) => {         
  console.log('listener called');
  console.log(e);
});

// Raise an event
emitter.emit('yoyo', { id: 1, url:'http://'} ); // obj argument == event argument
// Raise: logging (data: message)


// 7)
// 









