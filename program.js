const prompt = require('prompt-sync')();

let a = prompt("Enter First Number")
let b = prompt("Enter Second Number")
let c = prompt("Enter Third Number")


// if(a>b && a>c){
//     console.log("largest is a = " + a);
// } else if(b>c && b >a){
//     console.log("largest is b = " + b);
// }else{
//     console.log("largest is c = " + c);

// }

let largest = Math.max(a,b,c)
console.log("Largest is = ",largest); 
let smallest = Math.min(76,87,9)
console.log(smallest)
