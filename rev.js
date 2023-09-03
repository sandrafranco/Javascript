//Reverse a String without built-in function

const prompt = require("prompt-sync")({ sigint: true });

const s = prompt("Enter a string: ");
const len = s.length;
rev = " ";
for(i=len-1; i>=0; i--)
{
    rev += s[i];
}
console.log(rev);