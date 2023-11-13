// Advanced Concept
// Run this script in terminal using node

// let promise = new Promise(function(resolve, reject) {
//     console.log("Hello")
//     resolve(56)
// })

// console.log("Hello One")
// setTimeout(function() {
//     console.log("Hello Two in 2 seconds")
// }, 2000)

// console.log("My name is Hello Three")
// console.log(promise)

// Fetch google.com homepage ==> console.log("google.com homepage done")
// Fetch data from data api
// Fetch pictures from the server
// Print Downloading
// Rest of the script

// Promises work asynchronusly.
// And they can only be resolved or rejected.
// To create a Promise.
let p1 = new Promise((resolve, reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        // console.log("I am a promise and I am resolved")
        resolve(true)
    }, 5000)    
})

let p2 = new Promise((resolve, reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        // console.log("I am a promise and I am rejected")
        reject(new Error("I am an Error"))
    }, 5000)    
})

// To get the value
p1.then((value)=> {
    console.log(value)
})

// To the catch the errors
// p2.catch((error)=>{
//     console.log("Some error occurred in p2")
// })

// Another way to catch an error is using then function itself 
p2.then((value)=>{
    console.log(value)
}, (error)=>{
    console.log(error)
})