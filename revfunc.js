//Reverse a string using built-in functions

const prompt = require("prompt-sync")({ sigint: true });

const s = prompt("Enter a string: ");

console.log(s.split("").reverse().join(""));