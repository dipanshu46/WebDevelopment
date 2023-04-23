// Includig required modules - http and fs
const http = require('http');
const fs = require('fs');

// Reading an html file content that will be served later
const fileContent = fs.readFileSync('NODEJS/intro_node_js.html', 'utf-8');
console.log(fileContent);

// Creating hostname and portnubmer
const hostname = '127.0.0.1';        // This is a local host
const portnubmer = 800;

// Creatine a server - to create a server we use http.createServer() method
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.end(fileContent);
})

server.listen(portnubmer, hostname, ()=>{
    console.log(`Server Running on https://${hostname}:${portnubmer}`);
})