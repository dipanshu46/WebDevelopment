// Importing required modules
const express = require("express");
const path = require("path");

// Creating the app and defining the port
const app = express();
const port = 3000;

// EXPRESS SPECIFIC STUFF  
app.use('/static', express.static('static'))    // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// ENDPOINTS 
app.get("/", (req,res)=>{
    const params = {}
    res.status(200).render('index.pug', params)
})

// START THE SERVER
app.listen(port, (req, res)=>{
    console.log(`Server started succesfully on port: ${port}`)
})