let person = {
    "name": "Gaurav",
    "age": 20,
    "subjects": {
        "sub1":"Maths",
        "sub2":"english"
},
    "greet": function(){console.log("hii")}
}

for(let key in person){
    console.log(key, person[key])
}

console.log(person.name)
console.log(person.subjects.sub1)
person.greet()


//in object for in loop is only applicable


person.City = "Bareilly";
person.height = function(){console.log("20")}

console.log(person)
person.height()