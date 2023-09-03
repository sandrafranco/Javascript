//Fibonacci series

const prompt=require("prompt-sync")({sigint:true});

var n = parseInt(prompt("Enter the required number of terms in the sequence: "));
let first=0, second=1, third;

console.log("Fibonnaci Series: ");
for (let i = 1; i <= n; i++) 
{
    console.log(first);
    third = first + second;
    first = second;
    second = third;
}