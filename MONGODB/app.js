// INITIALIZING
const express = require("express");
const path = require("path");

// Creating app and defining Port
const app = express();
const port = 3000;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))    // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// ENDPOINTS
app.get("/", (req, res)=>{
    res.status(200).render("topic1.pug")
})

app.get("/topic2", (req, res)=>{
    res.status(200).render("topic2.pug")
})

app.get("/topic3", (req, res)=>{
    res.status(200).render("topic3.pug")
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`Server started succesfully on port: ${port}`)
})