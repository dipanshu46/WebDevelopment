// Reference can be taken from the original mongoose documentation for understanding any of the following steps.

// Initializing mongoose
const mongoose = require('mongoose')


// To check whether our database is connected or not.
main().catch(err => console.log(err));

async function main() {
    // Connectinig mongoose to our database, First parameter takes uri of the database, second parameter is optional. Try commenting and uncommenting the following two statements and check their results individually
    mongoose.connect('mongodb://localhost/DipanshuTest')
    // mongoose.connect('mongodb://localhost/DipanshuTest', {useNewUrlParser: true, useUnifiedTopology: true})

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    
    // Creating a schema for telling our database what type of content will be inside what. Here we are telling that in the kittySchema, a name parameter will be passed and it will contain String.
    const kittySchema = new mongoose.Schema({
        name: String
    })
    
    // We can also create methods for our schema.
    kittySchema.methods.speak = function () {
        var greeting = `Meow! My name is ${this.name}!`
        console.log(greeting)
    }
    // NOTE: methods must be added to the schema before compiling it with mongoose.model()
    
    // Creating a model for our schema. A model is basically a compiled schema. It is a class with which we construct documents.
    const Kitten = mongoose.model('Kitten', kittySchema)
    // Note: when we create a model the first parameter in the model is made plural and is assigned as a name for an empty collection in the database connected. 
    
    // Creating instance of our class Kitten with parameter name set to Maria
    var Maria = new Kitten({name: 'Maria'})
    var James = new Kitten({name: 'James'})
    var Garfield = new Kitten({name: 'Garfield'})
    // console.log(Maria.name)
    // Maria.speak()
    // Note: Even after creating an instance of the class the document will not be saved in the collection automatically (as it was created) instead, we will have to save the document to reflect the same in our database.
    
    // Saving the documents created
    await Maria.save()
    await James.save()
    await Garfield.save()
    
    // To perform find operation on the database remember we used to write db.collectionName.find() and also provided some filter objects inside the parenthesis
    // Similarly, here we call the find method on the collection or the class we made.
    const kittens = await Kitten.find()  // Since Kitten is the class here that we have created.
    console.log(kittens)
}