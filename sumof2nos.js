//Sum of Two Numbers

const prompt=require("prompt-sync")({sigint:true});

var num1 = parseFloat(prompt("Enter first number: "));
var num2 = parseFloat(prompt("Enter second number: "));
console.log("Sum: " + (num1 + num2));