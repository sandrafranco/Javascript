//Odd or even

const prompt=require("prompt-sync")({sigint:true});

var num = parseInt(prompt("Enter the number: "));

if(num % 2==0){
    console.log("The number is Even. ");
}
else{
    console.log("The number is Odd. ");
}

