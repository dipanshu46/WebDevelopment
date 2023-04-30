// INITIALIZING 
const express = require("express");
const path = require("path");
const fs = require("fs")
const app = express();
const port = 3000;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// ENDPOINTS
app.get("/", (req, res)=>{
    const params = {
        'title' : "PubG is the best game",
        // We can also write keys in both the ways.
        content : "This is the best content available on the internet so far so use it wisely."
    }
    res.status(200).render('index.pug', params);
})

app.post("/" ,(req, res)=>{
    // console.log(req.body)
    // Note: Values from a form will be taken using name in the input element.
    let name = req.body.name
    let age = req.body.age
    let gender = req.body.gender
    let address = req.body.address
    let more = req.body.more
    
    let Output = `Name of the client ${name}, ${age} years old, ${gender}, residing at ${address}.\nMore about the client, ${more}`
    fs.writeFileSync('output.txt', Output)
    const params = {
        'message' : "Your form has been submitted successfully.",
    }
    res.status(200).render('index.pug', params);
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application has started successfully on port ${port}`);
})