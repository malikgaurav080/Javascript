/**\
 * The setTimeout() method executes a block of code after the specified time. The method executes the code only once.
 * !Syntax: 
 * ?setTimeout(function, milliseconds);
 */

// program to display a text using setTimeout method
function greet() {
    console.log('Hello world');
}

setTimeout(greet, 2000);   //async in nature
console.log('This message is shown first');


