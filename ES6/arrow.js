// // function expression
// let x = function(x, y) {
//     return x * y;
//  }


//  let y = (x,y) => x*y  //Arrow function with single statement

//  let greet = () => console.log('Hello');
// greet(); // Hello

// let c = 3
// let a = c>2 ? console.log("hello") : console.log("wrong");


/**This with arrow function */


//Inside a regular function
function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        // this is accessible
        console.log(this.age);

        function innerFunc() {

            // this refers to the global object
            console.log(this.age);
            console.log(this);
        }

        innerFunc();

    }
}

let x = new Person();
x.sayName();

//Inside an arrow function
// function Person() {
//     this.name = 'Jack',
//     this.age = 25,
//     this.sayName = function () {

//         console.log(this.age);
//         let innerFunc = () => {
//             console.log(this.age);
//         }

//         innerFunc();
//     }
// }

// const x = new Person();
// x.sayName();