/**
 * try {
    // try_statements
} 
catch(error) {
    // catch_statements  
}
finally() {
    // codes that gets executed anyway
}
 */



// program to show try...catch in a program
const numerator= 100, denominator = 'a';
//console.log(a);



try {
     console.log(numerator/denominator);

    // forgot to define variable a      
    console.log(a);
    console.log(numerator)
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}