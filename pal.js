//Palindrome checker

const prompt=require("prompt-sync")({sigint:true});

const s = prompt("Enter a string: ");
const len = s.length;

flag=0;
for(let i=0; i<len/2; i++){
    if(s[i]!==s[len-1-i])
    {
        flag=1;
    }
}
if(flag==1)
{
    console.log("It is not a palindrome"); 
}
else
{
    console.log("It is a palindrome");
}