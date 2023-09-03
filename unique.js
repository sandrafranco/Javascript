const prompt=require("prompt-sync")({sigint:true});

var a=["a","b","c","a","d"];
var arr=[];
var n=prompt("Enter no. of elements in input array: ");
console.log("Enter elements of array: ");
for(let i=0; i<n; i++)
{
    arr[i]=parseInt(prompt());
}
for(let i=0; i<=n; i++)
{
    var j=0;
    for (j=0; j<i; j++)
           if(arr[i] == arr[j])
               break;
    if(i == j)
    console.log(arr[i]);  
}
