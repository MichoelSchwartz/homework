/*globals require process*/
const fs = require('fs');
const path = require('path');
fs.readdir(process.argv[2], (err, files) => {
    if(err) console.error(err);
    const filteredfiles = files.filter(f => path.extname(f) === `.${process.argv[3]}`);
    filteredfiles.forEach(f => console.log(f));
});