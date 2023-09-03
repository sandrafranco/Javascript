//Count of vowels

const prompt = require("prompt-sync")({ sigint: true });

var s = prompt("Enter a string: ");

const count = s.match(/[aeiou]/gi).length;
console.log(count);


