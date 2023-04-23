// Including required modules - http and fs
const http = require('http');
const fs = require('fs');

// Creating hostname and port
const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync('./NODEJS/Custom_backend/index.html');
const about = fs.readFileSync('./NODEJS/Custom_backend/about.html');
const services = fs.readFileSync('./NODEJS/Custom_backend/services.html');
const contact = fs.readFileSync('./NODEJS/Custom_backend/contact.html');

const server = http.createServer((req, res) => {
    
    console.log(req.url);
    // This line gives the request in url made by the user. Try reloading and changing the url port number and reload the page, in console you will find your activities

    url = req.url
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html')
    // The above two lines can be written in a single line using this.
    res.writeHead(200, {'Content-Type':'text/html'});

    // Serving different pages for different url requests
    if (url=='/'){
        res.end(home);
    }
    else if(url=='/about'){
        res.end(about);
    } 
    else if(url=='/services'){
        res.end(services);
    } 
    else if(url=='/contact'){
        res.end(contact);
    }
    else {
        res.statusCode = 404;
        res.end('<h1>Error 404: Not found</h1>');
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})