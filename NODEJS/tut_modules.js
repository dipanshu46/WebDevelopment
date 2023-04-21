// Built-In modules are the files that are written by someone else and can be used by us for performing some specific tasks.
// javascript modules can be searched on the official NodeJs website to know more about them.
// Modules can either be built-in, created by own and can be installed which are third party modules.

// In this tutorial we will learn about File System module and will try to read a file and write its content in another file.

// Including fs (File system) module
const fs = require("fs");

// reading a file using readFileSync("file_name.txt", encoding) and storing its content as a string in text variable
let text = fs.readFileSync("./about.txt", "utf-8")

// Performing string operation replace
text = text.replace("git", "good")

console.log("The content of the file is:")
console.log(text)

console.log("Creating a new file...")
// To write to a file we use writeFileSync("file_name.txt", content)
fs.writeFileSync("./NODEJS/dele.txt", text)