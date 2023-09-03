//Factorial Calculator

const prompt=require("prompt-sync")({sigint:true});

var n = parseInt(prompt("Enter a positive number: "));

//negative nos
if(n<0){
    console.log("ERROR:No negative nos ");
}

//number is 0
if(n==0){
    console.log('The factorial of ${n}  is 1.');
}

//positive nos
if(n>0){
    fact=1;
    for(i=1; i<=n; i++){
        fact *=i;
    }
    console.log("The factorial of " +n+ " is " +fact);
}