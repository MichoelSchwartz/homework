/*globals require process*/
const fs = require('fs');
const http = require('http');
const server = http.createServer(function (req, res) {
    const stream = fs.createReadStream(process.argv[3],'utf-8');
    stream.pipe(res);
});
server.listen(process.argv[2]);  