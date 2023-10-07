// create a Map
const map1 = new Map(); // an empty map
console.log(map1); // Map {}

map1.set("name","gaurav")
console.log(map1); // Map {}


map1.set('info', {name: 'Jack', age: 26});
console.log(map1); // Map {"info" => {name: "Jack", age: 26}}
console.log(map1.get('info'));

console.log(map1.has('info')); // true

map1.delete('name');
console.log(map1);

// removing all element
// map1.clear();
// console.log(map1);

console.log(map1.size); 

map1.set('age',23)
map1.set('height',175)

map1.delete('info')

// looping through Map
for (let [key, value] of map1) {

    console.log(`${key} : ${value}`);
}

// console.log(typeof({1:2}));


// looping through the Map
for (let values of map1.values()) {
    console.log(values);
}

// looping through the Map
for (let values of map1.keys()) {
    console.log(values);
}