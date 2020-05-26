const c = require('./script2');

// built in modules
const fs = require('fs');   //file system
const http = require('http'); 

// Modules for packages
// nodemon   npm install --save --dev



const a = c.largeNumber;
const b = 5;

console.log(a + b);

//setTimeout(() => {
//    console.log( a+ b);
//}, 3000)
