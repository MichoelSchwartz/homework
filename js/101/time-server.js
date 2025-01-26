 /* globals require process */
const now = new Date();

const year = now.getFullYear();
const month = (now.getMonth() + 1).toString().padStart(2, '0');
const days = now.getDate().toString().padStart(2, '0');
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');

 const net = require('net');
 const server = net.createServer(function (socket) {  
    socket.end(`${year}-${month}-${days} ${hours}:${minutes}\n`);  
  });  
  server.listen(process.argv[2]);