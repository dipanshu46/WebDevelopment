// before starting express
// install postman for your system to use its http features like get post etc. It is an api that makes making these requests and to see their responses a lot easier.

// What is Express?
// Express is a Web Application framework for Node.js which is free and open source.

// Including required modules
const express = require("express");
const path = require('path')

// Creating an instance or application of express()
const app = express();

// Initializing port number for our application
const port = 3000;

// For serving static files
app.use('/static', express.static('static'))

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))

// Get request at end point /
// When a get request at end point / will be made this method will send an response.
app.get("/", (req, res)=>{
    res.send("This is home page of my first express app");
})

// Get requeset at end point /about
app.get("/about", (req, res)=>{
    res.send("This is about page my first express app");
})

// Post request at end point /about
app.post("/about", (req, res)=>{
    // you can also write status in your response like this.
    res.status(200).send("This is a post request from about page of my first express app")
})

// Status checking
app.get("/this", (req, res)=>{
    res.status(404).send("Page not found on my first express app")
})

// Our pug demo endpoint
app.get("/demo", (req, res)=>{
    res.status(200).render('demo', {title : 'Hey Dipanshu', message: 'Hello there and thanks for telling me how to use pug!'})
})

// Now we have to listen to our port
app.listen(port, ()=>{
    console.log(`The application started successfully on ${port}`);
})


// Run the script and open postman and type localhost:<portnumber>