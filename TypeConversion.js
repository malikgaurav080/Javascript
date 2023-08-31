// Implicit   --> Automatic
// Explicit   ---> Manually 

const { log } = require("console");

// + -->concat here + will treat as a concat and automatic change the behaviour of second number as a string
//case 1 
console.log( '2'+ '2')
console.log( 2 + '2')
console.log('2'+4);
console.log(2 + 'a');
console.log('hello' + 'world');

//case 2 
console.log(4 - '2');
console.log(4 - 'abc');
console.log(4 * '2');
console.log(4 - true);
console.log(4 - false);


console.log('hello' - 'world');

//CASE 3
let result;
result = 4 + undefined;
console.log(result);  // NaN

result = 4 - undefined;
console.log(result);  // NaN

result = true + undefined;
console.log(result);  // NaN

result = null + undefined;
console.log(result);  // NaN


//eXPLICIT
// Here we will try to convert the variable datatypes manually
console.log(Number(true)) //1
console.log(Number(false)) //0

console.log(Number('acvd'))  //NaN 

console.log(Number('22'))   //22


let m = 123456
console.log(typeof(m));

let u = String(m)
console.log(u);
console.log(typeof(u));

let results;
results = Boolean('');
console.log(results); // false

results = Boolean(0);
console.log(results); // false

results = Boolean(undefined);
console.log(results); // false

results = Boolean(null);
console.log(results); // false

results = Boolean(NaN);
console.log(results); // false

results = Boolean(324.3);
console.log(results); // true

results = Boolean('hello');
console.log(results); // true

results = Boolean(' ');
console.log(results); // true