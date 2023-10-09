/**
 * The class keyword is used to create a class.
 *  The properties are assigned in a constructor function

 */

// creating a class
class Person {
    constructor(name) {
    this.name = name;
  }

    // defining method
    greet() {
        console.log(`Hello ${this.name}`);
    }
}

// creating an object
let person1 = new Person('John');

// accessing property
console.log(person1.name); // John

// accessing method
person1.greet(); // Hello John
  

/**
 Here, person1 and person2 are objects of Person class.
Note: The constructor() method inside a class gets called automatically each time an object is created.
*/

// ?Note: JavaScript class is a special type of function. And the typeof operator returns function for a class.