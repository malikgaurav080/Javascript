let person = {
    "name": "Gaurav",
    "age": 20,
    "subjects": {
        "a":10,
        "sub1":"Maths",
        "sub2":"english",
        "msg": function(){
            let c = 10;
            console.log(this.sub1)
        }
    }
}

person.subjects.msg()

