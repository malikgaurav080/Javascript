/*
Swap two numbers
case1: no need to take extra variable
case: take help of another variable
case3: ES6
*/ 

let a = 5
let b = 7

/*
//Case 1
a = a+b   //now a = 12
b = a-b   //b=12-7=5
a = a-b  //a=12-5=7
*/

console.log("before swap")
console.log(`a is ${a} and b is ${b}`);

/*
//Case 2
let temp  = a  //temp=5
a = b     //a =7
b = temp //b= 5
*/
// console.log("after swap");
// console.log(`a is ${a} and b is ${b}`)


//case 3 ES6--> Destructurig
[a, b] = [b, a];
console.log("after swap")
console.log(`a is ${a} and b is ${b}`)

