/*globals process require */
const urls = [
    { url: process.argv[2], id: 0 },
    { url: process.argv[3], id: 1 },
    { url: process.argv[4], id: 2 }
];
let loadedData = ['', '', ''];
const http = require('http');

urls.forEach(url => {
    let allData = '';
    http.get(url.url, (res) => {
        res.setEncoding('utf8');
        res.on('data', (data) => allData += data);
        res.on('end', () => {
            loadedData[url.id] = allData;
        });
    });
});
setTimeout(() => {
    loadedData.forEach(index => console.log(index));
}, 1000);   