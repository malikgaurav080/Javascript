//Getter & Setter
let person = {
    "name": "Gaurav",
    "age": 20,
    get getName(){
        return this.name
    },
    set setAge(newAge){
        this.age = newAge
    },
    get getAge(){
        return this.age
    }
}

console.log(person.name);
console.log(person.getName);

console.log(person.age);
person.setAge = 30
console.log(person.age);
console.log(person.getAge);

