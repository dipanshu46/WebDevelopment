// First code for server Congratulations!! 
// We'll learn about it in detail in further tutorials

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo selectors & more designing</title>
      <style>
          .container {
              border: 2px solid red;
              background-color: rgb(223, 245, 201);
              padding: 34px;
              margin: 34px auto;
              width: 666px;
          }
  
          a {
              text-decoration: none;
          }
  
          a:hover {
              /* These attributes will be set when the element is being hovered by the mouse */
              color: black;
              background-color:rgb(221, 166, 38) ;
          }
          a:visited {
              /* This css will be applied when this element has been visited (generally used for links) */
              color: yellow;
          }
          a:active {
              /* This css will be applied when the element is active (i.e. being presses) */
              color: white;
              background-color: darkblue;
          }
  
          .btn {
              color: white;
              background-color: crimson;
              padding: 6px;
              border: none;
              /* cursor property to change cursor when hovering over this element */
              cursor: pointer;
              font-size: 13px;
              border-radius: 4px;
          }
  
      </style>
  </head>
  <body>
      <div id="cont1" class="container">
          <h3>This is my heading</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo temporibus exercitationem rem. Consectetur est illo officia nostrum consequuntur aliquid iste. Maiores repellat, sunt excepturi nulla unde facere? Alias officia recusandae cum nisi provident repellendus?</p>
          <a href="https://www.google.com" class="btn">Read more</a>
          <button class="btn">Contact Us</button>
      </div>
  </body>
  </html>`);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// REPL - Read Evaluate Print Loop
// It is an interactive shell which starts when we type node in the terminal
// It is simiar to the one we have in python 
// It reads one line of code, evaluates it and prints the return of the statement and then continues back to the reading state.
// _ is a special variable that gives us the result of the last evaluated line of code
// .exit is used to exit the loop