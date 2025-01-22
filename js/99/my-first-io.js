/*globals require process*/
const fs = require('fs');
const fileString = fs.readFileSync(process.argv[2], 'utf-8');
const lines = fileString.split('\n');
console.log(lines.length - 1);