/* globals module require */

module.exports = function (dirName, ext, callback) {
    const fs = require('fs');
    const path = require('path');

    fs.readdir(dirName, function (err, files) {
        if (err) return callback(err);
        return callback(null, files.filter(f => path.extname(f) === `.${ext}`));
    });
};
