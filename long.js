//Longest word in a sentence

const prompt = require("prompt-sync")({ sigint: true });

var s = prompt("Enter the string: ");

var arr = s.match(/\w[a-z]{0,}/gi); 
//will return each word in the form of a list which is stored in arr

var word = arr[0];
for (let i = 1; i < arr.length; i++) 
{
    if (word.length < arr[i].length) 
    {
        word = arr[i];
    }
}
console.log(word);
