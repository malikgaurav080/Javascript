// create Set
const set1 = new Set(); // an empty set
console.log(set1); // Set {}



l = [1, 1,2,3,4,5,5,6]
s = new Set(l)

console.log(Array.from(s));



// Set with multiple types of value
const set2 = new Set([1, 1,2,3,4,5,5,6]);
console.log(set2); // Set {1, "hello", {count: true}}