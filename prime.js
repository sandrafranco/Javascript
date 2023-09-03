//Prime Number Detector

const prompt = require("prompt-sync")({ sigint: true });

let flag=0;
var n = parseInt(prompt("Enter a positive number: "));
if (n == 0 || n == 1) 
{
    console.log("Neither prime nor composite ");
}
else if(n>1)
{
        for(let i=2; i<=n/2; i++)
        {
            if(n%i==0)
            {
                flag=1;
                break;
            }
        }

    if(flag == 1)
    {
        console.log("Not a prime no. ");
    }
    else
    {
        console.log("Is a prime no. ");
    }
}
else
{
    console.log("Error: No negative nos. ");
}