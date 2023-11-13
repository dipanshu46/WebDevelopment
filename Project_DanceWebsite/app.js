// Importing required modules
const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const bodyparser = require('body-parser')

// Creating the app and defining the port
const app = express();
const port = 3000;

// EXPRESS SPECIFIC STUFF  
app.use('/static', express.static('static'))    // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

main().catch(err => console.log(err));

async function main() {
  // Connecting to the database contactDance
  await mongoose.connect('mongodb://127.0.0.1:27017/contactDance');

  // Defining the schema
  const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String,
  });

  // Compiling Model Contact from contactSchema
  const Contact = mongoose.model("Contact", contactSchema)

  // ENDPOINTS 
  app.get("/", (req,res)=>{
      const params = {}
      // res.status(200).render('index.pug', params)
      res.status(200).render('home.pug', params)
  })
  
  app.get("/contact", (req,res)=>{
      const params = {}
      res.status(200).render('contact.pug', params)
  })
  
  app.post("/contact", (req,res)=>{
    var myData = new Contact(req.body)
    myData.save().then(()=>{
      res.status(200).render('contact.pug')
    }).catch(()=>{
      res.status(400).send("Query was not saved")
    })
  })
}

// START THE SERVER
app.listen(port, (req, res)=>{
    console.log(`Server started succesfully on port: ${port}`)
})