/* globals require process */

const mymodule = require('./mymodule');

function callback(err, data) {
    if (err) {
        console.log(err);
    }
    data.forEach(d => console.log(d));
}

mymodule(process.argv[2], process.argv[3], callback);
