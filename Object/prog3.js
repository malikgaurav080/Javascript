let person = {
    "age": 10,
    "name": "gaurav"
}


let person2 = person
person2.C = 10
person.class = 12;

console.log(person)

//person2---->connect with person

//Constructor object

function A(c){
    this.C = c
    this.name = "gaurav"
    this.age = 20
}
//we can add only if want to print value of D need to print with person1.D
A.prototype.D = 20

let A1 = new A("12");
let A2 = new A("14");


console.log(A1); 
console.log(A1.D); 

console.log(A2.D); 
console.log(A2);

//changing the protoype only applicable post new object defiend 
A.prototype = {"D":25}
let A3 = new A("14");
console.log(A3.D); 

//console.log(A.__proto__); removed

// let str = new String("gaurav");
// console.log(typeof(str));