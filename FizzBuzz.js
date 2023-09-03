//FizzBuzz

const prompt = require("prompt-sync")({ sigint: true });

var i = parseInt(prompt("Enter the number: "));
if (i % 3 == 0 && i % 5 == 0) {
    console.log(" FizzBuzz ");
}
else if (i % 3 == 0) {
    console.log(" Fizz ");
}
else if (i % 5 == 0) {
    console.log(" Buzz ");
}
else {
    console.log(i);
}