/*globals require process*/
const fs = require('fs');
fs.readFile(process.argv[2], 'utf-8', (err, data) => {
    if (err) throw err;
    const lines = data.split('\n');
    console.log(lines.length - 1);
});