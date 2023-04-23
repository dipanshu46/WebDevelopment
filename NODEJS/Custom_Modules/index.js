console.log("This is index.js")

// Importing the custom module
const mod = require('./mod')
// This simple means --> mod = module.exports of the mentioned file
// Printing what we received by importing the file
console.log(mod)
// since function is returned, our mod has become a function and we can use it to call the function as done below.
// console.log(mod([2,3,4]))    // Commenting this to see the other case of module.exports

// Since an object is returned to the mod variable we can access it in this way.
console.log(mod.avg([2,3,4]))   // Since a function was passed inside the object as avg we can access it here.
console.log(mod.naam)
console.log(mod.repo)