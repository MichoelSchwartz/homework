/*globals process require */
const url = process.argv[2];
const http = require('http');

let allData = '';
http.get(url, (res) => {
    res.setEncoding('utf8');
    res.on('data', (data) => allData += data);
    res.on('end', () => {
        console.log(allData.length);
        console.log(allData);
    });
});