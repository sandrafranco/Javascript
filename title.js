//Capitalize every word in a sentence

const prompt = require("prompt-sync")({ sigint: true });

var s = prompt("Enter the string: ");

str = s.split(" ");

for (var i = 0, x = str.length; i < x; i++) 
{
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
}

console.log(str.join(" "));