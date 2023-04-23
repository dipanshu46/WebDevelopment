console.log("This is mod.js")

// Creating a function to use it by importing
function average (arr) {
    // Function for average of an array of numbers passed
    let sum = 0;
    arr.forEach(element => {
        sum += element
    });

    // returning the average
    return sum/arr.length
}

// This line marks this file as a module and specifies what all would be imported when require function is applied on this file.
// module.exports = average;        // commenting this line as we need to see the other case of module.exports

// Exporting an object this time.
module.exports = {
    avg: average,       // Note : we have passed a function here as avg and haven't called it.
    naam: 'Dipanshu',
    repo: 'GitHub'  
}

// Note : module.exports is itself an object. So we can also write like this
// module.exports.naam = 'Dipanshu'     // This can be accessed using var.naam in other file where const var = require('mod.js')
// So we have basically made a key named naam and have assigned a value to it and exported