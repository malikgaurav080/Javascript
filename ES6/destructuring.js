// assigning object attributes to variables
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female',
    kyc:    'Done'
}

// destructuring assignment
let { name: name1, age: age1, gender, kyc = 'not done' } = person;

console.log(name1); // Sara
console.log(age1); // 25
console.log(gender); // female
console.log(kyc);



const arrValue = ['one', 'two', 'three', 'four'];

// destructuring assignment in arrays
// assigning remaining elements to y
const [x, ...y] = arrValue;

console.log(x); // one
console.log(y); // ["two", "three", "four"]


// function a(...b){

// }

// a(1,2,3,4,5,6,7)