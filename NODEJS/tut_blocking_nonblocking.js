// Synchronus or blocking 
// - line by line execution

const fs = require('fs')
let text = fs.readFileSync('./NODEJS/dele.txt', 'utf-8')
// This is a synchronus file reading function, i.e. it will stop the further execution here until this line has completed its action.
console.log(text)

// Asynchronus or non-blocking 
// - line by line execution not guranteed
// - callbacks will fire

fs.readFile('NODEJS/dele.txt', 'utf-8', (err, data)=> {
    console.log(data)
})
// This is an asynchronus file reading function, i.e. it will continue further execution of lines and will read the file simultaneously. It will not hault the program till it finishes its task. Once it has finished its task it will fire the callback function
console.log('This is a message after the readFile function')