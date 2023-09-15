const numerator= 100, denominator = 'a';

try {
     console.log(numerator/denominator);
     console.log(a);
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}
finally {
     console.log('Finally will execute every time');
}

/**
 * In the above program, an error occurs and that error is caught by the catch block.
 *  The finally block will execute in any situation ( if the program runs successfully or if an error occurs)
 */