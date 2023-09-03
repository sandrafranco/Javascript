//Check if two strings are Anagrams(contain the same characters in a different order)

const prompt = require("prompt-sync")({ sigint: true });

var a = prompt("Enter the first string: ");
var b = prompt("Enter the second string: ");

let len1 = a.length;
let len2 = b.length;
if (len1 !== len2) 
{
    console.log('Invalid Input');
    return;
}

let str1 = a.split('').sort().join('');
let str2 = b.split('').sort().join('');
if (str1 == str2) 
{
    console.log("True");
} 
else 
{
    console.log("False");
}