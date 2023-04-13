console.log("This is tutorial for functions");

let name = "Dipanshu";
let name1 = "Harry"
let name2 = "Shubham"
let name3 = "Rohan"
let name4 = "Sagar"
let greetText = "Good Morning"
console.log(`${name} is a good boy`);
console.log(`${name1} is a good boy`);
console.log(`${name2} is a good boy`);
console.log(`${name3} is a good boy`);
console.log(`${name4} is a good boy`);

// Writing the same lines again and again gets tiring and boring and our code too looks messy.
// So we use functions to reduce the repeatetions of lines.

// Creating a function
function greet(name, text = 'Greetings from Javascript'){
    let name1 = "Name1"
    console.log(`${text} ${name}`)
    console.log(`${name} is a good boy`)
}
// Calling this function greet required number of times with passing the parameter that is required.
greet(name, greetText)  // This function call contains both the parameters so the provided values will be used inside the function.
greet(name1)            // These function calls do not contain the second parameter, and since the second parameter has a default value set so it won't raise an error and will use the default value wherever required inside the function.
greet(name2)
greet(name3)
let retrnVal = greet(name4)     // The function greet does not have a return value so it will return undefined when we assign the function call to 
console.log(retrnVal)

// Function with a return value
function sum(a,b,c){
    d = a + b + c
    return d
}

retrnVal = sum(1,2,3)
console.log(retrnVal)

// Some practices to keep in mind while creating functions
// 1) Pass only those values as parameters in the functions that will be used, else the code will become unoptimised.
// 2) Create a function for only one task.
// 3) Functions should be made easy to read