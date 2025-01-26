/* globals require process */
const http = require('http');

const server = http.createServer(function (req, res) {
    const url = new URL(req.url);

    const date = new Date(url.searchParams.entries[0].iso);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const unixtime = date.getTime();

    const timeObject = {
        hour: hours,
        minute: minutes,
        second: seconds
    };
    const unix = {
        unixtime: unixtime
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    switch (url.pathname) {

        case '/api/parsetime':
            res.end(JSON.stringify(timeObject));
            break;
        case '/api/unixtime':
            res.end(JSON.stringify(unix));
            break;
    }
});
server.listen(Number(process.argv[2]));